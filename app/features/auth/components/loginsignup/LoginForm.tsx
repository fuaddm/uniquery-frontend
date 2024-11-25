import { FC } from "react";
import { Button, Input } from "@/common";
import { Form, Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { SvgGoogle } from "../../icons/SvgGoogle";

const LoginForm: FC = () => {
  const { t } = useTranslation("auth");

  return (
    <div className="w-full max-w-[360px]">
      <Form>
        <Input
          label="Email"
          sizeV="md"
          placeholder={t("emailPlaceholder")}
          wrapperClassName="mb-5"
        />
        <Input
          sizeV="md"
          type="password"
          label={t("password")}
          placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
          wrapperClassName="mb-6"
        />
        <div className="mb-6 flex items-center justify-end">
          <Link to="/">
            <Button variant="linkColor">{t("login.forgotPassword")}?</Button>
          </Link>
        </div>
        <Button className="mb-4 w-full justify-center">{t("login.signInButton")}</Button>
        <Button
          variant="secondary"
          className="mb-8 w-full justify-center"
        >
          <div className="flex items-center justify-center gap-3">
            <SvgGoogle className="h-6 w-6" />
            {t("login.signInGoogle")}
          </div>
        </Button>
        <div className="flex justify-center gap-1">
          <span className="text-sm font-normal text-text-tertiary">{t("login.dontHaveAccount")}</span>
          <Link to="/auth?page=signup">
            <Button variant="linkColor">{t("signupTab")}</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export { LoginForm };
