import { FC, ReactNode } from "react";
import { FormHeading } from "./FormHeading";
import { LayoutHeader } from "./LayoutHeader";
import { langs, theme } from "@/common";

type AuthLayoutProps = {
  t: {
    [key: string]: string;
  };
  page: "signup" | "login" | null;
  children?: ReactNode;
  theme: theme;
  locale: langs;
};

const AuthLayout: FC<AuthLayoutProps> = ({ t, page, children, theme, locale }) => {
  const title = page === "login" || page === null ? t.loginTitle : t.signupTitle;
  const subtitle = page === "login" ? t.loginSubtitle : t.signupSubtitle;

  return (
    <div className="container mb-10 flex min-h-screen flex-col items-center bg-bg-primary">
      <LayoutHeader
        theme={theme}
        locale={locale}
      />
      <div className="w-full max-w-[360px]">
        <FormHeading
          signupTab={t.signupTab}
          loginTab={t.loginTab}
          title={title}
          subtitle={subtitle}
          active={page}
        />
        {children}
      </div>
    </div>
  );
};

export { AuthLayout };
