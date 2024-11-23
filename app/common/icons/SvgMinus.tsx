import { SvgProps } from "../types";

const SvgMinus: SvgProps = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 6H9.5"
        strokeWidth="1.66666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SvgMinus };
