import { serverOnly$ } from "vite-env-only/macros";

import { azAuth, enAuth } from "@/features/auth";

// This is the list of languages your application supports, the last one is your
// fallback language
export const supportedLngs = ["az", "en"];

// This is the language you want to use in case
// the user language is not in the supportedLngs
export const fallbackLng = "en";

// The default namespace of i18next is "translation", but you can customize it
export const defaultNS = [];

export const resources = serverOnly$({
  en: { auth: enAuth },
  az: { auth: azAuth },
});
