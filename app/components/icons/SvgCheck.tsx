import { SvgProps } from "../types";

const SvgCheck: SvgProps = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <path
        d="M10 3L4.5 8.5L2 6"
        strokeWidth="1.6666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SvgCheck };
