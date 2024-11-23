import { FC } from "react";
import { Button, Input } from "@/common";
import { Form, Link } from "@remix-run/react";
import { SvgGoogle } from "../icons/SvgGoogle";

type LoginFormProps = {
  t: {
    [key: string]: string;
  };
};

const LoginForm: FC<LoginFormProps> = ({ t }) => {
  return (
    <div className="w-full max-w-[360px]">
      <Form>
        <Input
          label="Email"
          sizeV="md"
          placeholder={t.emailPlaceholder}
          wrapperClassName="mb-5"
        />
        <Input
          sizeV="md"
          type="password"
          label={t.password}
          placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
          wrapperClassName="mb-6"
        />
        <div className="mb-6 flex items-center justify-end">
          <Button
            variant="linkColor"
            render={<Link to="/" />}
          >
            {t.forgotPassword}?
          </Button>
        </div>
        <Button className="mb-4 w-full justify-center">{t.signInButton}</Button>
        <Button
          variant="secondary"
          className="mb-8 w-full justify-center"
        >
          <div className="flex items-center justify-center gap-3">
            <SvgGoogle className="h-6 w-6" />
            {t.signInGoogle}
          </div>
        </Button>
        <div className="flex justify-center gap-1">
          <span className="text-sm font-normal text-text-tertiary">{t.dontHaveAccount}</span>
          <Button
            variant="linkColor"
            render={<Link to="/auth?page=signup" />}
          >
            {t.signupTab}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export { LoginForm };
