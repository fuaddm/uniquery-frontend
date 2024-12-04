import { axiosInstance } from "@/.server/axiosInstance";
import { proceedKeyCookie } from "@/.server/cookies";
import { ServiceResp } from "@/common";
import { apiPath, returnErr } from "@/common/index.server";
import { data, redirect } from "@remix-run/node";

export async function otpLoader(request: Request) {
  const headers = new Headers();
  const cookieHeader = request.headers.get("Cookie");
  const proceedKey = await proceedKeyCookie.parse(cookieHeader);

  if (!proceedKey) {
    throw redirect("/auth?page=signup");
  }

  const proceedKeyResp = await axiosInstance
    .post(apiPath.checkProceedKeyApi, {
      proceedKey,
    })
    .then(async (resp): Promise<ServiceResp> => {
      const email = resp.data.data.email;
      return { status: resp.status, ok: true, data: email, key: null };
    })
    .catch(returnErr);

  if (!proceedKeyResp.ok) {
    headers.set("Set-Cookie", await proceedKeyCookie.serialize("", { maxAge: -1 }));

    throw redirect("/auth?page=signup", {
      headers,
    });
  }

  return data(proceedKeyResp);
}
