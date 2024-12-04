import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import { FC } from "react";
import { HttpError } from "./HttpError";

type HttpErrorDocumentProps = {
  status: number;
};

const HttpErrorDocument: FC<HttpErrorDocumentProps> = ({ status }) => {
  return (
    <html
      lang={"en"}
      className={"system"}
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
      <body className="container">
        <HttpError status={status} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export { HttpErrorDocument };
