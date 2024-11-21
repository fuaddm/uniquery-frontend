import { cn } from "@/lib/utils";
import { Link } from "@remix-run/react";
import { FC } from "react";

type TabProps = {
  className?: string;
  active?: "signup" | "login";
};

const Tab: FC<TabProps> = ({ className = "", active }) => {
  const getClassnames = (tab: "signup" | "login") => {
    const classes = cn({
      "relative z-0 block rounded-lg px-3 py-2 text-center text-sm font-semibold text-text-tertiary": true,
      "border border-border-primary bg-bg-primary-alt shadow-xs": active === tab,
    });
    return classes;
  };

  return (
    <div
      className={cn({
        "grid w-full grid-cols-2 gap-0.5 rounded-lg bg-bg-secondary-alt outline outline-1 -outline-offset-1 outline-border-secondary": true,
        [className]: true,
      })}
    >
      <Link
        className={getClassnames("signup")}
        to={"/signup"}
      >
        Sign up
      </Link>
      <Link
        className={getClassnames("login")}
        to={"/login"}
      >
        Log in
      </Link>
    </div>
  );
};

export { Tab };
