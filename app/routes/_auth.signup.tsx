import { IntroMotion } from "@/components";
import { SignupForm } from "@/features/auth";
import i18nServer from "@/i18n/i18n.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import { data, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const t = await i18nServer.getFixedT(request, "auth");
  const translations = {
    title: t("signup.title"),
    subtitle: t("signup.subtitle"),
    passwordHint1: t("signup.passwordHint1"),
    passwordHint2: t("signup.passwordHint2"),
    passwordHint3: t("signup.passwordHint3"),
    passwordHint4: t("signup.passwordHint4"),
    signUpButton: t("signup.signUpButton"),
    signUpGoogle: t("signup.signUpGoogle"),
    haveAccount: t("signup.haveAccount"),
    emailPlaceholder: t("emailPlaceholder"),
    password: t("password"),
    loginTab: t("loginTab"),
  };
  return data(translations);
};

export default function SignUp() {
  const t = useLoaderData<typeof loader>();

  return (
    <IntroMotion>
      <SignupForm t={t} />
    </IntroMotion>
  );
}
