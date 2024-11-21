import { RemixI18Next } from "remix-i18next/server";

import * as i18n from "./i18n";
import { localeCookie } from "@/.server/cookies";

export default new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: localeCookie,
  },
  // This is the configuration for i18next used
  // when translating messages server-side only
  i18next: {
    ...i18n,
  },
});
