import { Button, Input } from "@/common";
import { Form, Link } from "@remix-run/react";
import { FC } from "react";
import { SvgGoogle } from "../icons/SvgGoogle";
import { SvgCheck } from "../icons/SvgCheck";

type SignupFormProps = {
  t: {
    [key: string]: string;
  };
};

const SignupForm: FC<SignupFormProps> = ({ t }) => {
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
          wrapperClassName="mb-5"
        />
        <div className="mb-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <SvgCheck className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-fg-disabled-subtle" />
            <span className="text-sm font-normal text-text-tertiary">{t.passwordHint1}</span>
          </div>
          <div className="flex items-center gap-2">
            <SvgCheck className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-fg-disabled-subtle" />
            <span className="text-sm font-normal text-text-tertiary">{t.passwordHint2}</span>
          </div>
          <div className="flex items-center gap-2">
            <SvgCheck className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-fg-disabled-subtle" />
            <span className="text-sm font-normal text-text-tertiary">{t.passwordHint3}</span>
          </div>
          <div className="flex items-center gap-2">
            <SvgCheck className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-fg-disabled-subtle" />
            <span className="text-sm font-normal text-text-tertiary">{t.passwordHint4}</span>
          </div>
        </div>
        <Button className="mb-4 w-full justify-center">{t.signUpButton}</Button>
        <Button
          variant="secondary"
          className="mb-8 w-full justify-center"
        >
          <div className="flex items-center justify-center gap-3">
            <SvgGoogle className="h-6 w-6" />
            {t.signUpGoogle}
          </div>
        </Button>
        <div className="flex justify-center gap-1">
          <span className="text-sm font-normal text-text-tertiary">{t.haveAccount}</span>
          <Button
            variant="linkColor"
            render={<Link to="/auth?page=login" />}
          >
            {t.loginTab}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export { SignupForm };
