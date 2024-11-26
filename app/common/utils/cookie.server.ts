import { localeCookie, prefs } from "@/.server/cookies";
import { theme, locale } from "../types";
import i18nServer from "@/i18n/i18n.server";
import { redirect } from "@remix-run/react";

export async function getTheme(request: Request) {
  const cookie = request.headers.get("cookie");
  const prefCookies = await prefs.parse(cookie);
  const theme: theme = prefCookies?.theme ?? "system";

  return theme;
}

export async function getLang(request: Request) {
  const locale = (await i18nServer.getLocale(request)) as locale;
  return locale;
}
