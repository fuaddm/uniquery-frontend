import { Button, RouteError } from "@/common";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

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

export const ErrorBoundary = RouteError;
