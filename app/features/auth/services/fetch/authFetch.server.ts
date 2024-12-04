import { axiosInstance } from "@/.server/axiosInstance";
import { accessTokenCookie, refreshTokenCookie } from "@/.server/cookies";
import { ServiceResp } from "@/common";
import { apiPath, returnErr } from "@/common/index.server";
import { data, redirect } from "@remix-run/node";
import axios, { isAxiosError } from "axios";

type authFetchProps = {
  config?: axios.AxiosRequestConfig<any>;
  optionalHeaders: Headers;
  cookieHeader: string | null;
  retry?: boolean;
};

export async function authFetch({ config, optionalHeaders, cookieHeader, retry = true }: authFetchProps) {
  const setCookies = optionalHeaders.getSetCookie().join("; ");

  const accessToken = (await accessTokenCookie.parse(setCookies)) ?? (await accessTokenCookie.parse(cookieHeader));

  if (!accessToken && retry) {
    return await tryToRefreshToken(setCookies, cookieHeader, optionalHeaders, config);
  }

  if (!accessToken) {
    throw redirect("/auth?page=login");
  }

  try {
    const apiResp = await axiosInstance({
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...config?.headers,
      },
      ...config,
    });

    return { status: apiResp.status, ok: true, data: apiResp.data, key: null };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.config);
      if (error.response) {
        if (error.response.status === 401 && retry === true) {
          return await tryToRefreshToken(setCookies, cookieHeader, optionalHeaders, config);
        }
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return { status: error.response.status, ok: false, data: null, key: error.response.data.meta.key };
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js

        throw data("", {
          status: 403,
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        throw data("", {
          status: 500,
        });
      }
    }

    throw data("", {
      status: 500,
    });
  }
}

async function tryToRefreshToken(setCookies: string, cookieHeader: string | null, optionalHeaders: Headers, config?: axios.AxiosRequestConfig<any>) {
  const refreshToken = (await refreshTokenCookie.parse(setCookies)) ?? (await refreshTokenCookie.parse(cookieHeader));

  if (!refreshToken) {
    throw redirect("/auth?page=login");
  }

  const refreshResp = await axiosInstance
    .post(apiPath.refreshTokenApi, {
      refreshToken,
    })
    .then(async (resp): Promise<ServiceResp> => {
      const newAccessToken = resp.data.data.accessToken;
      const newRefreshToken = resp.data.data.refreshToken;

      optionalHeaders.set("Set-Cookie", await accessTokenCookie.serialize(newAccessToken));
      optionalHeaders.append("Set-Cookie", await refreshTokenCookie.serialize(newRefreshToken));

      return { status: resp.status, ok: true, data: null, key: null };
    })
    .catch(returnErr);

  if (!refreshResp.ok) {
    throw redirect("/auth?page=login", {
      headers: [
        ["Set-Cookie", await accessTokenCookie.serialize("", { maxAge: -1 })],
        ["Set-Cookie", await refreshTokenCookie.serialize("", { maxAge: -1 })],
      ],
    });
  }

  return await authFetch({ config, optionalHeaders, cookieHeader, retry: false });
}
