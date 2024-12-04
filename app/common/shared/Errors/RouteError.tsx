import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { HttpErrorPage } from "./HttpErrorPage";
import { ErrorPage } from "./ErrorPage";

export const RouteError = () => {
  const error = useRouteError();
  const { t } = useTranslation("common");

  if (isRouteErrorResponse(error)) {
    return <HttpErrorPage status={error.status} />;
  } else if (error instanceof Error) {
    return <ErrorPage message={error.message} />;
  } else {
    return <ErrorPage message={t("errors.unknown")} />;
  }
};
