import { localeCookie } from "@/.server/cookies";
import { locale } from "@/common";
import { ActionFunctionArgs, redirect } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const lng = (await request.formData()).get("lng") as locale;

  const serializedCookie = await localeCookie.serialize(lng);

  const referer = request.headers.get("Referer") || "/";

  return redirect(referer, {
    headers: {
      "Set-Cookie": serializedCookie,
    },
  });
};
