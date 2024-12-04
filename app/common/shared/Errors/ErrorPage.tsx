import { FC } from "react";
import { LanguageSelect } from "../LanguageSelect";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ErrorMsg } from "./ErrorMsg";

type ErrorPageProps = {
  message: string;
};

const ErrorPage: FC<ErrorPageProps> = ({ message }) => {
  return (
    <div className="container mb-10 flex min-h-screen flex-col items-center bg-bg-primary">
      <div className="mb-16 flex w-full items-center justify-between py-8">
        <ThemeSwitcher />
        <LanguageSelect />
      </div>
      <ErrorMsg message={message} />
    </div>
  );
};

export { ErrorPage };
