import { FC } from "react";
import { useAuthPage } from "../hooks/useAuthPage";
import { IntroMotion } from "../components/IntroMotion";
import { LoginForm } from "../components/loginsignup/LoginForm";

const LoginPage: FC = () => {
  const page = useAuthPage();

  return (
    <>
      {page === "login" && (
        <IntroMotion>
          <LoginForm />
        </IntroMotion>
      )}
    </>
  );
};

export { LoginPage };
