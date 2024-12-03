import { apiPath } from "@/common/index.server";
import { authFetch } from "../fetch/authFetch.server";
import { data, redirect } from "@remix-run/node";
import { accessTokenCookie, refreshTokenCookie } from "@/.server/cookies";

export async function logoutAction(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  const headers = new Headers();

  const logoutResp = await authFetch({
    config: {
      method: "post",
      url: apiPath.logoutApi,
    },
    optionalHeaders: headers,
    cookieHeader,
  });

  if (logoutResp.ok) {
    throw redirect("/auth?page=login", {
      headers: [
        ["Set-Cookie", await accessTokenCookie.serialize("", { maxAge: -1 })],
        ["Set-Cookie", await refreshTokenCookie.serialize("", { maxAge: -1 })],
      ],
    });
  }

  throw data("", {
    status: logoutResp.status,
  });
}
