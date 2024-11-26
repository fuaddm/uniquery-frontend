import { Button } from "@/common";
import type { MetaFunction } from "@remix-run/node";
import { isRouteErrorResponse, Link, useRouteError } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Ana Səhifə" }, { name: "description", content: "Ana səhifəyə xoş gəldiniz!" }];
};

export default function Index() {
  return (
    <div className="grid min-h-screen place-items-center text-xl font-semibold">
      <div className="flex flex-col items-center gap-3">
        <span>LANDING PAGE</span>
        <Button
          variant="secondary"
          asChild
        >
          <Link to="/auth?page=signup">Go To Sign up Page</Link>
        </Button>
        <Button
          variant="secondary"
          asChild
        >
          <Link to="/auth?page=login">Go To Log in Page</Link>
        </Button>
      </div>
    </div>
  );
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
