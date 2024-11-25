import { FC, ReactNode } from "react";
import { useAuthPage } from "../../hooks/useAuthPage";
import { FormHeading } from "../loginsignup/FormHeading";

type LoginSignupLayoutProps = {
  children?: ReactNode;
};

const LoginSignupLayout: FC<LoginSignupLayoutProps> = ({ children }) => {
  const page = useAuthPage();

  return (
    <>
      {(page === "login" || page === "signup") && (
        <div className="w-full max-w-[360px]">
          <FormHeading />
          {children}
        </div>
      )}
    </>
  );
};

export { LoginSignupLayout };
