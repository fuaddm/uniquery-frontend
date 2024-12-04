import { Button, Input, ServiceResp } from "@/common";
import { Form, Link, useFetcher } from "@remix-run/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SvgGoogle } from "../../icons/SvgGoogle";
import { SvgCheck } from "../../icons/SvgCheck";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { SvgClose } from "../../icons/SvgClose";
import { PasswordInput } from "../PasswordInput";
import { SignUpSchema } from "../../schemas";
import { errorNames } from "../../constants/errors";

type SignUpFormType = z.infer<typeof SignUpSchema>;

const SignupForm: FC = () => {
  const { t } = useTranslation("auth");
  const fetcher = useFetcher<ServiceResp>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: SignUpFormType) => {
    const formData = new FormData();
    formData.set("email", data.email);
    formData.set("password", data.password);
    formData.set("formType", "signup");

    fetcher.submit(formData, {
      method: "POST",
      action: "/auth",
    });
  };

  const PasswordSchema = SignUpSchema.shape.password;
  const passwordInfo = PasswordSchema.safeParse(watch("password") ?? "");

  const passwordErrors = {
    min: false,
    uppercase: false,
    lowercase: false,
    number: false,
  };

  passwordInfo.error?.issues.map((issue) => {
    switch (issue.message) {
      case "min":
        passwordErrors.min = true;
        break;
      case "uppercase":
        passwordErrors.uppercase = true;
        break;
      case "lowercase":
        passwordErrors.lowercase = true;
        break;
      case "number":
        passwordErrors.number = true;
        break;
      default:
        break;
    }
  });

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
          value="signup"
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
        <PasswordInput
          sizeV="md"
          type="password"
          disabled={isLoading}
          invalid={errors.password !== undefined}
          label={t("password")}
          placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
          wrapperClassName="mb-5"
          {...register("password")}
        />
        <div className="mb-6 flex flex-col gap-3">
          {errors.password !== undefined && (
            <>
              <div className="flex items-center gap-2">
                {passwordErrors.min && <SvgClose className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 stroke-fg-error-primary" />}
                {!passwordErrors.min && <SvgCheck className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-bg-success-solid" />}
                <span className="text-sm font-normal text-text-tertiary">{t("signup.passwordHint1")}</span>
              </div>

              <div className="flex items-center gap-2">
                {passwordErrors.uppercase && <SvgClose className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 stroke-fg-error-primary" />}
                {!passwordErrors.uppercase && <SvgCheck className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-bg-success-solid" />}
                <span className="text-sm font-normal text-text-tertiary">{t("signup.passwordHint2")}</span>
              </div>

              <div className="flex items-center gap-2">
                {passwordErrors.lowercase && <SvgClose className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 stroke-fg-error-primary" />}
                {!passwordErrors.lowercase && <SvgCheck className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-bg-success-solid" />}
                <span className="text-sm font-normal text-text-tertiary">{t("signup.passwordHint3")}</span>
              </div>

              <div className="flex items-center gap-2">
                {passwordErrors.number && <SvgClose className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 stroke-fg-error-primary" />}
                {!passwordErrors.number && <SvgCheck className="h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-bg-success-solid" />}
                <span className="text-sm font-normal text-text-tertiary">{t("signup.passwordHint4")}</span>
              </div>
            </>
          )}
          {errors.password === undefined && (
            <>
              <div className="flex items-center gap-2">
                <SvgCheck
                  className={cn({
                    "h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-fg-disabled-subtle": true,
                    "fill-bg-success-solid": !passwordErrors.min,
                  })}
                />
                <span className="text-sm font-normal text-text-tertiary">{t("signup.passwordHint1")}</span>
              </div>

              <div className="flex items-center gap-2">
                <SvgCheck
                  className={cn({
                    "h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-fg-disabled-subtle": true,
                    "fill-bg-success-solid": !passwordErrors.uppercase,
                  })}
                />
                <span className="text-sm font-normal text-text-tertiary">{t("signup.passwordHint2")}</span>
              </div>

              <div className="flex items-center gap-2">
                <SvgCheck
                  className={cn({
                    "h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-fg-disabled-subtle": true,
                    "fill-bg-success-solid": !passwordErrors.lowercase,
                  })}
                />
                <span className="text-sm font-normal text-text-tertiary">{t("signup.passwordHint3")}</span>
              </div>

              <div className="flex items-center gap-2">
                <SvgCheck
                  className={cn({
                    "h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 fill-fg-disabled-subtle": true,
                    "fill-bg-success-solid": !passwordErrors.number,
                  })}
                />
                <span className="text-sm font-normal text-text-tertiary">{t("signup.passwordHint4")}</span>
              </div>
            </>
          )}
        </div>
        {fetcher.data?.key === errorNames.email_already_registered && !isLoading && (
          <>
            <div className="mb-6 rounded-lg bg-bg-error-solid p-4 text-text-white">{t("errors.email_already_registered")}</div>
          </>
        )}
        {fetcher.data?.key === errorNames.email_on_cooldown && !isLoading && (
          <>
            <div className="mb-6 rounded-lg bg-bg-error-solid p-4 text-text-white">{t("errors.email_on_cooldown")}</div>
          </>
        )}
        <Button
          type="submit"
          isDisabled={isLoading}
          className="mb-4 w-full justify-center"
        >
          {t("signup.signUpButton")}
        </Button>
        <Button
          variant="secondary"
          isDisabled
          className="mb-8 w-full justify-center"
        >
          <div className="flex items-center justify-center gap-3">
            <SvgGoogle className="h-6 w-6" />
            {t("signup.signUpGoogle")}
          </div>
        </Button>
        <div className="flex justify-center gap-1">
          <span className="text-sm font-normal text-text-tertiary">{t("signup.haveAccount")}</span>
          <Button
            variant="linkColor"
            asChild
          >
            <Link to="/auth?page=login">{t("loginTab")}</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export { SignupForm };
