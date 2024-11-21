import { FC } from "react";
import { Tab } from "./Tab";

type HeadingProps = {
  title: string;
  subtitle: string;
  active: "signup" | "login";
};

const Heading: FC<HeadingProps> = ({ title, subtitle, active }) => {
  return (
    <div className="mb-8">
      <div className="mb-6 flex flex-col gap-3 text-center">
        <div className="text-3xl font-semibold text-text-primary">{title}</div>
        <div className="text-base font-normal text-text-tertiary">{subtitle}</div>
      </div>
      <Tab active={active} />
    </div>
  );
};

export { Heading };
