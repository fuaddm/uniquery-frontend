import { data, redirect } from "@remix-run/node";
import { LoginSchema } from "../../schemas";
import { axiosInstance } from "@/.server/axiosInstance";
import { accessTokenCookie, refreshTokenCookie } from "@/.server/cookies";
import { ServiceResp } from "@/common";
import { apiPath, returnErr } from "@/common/index.server";

export async function loginAction(formData: FormData) {
  const headers = new Headers();

  const email = formData.get("email");
  const password = formData.get("password");

  const parseRes = LoginSchema.safeParse({ email, password });

  if (!parseRes.success) {
    throw data("", {
      status: 400,
    });
  }

  const loginResp = await axiosInstance
    .post(apiPath.loginApi, {
      email,
      password,
    })
    .then(async (resp): Promise<ServiceResp> => {
      const accessToken = resp.data.data.accessToken;
      const refreshToken = resp.data.data.refreshToken;

      headers.set("Set-Cookie", await accessTokenCookie.serialize(accessToken));
      headers.append("Set-Cookie", await refreshTokenCookie.serialize(refreshToken));

      return { status: resp.status, ok: true, data: null, key: null };
    })
    .catch(returnErr);

  if (loginResp.ok) {
    return redirect("/app", {
      headers,
    });
  }

  return data(loginResp, {
    status: loginResp.status,
  });
}
