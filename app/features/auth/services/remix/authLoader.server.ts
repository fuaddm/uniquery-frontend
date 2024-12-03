import { axiosInstance } from "@/.server/axiosInstance";
import { accessTokenCookie, refreshTokenCookie } from "@/.server/cookies";
import { ServiceResp } from "@/common";
import { apiPath, returnErr } from "@/common/index.server";
import { data, redirect } from "@remix-run/node";

export async function authLoader(request: Request) {
  const headers = new Headers();
  const cookieHeader = request.headers.get("Cookie");
  const accessToken = await accessTokenCookie.parse(cookieHeader);

  if (!accessToken) {
    const refreshToken = await refreshTokenCookie.parse(cookieHeader);

    if (refreshToken) {
      const refreshResp = await axiosInstance
        .post(apiPath.refreshTokenApi, {
          refreshToken,
        })
        .then(async (resp): Promise<ServiceResp> => {
          const newAccessToken = resp.data.data.accessToken;
          const newRefreshToken = resp.data.data.refreshToken;

          headers.set("Set-Cookie", await accessTokenCookie.serialize(newAccessToken));
          headers.append("Set-Cookie", await refreshTokenCookie.serialize(newRefreshToken));

          return { status: resp.status, ok: true, data: null, key: null };
        })
        .catch(returnErr);

      if (!refreshResp.ok) {
        headers.set("Set-Cookie", await accessTokenCookie.serialize("", { maxAge: -1 }));
        headers.append("Set-Cookie", await refreshTokenCookie.serialize("", { maxAge: -1 }));
      } else {
        throw redirect("/app", {
          headers,
        });
      }
    }
  }

  const meResp = await axiosInstance
    .get(apiPath.meApi, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((resp): ServiceResp => {
      return { status: resp.status, ok: true, data: null, key: null };
    })
    .catch(returnErr);

  if (meResp.ok) {
    throw redirect("/app");
  } else {
    headers.set("Set-Cookie", await accessTokenCookie.serialize("", { maxAge: -1 }));
    headers.append("Set-Cookie", await refreshTokenCookie.serialize("", { maxAge: -1 }));
  }

  return data("", {
    headers,
  });
}
