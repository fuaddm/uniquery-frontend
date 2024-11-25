import { FC, ReactNode } from "react";
import { motion } from "motion/react";
import { useNavigation } from "@remix-run/react";

type IntroMotionProps = {
  children: ReactNode;
};

const IntroMotion: FC<IntroMotionProps> = ({ children }) => {
  const navigation = useNavigation();

  const variants = {
    start: {
      opacity: 0,
      transform: "translateY(40px) scale(0.9)",
    },
    stop: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
    },
  };

  function checkIsNavigating(): boolean {
    const isLoading = navigation.state === "loading";
    if (isLoading) {
      const page = new URLSearchParams(navigation.location.search).get("page");
      if (page === "login" || page === "signup") {
        return true;
      }
      return false;
    }
    return false;
  }

  const isNavigating = checkIsNavigating();

  return (
    <motion.div
      variants={variants}
      initial={isNavigating ? "start" : "stop"}
      animate={"stop"}
      transition={{
        default: {
          type: "spring",
          stiffness: 350,
          damping: 30,
          mass: 0.9,
        },
        opacity: {
          ease: "easeOut",
          duration: 0.4,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export { IntroMotion };
