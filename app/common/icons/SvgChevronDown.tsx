import { SvgProps } from "../types";

const SvgChevronDown: SvgProps = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SvgChevronDown };
