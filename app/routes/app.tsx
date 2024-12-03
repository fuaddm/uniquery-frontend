import { Button, RouteError } from "@/common";
import { appLoader } from "@/features/auth/services/remix/appLoader.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useFetcher } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await appLoader(request);
};

export default function App() {
  const fetcher = useFetcher();

  return (
    <div className="grid min-h-screen place-items-center text-xl font-semibold">
      <div className="flex flex-col items-center gap-3">
        <span>APP PAGE</span>
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
        <Button
          variant="secondary"
          asChild
        >
          <Link to="/">Go To Landing Page</Link>
        </Button>
        <fetcher.Form
          action="/api/logout"
          method="post"
        >
          <Button
            type="submit"
            variant="secondary"
          >
            Logout
          </Button>
        </fetcher.Form>
      </div>
    </div>
  );
}

export const ErrorBoundary = RouteError;
