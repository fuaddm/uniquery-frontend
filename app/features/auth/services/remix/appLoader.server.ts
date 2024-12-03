import { data } from "@remix-run/node";
import { authFetch } from "../fetch/authFetch.server";
import { apiPath } from "@/common/index.server";

export async function appLoader(request: Request) {
  const headers = new Headers();
  const cookieHeader = request.headers.get("Cookie");

  const resp = await authFetch({
    config: {
      method: "get",
      url: apiPath.meApi,
    },
    optionalHeaders: headers,
    cookieHeader,
  });

  return data("", {
    status: resp.status,
    headers,
  });
}
