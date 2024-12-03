import { RouteError } from "@/common";
import { AuthPage } from "@/features/auth";
import { authAction } from "@/features/auth/index.server";
import { ActionFunctionArgs } from "@remix-run/node";

export const handle = { i18n: ["auth"] };

export const meta = [{ title: "Welcome" }];

export default function Auth() {
  return <AuthPage />;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  return await authAction(request);
};

export const ErrorBoundary = RouteError;
