import { FC } from "react";
import { useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { SvgArrowLeft } from "@/common/icons/SvgArrowLeft";
import { Button } from "@/common/ui/button";

type ErrorMsgProps = {
  message: string;
};

const ErrorMsg: FC<ErrorMsgProps> = ({ message }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  return (
    <div className="w-full py-4 md:pt-16">
      <div className="flex w-full justify-center">
        <div className="flex max-w-[768px] flex-col items-center">
          <div className="mb-6 text-center text-xl font-semibold text-text-primary md:text-3xl">{message}</div>
          <div className="flex w-full flex-col-reverse justify-center gap-3 md:flex-row">
            <Button
              onPress={() => navigate(-1)}
              variant="secondary"
              className="w-full justify-center md:w-fit"
            >
              <div className="flex items-center gap-2 md:gap-2.5">
                <SvgArrowLeft className="h-5 w-5 stroke-button-secondary-fg md:h-6 md:w-6" />
                <span>{t("errors.go_back")}</span>
              </div>
            </Button>
            <Button
              variant="primary"
              onPress={() => navigate("/")}
              className="w-full justify-center md:w-fit"
            >
              {t("errors.go_home")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ErrorMsg };