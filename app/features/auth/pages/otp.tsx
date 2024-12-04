import { useTranslation } from "react-i18next";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { FC } from "react";
import { Button, ServiceResp } from "@/common";
import { SvgMail } from "../icons/SvgMail";
import { Otp } from "../components/Otp";
import { Form, Link, useNavigation } from "@remix-run/react";
import { SvgArrowLeft } from "@/common/icons/SvgArrowLeft";
import { errorNames } from "../constants/errors";

type OtpPageProps = {
  email: string;
  actionData: ServiceResp | undefined;
};

const OtpPage: FC<OtpPageProps> = ({ email, actionData }) => {
  const { t } = useTranslation("auth");

  const navigation = useNavigation();

  const isLoading = navigation.state !== "idle";

  return (
    <AuthLayout>
      <Form
        method="post"
        className="flex flex-col items-center"
      >
        <Button
          variant="secondary"
          icon={true}
          className="mb-6"
        >
          <SvgMail className="h-7 w-7 stroke-fg-secondary" />
        </Button>
        <div className="mb-2 text-2xl font-semibold text-text-primary md:mb-3 md:text-3xl">{t("otp.title")}</div>
        <div className="text-base font-normal text-text-tertiary">{t("otp.subtitle")}</div>
        <div className="mb-8 text-base font-semibold text-text-tertiary">{email}</div>
        <div className="mb-6 flex flex-col gap-6 md:mb-8 md:gap-8">
          <Otp />
          {actionData && actionData.key === errorNames.otp_is_not_valid && (
            <>
              <div className="rounded-lg bg-bg-error-solid p-4 text-text-white">{t("errors.otp_is_not_valid")}</div>
            </>
          )}
          {actionData && actionData.key === errorNames.otp_request_too_soon && (
            <>
              <div className="rounded-lg bg-bg-error-solid p-4 text-text-white">{t("errors.otp_request_too_soon")}</div>
            </>
          )}
        </div>
        <Button
          type="submit"
          name="actionType"
          value="verifyAccount"
          isDisabled={isLoading}
          className="mb-8 w-full justify-center"
          size="lg"
        >
          {t("otp.submitButton")}
        </Button>
        <div className="mb-8 flex">
          <div className="text-sm font-normal text-text-tertiary">
            {t("otp.dontRecieve")}{" "}
            <span>
              <Button
                type="submit"
                isDisabled={isLoading}
                name="actionType"
                value="resendOtp"
                className="inline-block"
                variant="linkColor"
              >
                {t("otp.resend")}
              </Button>
            </span>
          </div>
        </div>
        <Link
          to="/auth?page=login"
          className="flex items-center gap-1.5"
        >
          <SvgArrowLeft className="h-5 w-5 stroke-button-tertiary-fg" />
          <span className="text-sm font-semibold text-button-tertiary-fg">{t("otp.backToLogin")}</span>
        </Link>
      </Form>
    </AuthLayout>
  );
};

export { OtpPage };
