import { AuthPage } from "@/features/auth";

export const headers = {
  "Cache-Control": "max-age: 0, s-maxage:86400",
};

export const handle = { i18n: ["auth"] };

export const meta = [{ title: "Welcome" }];

export default function Auth() {
  return <AuthPage />;
}

export function ErrorBoundary() {
  return <></>;
}
