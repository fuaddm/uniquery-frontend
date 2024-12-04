import { CSSProperties, FC } from "react";
import styles from "./loading.module.css";

type ILoadingProps = {
  radius?: number;
};

// TODO width height prop for line.
const ILoading: FC<ILoadingProps> = ({ radius = 10 }) => {
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
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>

      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
      <div
        style={boxStyle}
        className={styles.box}
      ></div>
    </div>
  );
};

export { ILoading };
