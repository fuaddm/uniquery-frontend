import { FC, ReactNode } from "react";
import { LayoutHeader } from "../LayoutHeader";

type AuthLayoutProps = {
  children?: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="container mb-10 flex min-h-screen flex-col items-center bg-bg-primary">
      <LayoutHeader />
      {children}
    </div>
  );
};

export { AuthLayout };
