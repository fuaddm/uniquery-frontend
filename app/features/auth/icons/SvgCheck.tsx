import { SvgProps } from "@/components";

const SvgCheck: SvgProps = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" />
      <path
        d="M6.25 10L8.75 12.5L13.75 7.5"
        className="stroke-fg-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SvgCheck };
