import { SvgProps } from "../types";

const SvgSun: SvgProps = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
      fill="none"
    >
      <g clipPath="url(#clip0_207_171)">
        <path
          d="M9.99984 1.66669V3.33335M9.99984 16.6667V18.3334M3.33317 10H1.6665M5.2616 5.26178L4.08309 4.08327M14.7381 5.26178L15.9166 4.08327M5.2616 14.7417L4.08309 15.9202M14.7381 14.7417L15.9166 15.9202M18.3332 10H16.6665M14.1665 10C14.1665 12.3012 12.301 14.1667 9.99984 14.1667C7.69865 14.1667 5.83317 12.3012 5.83317 10C5.83317 7.69883 7.69865 5.83335 9.99984 5.83335C12.301 5.83335 14.1665 7.69883 14.1665 10Z"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export { SvgSun };
