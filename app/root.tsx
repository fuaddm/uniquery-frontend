import { data, Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import "@/styles/index.css";
import { localeCookie, prefs } from "@/.server/cookies";
import { Button, theme, ThemeSwitcher } from "./components";
import i18nServer from "@/i18n/i18n.server";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const handle = { i18n: ["translation"] };

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookie = request.headers.get("cookie");
  const prefCookies = await prefs.parse(cookie);
  const theme: theme = prefCookies?.theme ?? "system";

  const locale = await i18nServer.getLocale(request);

  return data({ locale, theme }, { headers: { "Set-Cookie": await localeCookie.serialize(locale) } });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, locale } = useLoaderData<typeof loader>();

  return (
    <html
      lang={locale ?? "en"}
      className={theme}
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="fixed left-0 top-0 flex gap-3">
          <ThemeSwitcher theme={theme} />
          <Link to="?lng=en">
            <Button variant="secondaryColor">EN</Button>
          </Link>
          <Link to="?lng=az">
            <Button variant="secondaryColor">AZ</Button>
          </Link>
          <Link to="/">
            <Button variant="secondaryColor">Landing Page</Button>
          </Link>
          <Link to="/test">
            <Button variant="secondaryColor">Components</Button>
          </Link>
        </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
