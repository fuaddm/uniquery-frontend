import { RouteError } from "@/common";
import { AuthPage } from "@/features/auth";
import { authAction } from "@/features/auth/index.server";
import { authLoader } from "@/features/auth/services/remix/authLoader.server";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

export const handle = { i18n: ["auth"] };

export const meta = [{ title: "Welcome" }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await authLoader(request);
};

export default function Auth() {
  return <AuthPage />;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  return await authAction(request);
};

export const ErrorBoundary = RouteError;
