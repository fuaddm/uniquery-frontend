import { createCookie } from "@remix-run/node";

export const prefs = createCookie("prefs", {
  maxAge: 31_536_000, // one year
});

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});
