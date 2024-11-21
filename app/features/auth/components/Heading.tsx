import { FC } from "react";
import { Tab } from "./Tab";
import logo from "@/assets/logo.svg";

type HeadingProps = {
  title: string;
  subtitle: string;
  loginTab: string;
  signupTab: string;
  active: "signup" | "login";
};

const Heading: FC<HeadingProps> = ({ title, subtitle, active, loginTab, signupTab }) => {
  return (
    <div className="mb-8">
      <div className="mb-8 flex justify-center">
        <img
          src={logo}
          alt="UniQuery Logo"
        />
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

export { Heading };
