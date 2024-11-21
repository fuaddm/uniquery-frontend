import { SignupForm } from "@/features/auth";
import i18nServer from "@/i18n/i18n.server";
import { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { data, useLoaderData } from "@remix-run/react";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "max-age=86400, s-maxage=86400",
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const t = await i18nServer.getFixedT(request, "auth");
  const translations = {
    title: t("signUp.title"),
    subtitle: t("signUp.subtitle"),
    passwordHint1: t("signUp.passwordHint1"),
    passwordHint2: t("signUp.passwordHint2"),
    passwordHint3: t("signUp.passwordHint3"),
    passwordHint4: t("signUp.passwordHint4"),
    signUpButton: t("signUp.signUpButton"),
    signUpGoogle: t("signUp.signUpGoogle"),
    haveAccount: t("signUp.haveAccount"),
    emailPlaceholder: t("emailPlaceholder"),
    password: t("password"),
    loginTab: t("loginTab"),
  };
  return data(translations, {
    headers: {
      "Cache-Control": "max-age=86400, s-maxage=86400",
    },
  });
};

export default function SignUp() {
  const t = useLoaderData<typeof loader>();

  return <SignupForm t={t} />;
}
