import { FC } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { LanguageSelect } from "../LanguageSelect";
import { HttpError } from "./HttpError";

type HttpErrorPageProps = {
  status: number;
};

const HttpErrorPage: FC<HttpErrorPageProps> = ({ status }) => {
  return (
    <div className="container mb-10 flex min-h-screen flex-col items-center bg-bg-primary">
      <div className="mb-16 flex w-full items-center justify-between py-8">
        <ThemeSwitcher />
        <LanguageSelect />
      </div>
      <HttpError status={status} />
    </div>
  );
};

export { HttpErrorPage };
