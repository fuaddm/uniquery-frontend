import { FC } from "react";
import { useAuthPage } from "../hooks/useAuthPage";
import { IntroMotion } from "../components/IntroMotion";
import { SignupForm } from "../components/loginsignup/SignupForm";

const SignupPage: FC = () => {
  const page = useAuthPage();
  return (
    <>
      {page === "signup" && (
        <IntroMotion>
          <SignupForm />
        </IntroMotion>
      )}
    </>
  );
};

export { SignupPage };
