import { FC } from "react";
import { motion } from "motion/react";
import { SvgLoading } from "../icons/SvgLoading";

type LoadingProps = {
  width?: number;
  height?: number;
  className?: string;
};

const Loading: FC<LoadingProps> = ({ width = 16, height = 16, className = "" }) => {
  return (
    <motion.div
      className="h-fit w-fit"
      initial={{
        transform: "rotate(0deg)",
      }}
      animate={{
        transform: "rotate(360deg)",
      }}
      transition={{
        ease: "linear",
        duration: 0.5,
        repeat: Infinity,
      }}
    >
      <SvgLoading
        width={width}
        height={height}
        className={className}
      />
    </motion.div>
  );
};

export { Loading };
