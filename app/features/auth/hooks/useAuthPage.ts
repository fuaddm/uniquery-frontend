import { useLocation, useNavigation } from "@remix-run/react";
import { pages } from "../types";

export function useAuthPage() {
  const navigation = useNavigation();
  const location = useLocation();
  const page = (new URLSearchParams(location.search).get("page") || "login") as pages;

  if (navigation.state === "loading" && navigation.location.pathname === "/auth") {
    const navigationParam = (new URLSearchParams(navigation.location?.search).get("page") || "login") as pages;
    return navigationParam as "login" | "signup";
  }
  return page;
}
