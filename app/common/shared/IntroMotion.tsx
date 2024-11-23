import { FC, ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";

type IntroMotionProps = {
  children: ReactNode;
};

const IntroMotion: FC<IntroMotionProps> = ({ children }) => {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key="modal"
        initial={{
          opacity: 0,
          transform: "translateY(40px) scale(0.9)",
        }}
        animate={{
          opacity: 1,
          transform: "translateY(0px) scale(1)",
          transition: {
            default: {
              type: "spring",
              stiffness: 700,
              damping: 30,
            },
            opacity: { ease: "linear", duration: 0.3 },
          },
        }}
      >
        <div>{children}</div>
      </motion.div>
    </MotionConfig>
  );
};

export { IntroMotion };
