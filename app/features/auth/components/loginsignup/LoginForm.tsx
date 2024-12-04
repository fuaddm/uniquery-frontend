import { FC } from "react";
import { Button, Input, ServiceResp } from "@/common";
import { Form, Link, useFetcher } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { SvgGoogle } from "../../icons/SvgGoogle";
import { PasswordInput } from "../PasswordInput";
import * as z from "zod";
import { LoginSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { errorNames } from "../../constants/errors";

type LoginFormType = z.infer<typeof LoginSchema>;

const LoginForm: FC = () => {
  const fetcher = useFetcher<ServiceResp>();
  const { t } = useTranslation("auth");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = (data: LoginFormType) => {
    const formData = new FormData();
    formData.set("email", data.email);
    formData.set("password", data.password);
    formData.set("formType", "login");

    fetcher.submit(formData, {
      method: "POST",
    });
  };

  const isLoading = fetcher.state !== "idle";

  return (
    <div className="w-full max-w-[360px]">
      <Form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="hidden"
          name="formType"
          value="login"
        />
        <div className="mb-5 flex flex-col gap-2">
          <Input
            label="Email"
            sizeV="md"
            disabled={isLoading}
            invalid={errors.email !== undefined}
            placeholder={t("emailPlaceholder")}
            {...register("email")}
          />
          {errors.email !== undefined && (
            <>
              <div className="w-full text-text-error-primary">{t("invalid_email")}</div>
            </>
          )}
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <PasswordInput
            sizeV="md"
            type="password"
            disabled={isLoading}
            invalid={errors.password !== undefined}
            label={t("password")}
            placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
            {...register("password")}
          />
          {errors.password !== undefined && (
            <>
              <div className="w-full text-text-error-primary">{t("invalid_password")}</div>
            </>
          )}
        </div>
        <div className="mb-6 flex items-center justify-end">
          <Button
            variant="linkColor"
            asChild
          >
            <Link to="/">{t("login.forgotPassword")}?</Link>
          </Button>
        </div>
        {fetcher.data?.key === errorNames.invalid_email_or_password && !isLoading && (
          <>
            <div className="mb-6 rounded-lg bg-bg-error-solid p-4 text-text-white">{t("errors.invalid_email_or_password")}</div>
          </>
        )}
        <Button
          type="submit"
          isDisabled={isLoading}
          className="mb-4 w-full justify-center"
        >
          {t("login.signInButton")}
        </Button>
        <Button
          isDisabled
          variant="secondary"
          className="mb-8 w-full justify-center"
        >
          <div className="flex items-center justify-center gap-3">
            <SvgGoogle className="h-6 w-6" />
            {t("login.signInGoogle")}
          </div>
        </Button>
        <div className="flex justify-center gap-1">
          <span className="text-sm font-normal text-text-tertiary">{t("login.dontHaveAccount")}</span>
          <Button
            variant="linkColor"
            asChild
          >
            <Link to="/auth?page=signup">{t("signupTab")}</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export { LoginForm };
