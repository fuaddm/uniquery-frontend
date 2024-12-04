import { CSSProperties, FC } from "react";
import styles from "./loading.module.css";
import { cn } from "@/lib/utils";

type ILoadingProps = {
  radius?: number;
  boxClassnames?: string;
};

// TODO: width, height prop for line.
const ILoading: FC<ILoadingProps> = ({ radius = 10, boxClassnames = "" }) => {
  const boxStyle: CSSProperties = {
    width: radius + "px",
    height: radius + "px",

    minHeight: radius + "px",
    maxHeight: radius + "px",

    minWidth: radius + "px",
    maxWidth: radius + "px",
  };

  return (
    <div
      style={boxStyle}
      className="relative"
    >
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>

      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
      <div
        style={boxStyle}
        className={cn({
          [styles.box]: true,
          [boxClassnames]: true,
        })}
      ></div>
    </div>
  );
};

export { ILoading };
