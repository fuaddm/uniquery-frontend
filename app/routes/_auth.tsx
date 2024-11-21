import { Heading } from "@/features/auth";
import i18nServer from "@/i18n/i18n.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import { data, Outlet, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const page = new URL(request.url).pathname.slice(1) as "login" | "signup";
  const t = await i18nServer.getFixedT(request, "auth");
  const translations = {
    title: t(`${page}.title`),
    subtitle: t(`${page}.subtitle`),
    signupTab: t("signupTab"),
    loginTab: t("loginTab"),
  };

  return data({ page, t: translations });
};

export default function Auth() {
  const { t, page } = useLoaderData<typeof loader>();

  return (
    <div className="container grid min-h-screen place-items-center bg-bg-primary">
      <div className="w-full max-w-[360px]">
        <Heading
          signupTab={t.signupTab}
          loginTab={t.loginTab}
          title={t.title}
          subtitle={t.subtitle}
          active={page}
        />
        <Outlet />
      </div>
    </div>
  );
}
