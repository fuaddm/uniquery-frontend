import { cn } from "@/lib/utils";
import { Link, useLocation } from "@remix-run/react";
import { FC } from "react";
import { motion, Variants } from "motion/react";

type TabProps = {
  className?: string;
  active?: "signup" | "login";
  loginTab: string;
  signupTab: string;
};

const Tab: FC<TabProps> = ({ className = "", active, loginTab, signupTab }) => {
  const getClassnames = (tab: "signup" | "login") => {
    const classes = cn({
      "relative z-0 block px-3 py-2 text-center text-sm font-semibold text-text-quaternary": true,
      "text-text-secondary": active === tab,
    });
    return classes;
  };

  const variants: Variants = {
    signup: {
      transform: "translateX(0px)",
    },
    login: {
      transform: "translateX(calc(100% + 0.25rem))",
    },
  };

  return (
    <div
      className={cn({
        "relative z-0 grid w-full grid-cols-2 gap-0.5 rounded-lg bg-bg-secondary-alt outline outline-1 -outline-offset-1 outline-border-secondary": true,
        [className]: true,
      })}
    >
      <motion.div
        variants={variants}
        initial={active}
        animate={active}
        className={cn({
          "absolute left-0 top-0 z-0 h-full w-[calc((100%_/_2)_-_0.125rem)] rounded-lg border border-border-primary bg-bg-primary-alt shadow-xs": true,
        })}
      ></motion.div>
      <Link
        className={getClassnames("signup")}
        to={"/signup"}
      >
        {signupTab}
      </Link>
      <Link
        className={getClassnames("login")}
        to={"/login"}
      >
        {loginTab}
      </Link>
    </div>
  );
};

export { Tab };
