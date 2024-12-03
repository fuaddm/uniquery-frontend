import { logoutAction } from "@/features/auth/services/remix/logoutAction.server";
import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  return await logoutAction(request);
};
