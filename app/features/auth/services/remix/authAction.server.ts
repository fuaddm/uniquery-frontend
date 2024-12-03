import { data } from "@remix-run/node";
import { loginAction } from "./loginAction.server";

export async function authAction(request: Request) {
  const formData = await request.formData();
  const formType = formData.get("formType");

  if (formType === "login") {
    return await loginAction(formData);
  }

  return data("");
}
