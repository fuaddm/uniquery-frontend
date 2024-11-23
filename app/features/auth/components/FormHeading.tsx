import { FC } from "react";
import { Tab } from "./Tab";
import logo from "@/assets/logo.svg";
import { Link } from "@remix-run/react";

type FormHeadingProps = {
  title: string;
  subtitle: string;
  loginTab: string;
  signupTab: string;
  active: "signup" | "login" | null;
};

const FormHeading: FC<FormHeadingProps> = ({ title, subtitle, active, loginTab, signupTab }) => {
  return (
    <div className="mb-8">
      <div className="mb-8 flex justify-center">
        <Link to="/">
          <img
            src={logo}
            alt="UniQuery Logo"
          />
        </Link>
      </div>
      <div className="mb-6 flex flex-col gap-3 text-center">
        <div className="text-3xl font-semibold text-text-primary">{title}</div>
        <div className="text-base font-normal text-text-tertiary">{subtitle}</div>
      </div>
      <Tab
        signupTab={signupTab}
        loginTab={loginTab}
        active={active}
      />
    </div>
  );
};

export { FormHeading };
