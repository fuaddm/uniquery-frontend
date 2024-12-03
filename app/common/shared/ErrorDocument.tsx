import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import { FC } from "react";
import { ErrorMsg } from "./ErrorMsg";

type ErrorDocumentProps = {
  message: string;
};

const ErrorDocument: FC<ErrorDocumentProps> = ({ message }) => {
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
        <ErrorMsg message={message} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export { ErrorDocument };
