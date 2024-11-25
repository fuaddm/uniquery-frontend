import { SvgProps } from "../types";

const SvgMoon: SvgProps = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_231_432)">
        <path
          d="M18.296 10.7972C17.1486 12.8099 14.9829 14.1669 12.5003 14.1669C8.81843 14.1669 5.83366 11.1822 5.83366 7.50027C5.83366 5.01746 7.19089 2.85166 9.20388 1.7043C4.97511 2.10525 1.66699 5.66633 1.66699 10.0001C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334C14.3338 18.3334 17.8948 15.0256 18.296 10.7972Z"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export { SvgMoon };
