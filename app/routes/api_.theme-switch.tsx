import { prefs } from "@/.server/cookies";
import { theme } from "@/components";
import { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/react";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const theme = formData.get("theme") as theme;

  const themeCookie = await prefs.serialize({ theme });

  const referer = request.headers.get("Referer") || "/";

  return redirect(referer, {
    headers: {
      "Set-Cookie": themeCookie,
    },
  });
};
