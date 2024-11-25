import { FC } from "react";
import logo from "@/assets/logo.svg";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useAuthPage } from "../../hooks/useAuthPage";
import { Tab } from "./Tab";

const FormHeading: FC = () => {
  const { t } = useTranslation("auth");
  const loginTitle = t("login.title");
  const signupTitle = t("signup.title");
  const loginSubtitle = t("login.subtitle");
  const signupSubtitle = t("signup.subtitle");

  const page = useAuthPage();

  const title = page === "login" ? loginTitle : signupTitle;
  const subtitle = page === "login" ? loginSubtitle : signupSubtitle;

  return (
    <div className="mb-8">
      <div className="mb-8 flex justify-center">
        <Link to="/">
          <img
            width={90}
            height={37}
            src={logo}
            alt="UniQuery Logo"
          />
        </Link>
      </div>
      <div className="mb-6 flex flex-col gap-3 text-center">
        <div className="text-3xl font-semibold text-text-primary">{title}</div>
        <div className="text-base font-normal text-text-tertiary">{subtitle}</div>
      </div>
      <Tab />
    </div>
  );
};

export { FormHeading };
