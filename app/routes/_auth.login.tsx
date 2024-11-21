import { LoginForm } from "@/features/auth";
import i18nServer from "@/i18n/i18n.server";
import { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { data, useLoaderData } from "@remix-run/react";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "max-age=86400, s-maxage=86400",
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const t = await i18nServer.getFixedT(request, "auth");
  const translations = {
    title: t("login.title"),
    subtitle: t("login.subtitle"),
    remember: t("login.remember"),
    forgotPassword: t("login.forgotPassword"),
    signInButton: t("login.signInButton"),
    signInGoogle: t("login.signInGoogle"),
    dontHaveAccount: t("login.dontHaveAccount"),
    emailPlaceholder: t("emailPlaceholder"),
    password: t("password"),
    signupTab: t("signupTab"),
  };
  return data(translations, {
    headers: {
      "Cache-Control": "max-age=86400, s-maxage=86400",
    },
  });
};

export default function Login() {
  const t = useLoaderData<typeof loader>();

  return <LoginForm t={t} />;
}
