import { data } from "@remix-run/node";
import { loginAction } from "./loginAction.server";
import { signupAction } from "./signupAction.server";

export async function authAction(request: Request) {
  const formData = await request.formData();
  const formType = formData.get("formType");

  if (formType === "login") {
    return await loginAction(formData);
  } else if (formType === "signup") {
    return await signupAction(formData);
  }

  return data("");
}
