import { FC, ReactNode } from "react";
import { motion } from "motion/react";

type IntroMotionProps = {
  children: ReactNode;
};

const IntroMotion: FC<IntroMotionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: "translateY(40px)",
      }}
      animate={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
          default: {
            type: "spring",
            stiffness: 300,
            damping: 24,
          },
          opacity: { ease: "linear", duration: 0.2 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export { IntroMotion };
