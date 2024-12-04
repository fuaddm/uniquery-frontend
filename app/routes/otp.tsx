import { otpLoader } from "@/features/auth/index.server";
import { OtpPage } from "@/features/auth/pages/otp";
import { otpAction } from "@/features/auth/services/remix/otpAction.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await otpLoader(request);
};

export const handle = { i18n: ["auth"] };

export default function Otp() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  const email = loaderData.data;

  return (
    <OtpPage
      email={email}
      actionData={actionData}
    />
  );
}

export const action = async ({ request }: LoaderFunctionArgs) => {
  return await otpAction(request);
};
