import { AuthPage } from "@/features/auth";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";

export const headers = {
  "Cache-Control": "max-age: 0, s-maxage:86400",
};

export const handle = { i18n: ["auth"] };

export const meta = [{ title: "Welcome" }];

export default function Auth() {
  return <AuthPage />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
