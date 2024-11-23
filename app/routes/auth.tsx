import { IntroMotion } from "@/common";
import { getLang, getTheme } from "@/common/index.server";
import { AuthLayout, LoginForm, SignupForm } from "@/features/auth";
import i18nServer from "@/i18n/i18n.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import { data, useLoaderData, useNavigation } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const page = new URL(request.url).searchParams.get("page") as "login" | "signup" | null;
  const t = await i18nServer.getFixedT(request, "auth");

  const translations = {
    loginTitle: t("login.title"),
    loginSubtitle: t("login.subtitle"),
    signupTitle: t("signup.title"),
    signupSubtitle: t("signup.subtitle"),
    signupTab: t("signupTab"),
    loginTab: t("loginTab"),
  };

  const loginT = {
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

  const signupT = {
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

  const theme = await getTheme(request);
  const locale = await getLang(request);

  return data({ page, t: translations, loginT, signupT, theme, locale });
};

export const headers = {
  "Cache-Control": "max-age: 86400",
};

export default function Auth() {
  const { t, page, theme, locale, loginT, signupT } = useLoaderData<typeof loader>();

  const navigation = useNavigation();

  function getPage() {
    if (navigation.state === "loading") {
      const navigationParam = new URLSearchParams(navigation.location?.search).get("page");
      return navigationParam as "login" | "signup" | null;
    }
    return page;
  }

  return (
    <AuthLayout
      theme={theme}
      locale={locale}
      t={t}
      page={getPage()}
    >
      {(getPage() === "login" || getPage() === null) && (
        <IntroMotion>
          <LoginForm t={loginT} />
        </IntroMotion>
      )}
      {getPage() === "signup" && (
        <IntroMotion>
          <SignupForm t={signupT} />
        </IntroMotion>
      )}
    </AuthLayout>
  );
}
