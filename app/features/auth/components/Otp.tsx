import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { OtpInput } from "reactjs-otp-input";

type OtpProps = {
  hasError?: boolean;
};

const Otp: FC<OtpProps> = ({ hasError = false }) => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp: string) => setOtp(otp);

  return (
    <>
      <input
        name="otp"
        type="hidden"
        value={otp}
      />
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        isInputNum={true}
        hasErrored={hasError}
        shouldAutoFocus={true}
        containerStyle="flex w-full justify-center flex-wrap items-center gap-3"
        inputStyle={cn({
          "max-h-16 min-h-16 min-w-16 max-w-16 rounded-xl border-2 border-border-brand bg-bg-primary outline-none md:max-h-16 md:min-h-16 md:min-w-16 md:max-w-16": true,
          "text-3xl text-text-brand-tertiary-alt": true,
        })}
        focusStyle={cn({
          "outline-solid outline-2 outline-offset-2 outline-border-brand": true,
        })}
      />
    </>
  );
};

export { Otp };
