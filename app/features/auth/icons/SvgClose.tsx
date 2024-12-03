import { SvgProps } from "@/common";

const SvgClose: SvgProps = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 7L7 17M7 7L17 17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SvgClose };
