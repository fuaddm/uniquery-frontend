import { data, redirect } from "@remix-run/node";
import { OtpSchema } from "../../schemas";
import { ServiceResp } from "@/common";
import { axiosInstance } from "@/.server/axiosInstance";
import { apiPath, returnErr } from "@/common/index.server";
import { accessTokenCookie, proceedKeyCookie, refreshTokenCookie } from "@/.server/cookies";
import { errorNames } from "../../constants/errors";

export async function otpAction(request: Request) {
  const headers = new Headers();

  const cookieHeader = request.headers.get("Cookie");

  const proceedKey = await proceedKeyCookie.parse(cookieHeader);

  if (!proceedKey) {
    throw redirect("/auth?page=signup");
  }

  const formData = await request.formData();

  const actionType = formData.get("actionType");
  const otp = formData.get("otp");

  if (actionType === "verifyAccount") {
    const otpParseResult = OtpSchema.safeParse(otp);

    if (!otpParseResult.success) {
      return data({ status: 409, ok: false, data: null, key: "otp_is_not_valid" } as ServiceResp);
    }
    const verifyResp = await axiosInstance
      .post(apiPath.verifyAccountApi, {
        proceedKey,
        otp,
      })
      .then(async (resp): Promise<ServiceResp> => {
        const accessToken = resp.data.data.accessToken;
        const refreshToken = resp.data.data.refreshToken;

        headers.set("Set-Cookie", await accessTokenCookie.serialize(accessToken));
        headers.append("Set-Cookie", await refreshTokenCookie.serialize(refreshToken));
        headers.append("Set-Cookie", await proceedKeyCookie.serialize("", { maxAge: -1 }));

        return { status: resp.status, ok: true, data: null, key: null };
      })
      .catch(returnErr);

    if (verifyResp.ok) {
      throw redirect("/app", {
        headers,
      });
    }

    if (verifyResp.key === errorNames.otp_attempts_exceeded) {
      throw redirect("/auth?page=signup", {
        headers: {
          "Set-Cookie": await proceedKeyCookie.serialize("", { maxAge: -1 }),
        },
      });
    }

    return data(verifyResp);
  } else if (actionType === "resendOtp") {
    const resendResp = await axiosInstance
      .post(apiPath.resendOtpApi, {
        proceedKey,
      })
      .then((resp): ServiceResp => {
        return { status: resp.status, ok: true, data: null, key: null };
      })
      .catch(returnErr);

    if (resendResp.key === errorNames.otp_attempts_exceeded) {
      throw redirect("/auth?page=signup", {
        headers: {
          "Set-Cookie": await proceedKeyCookie.serialize("", { maxAge: -1 }),
        },
      });
    }

    return data(resendResp);
  }

  return data({ status: 200, ok: true, data: null, key: null } as ServiceResp, {
    headers,
  });
}
