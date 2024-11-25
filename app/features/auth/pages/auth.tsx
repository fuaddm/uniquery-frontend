import { AuthLayout } from "../components/layouts/AuthLayout";
import { FC } from "react";
import { LoginPage } from "./login";
import { SignupPage } from "./signup";
import { LoginSignupLayout } from "../components/layouts/LoginSignupLayout";

export const AuthPage: FC = () => {
  return (
    <AuthLayout>
      <LoginSignupLayout>
        <LoginPage />
        <SignupPage />
      </LoginSignupLayout>
    </AuthLayout>
  );
};
