import { data, redirect } from "@remix-run/node";
import { SignUpSchema } from "../../schemas";
import { axiosInstance } from "@/.server/axiosInstance";
import { apiPath, returnErr } from "@/common/index.server";
import { ServiceResp } from "@/common";
import { proceedKeyCookie } from "@/.server/cookies";

export async function signupAction(formData: FormData) {
  const headers = new Headers();

  const email = formData.get("email");
  const password = formData.get("password");

  const parseRes = SignUpSchema.safeParse({ email, password });

  if (!parseRes.success) {
    throw data("", {
      status: 400,
    });
  }

  const signupResp = await axiosInstance
    .post(apiPath.signupApi, {
      email,
      password,
    })
    .then(async (resp): Promise<ServiceResp> => {
      const proceedKey = resp.data.data.proceedKey;

      headers.set("Set-Cookie", await proceedKeyCookie.serialize(proceedKey));

      return { status: resp.status, ok: true, data: null, key: null };
    })
    .catch(returnErr);

  if (signupResp.ok) {
    return redirect("/otp", {
      headers,
    });
  }

  return data(signupResp, {
    status: signupResp.status,
  });
}
