import { data, isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useRouteError, useRouteLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import "@/styles/index.css";
import { localeCookie } from "@/.server/cookies";
import { getLang, getTheme } from "./common/index.server";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next/react";
import { Toaster } from "sonner";
import { cn } from "./lib/utils";
import { ErrorDocument, ErrorMsg, HttpError, HttpErrorDocument } from "./common";

export const handle = { i18n: ["common"] };

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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const theme = await getTheme(request);
  const locale = await getLang(request);

  return data({ locale, theme }, { headers: { "Set-Cookie": await localeCookie.serialize(locale) } });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  const { i18n, t } = useTranslation();

  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <HttpErrorDocument status={error.status} />;
  } else if (error instanceof Error) {
    const msg = error.message;
    return <ErrorDocument message={msg} />;
  } else if (error) {
    return <ErrorDocument message={t("errors.unknown")} />;
  }

  return (
    <html
      lang={data?.locale ?? "en"}
      className={data?.theme ?? "system"}
      dir={i18n.dir()}
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
        {children}
        <Toaster
          position="top-center"
          dir={i18n.dir()}
          toastOptions={{
            className: cn({
              "border border-border-primary bg-bg-primary text-text-primary shadow-xs": true,
            }),
          }}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { locale } = useLoaderData<typeof loader>();
  useChangeLanguage(locale);

  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const { t } = useTranslation("common");

  if (isRouteErrorResponse(error)) {
    return <HttpError status={error.status} />;
  } else if (error instanceof Error) {
    const msg = error.message;
    return <ErrorMsg message={msg} />;
  } else {
    return <ErrorMsg message={t("errors.unknown")} />;
  }
}
