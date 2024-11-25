import { locale, theme } from "@/common";
import { useMatches } from "react-router";

export function useThemeAndLocale() {
  const matches = useMatches();
  const rootData = matches.find((match) => match.id === "root")?.data as { locale: locale; theme: theme };

  return { theme: rootData.theme, locale: rootData.locale };
}
