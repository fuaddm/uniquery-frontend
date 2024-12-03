import { createCookie } from "@remix-run/node";

export const prefs = createCookie("prefs", {
  maxAge: 31_536_000, // one year
});

export const localeCookie = createCookie("lng", {
  maxAge: 31_536_000, // one year
});

export const accessTokenCookie = createCookie("AccessToken", {
  maxAge: 1800, // 30 minute
});

export const refreshTokenCookie = createCookie("RefreshToken", {
  maxAge: 86400 * 7, // 7 day
});
