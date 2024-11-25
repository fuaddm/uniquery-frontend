import { cn } from "@/lib/utils";
import { Link } from "@remix-run/react";
import { FC, useCallback } from "react";
import { motion, Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { pages } from "../../types";
import { useAuthPage } from "../../hooks/useAuthPage";

const Tab: FC = () => {
  const { t } = useTranslation("auth");

  const activePage = useAuthPage();

  const getClassnames = useCallback(
    (tab: pages) => {
      return cn({
        "relative z-0 block px-3 py-2 text-center text-sm font-semibold text-text-quaternary": true,
        "pointer-events-none select-none text-text-secondary": activePage === tab,
      });
    },
    [activePage]
  );

  const variants: Variants = {
    null: {
      transform: "translateX(calc(100% + 0.25rem))",
    },
    signup: {
      transform: "translateX(0px)",
    },
    login: {
      transform: "translateX(calc(100% + 0.25rem))",
    },
  };

  return (
    <div className="relative z-0 grid w-full grid-cols-2 gap-0.5 rounded-lg bg-bg-secondary-alt outline outline-1 -outline-offset-1 outline-border-secondary">
      <motion.div
        variants={variants}
        initial={activePage}
        animate={activePage}
        transition={{
          default: {
            ease: "easeOut",
            duration: 0.3,
          },
        }}
        className={cn({
          "absolute left-0 top-0 z-0 h-full w-[calc((100%_/_2)_-_0.125rem)] rounded-lg border border-border-primary bg-bg-primary-alt shadow-xs": true,
        })}
      ></motion.div>
      <Link
        className={getClassnames("signup")}
        to={"?page=signup"}
      >
        {t("signupTab")}
      </Link>
      <Link
        className={getClassnames("login")}
        to={"?page=login"}
      >
        {t("loginTab")}
      </Link>
    </div>
  );
};

export { Tab };
