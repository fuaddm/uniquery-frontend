import { forwardRef } from "react";
import { ButtonProps } from "../types";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import styles from "./button.module.css";
import { Button as AriaButton } from "@ariakit/react";

export const button = tv({
  base: "relative z-0 flex w-fit items-center font-medium",
  variants: {
    variant: {
      primary: cn({
        [styles.sk]: true,
        "bg-button-primary-bg text-button-primary-fg enabled:shadow-xs-skeuomorphic": true,
        "enabled:hover:bg-button-primary-bg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring": true,
        "disabled:bg-bg-disabled disabled:text-fg-disabled disabled:shadow-xs disabled:outline disabled:outline-1 disabled:outline-border-disabled-subtle": true,
      }),

      secondary: cn({
        "bg-button-secondary-bg text-button-secondary-fg outline outline-1 -outline-offset-1 outline-button-secondary-border enabled:shadow-xs-skeuomorphic": true,
        "enabled:hover:border-button-secondary-border-hover enabled:hover:bg-button-secondary-bg-hover enabled:hover:text-button-secondary-fg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring": true,
        "disabled:bg-bg-primary disabled:text-fg-disabled disabled:shadow-xs disabled:outline disabled:outline-1 disabled:outline-border-disabled-subtle": true,
      }),
      secondaryColor: cn({
        "bg-button-secondary-color-bg text-button-secondary-color-fg outline outline-1 -outline-offset-1 outline-button-secondary-color-border enabled:shadow-xs-skeuomorphic": true,
        "enabled:hover:bg-button-secondary-color-bg-hover enabled:hover:text-button-secondary-color-fg-hover enabled:hover:outline-button-secondary-color-border-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring": true,
        "disabled:bg-bg-primary disabled:text-fg-disabled disabled:shadow-xs disabled:outline disabled:outline-0 disabled:outline-1 disabled:outline-border-disabled-subtle": true,
      }),

      tertiary: cn({
        "bg-transparent text-button-tertiary-fg": true,
        "enabled:hover:bg-button-tertiary-bg-hover enabled:hover:text-button-tertiary-fg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring": true,
        "disabled:text-fg-disabled": true,
      }),
      tertiaryColor: cn({
        "bg-transparent text-button-tertiary-color-fg": true,
        "enabled:hover:bg-button-tertiary-color-bg-hover enabled:hover:text-button-tertiary-color-fg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring": true,
        "disabled:text-fg-disabled": true,
      }),

      link: cn({
        "bg-transparent text-button-tertiary-fg": true,
        "enabled:hover:text-button-tertiary-fg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring": true,
        "disabled:text-fg-disabled": true,
      }),
      linkColor: cn({
        "bg-transparent text-button-tertiary-color-fg": true,
        "enabled:hover:text-button-tertiary-color-fg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring": true,
        "disabled:text-fg-disabled": true,
      }),

      destructivePrimary: cn({
        [styles.sk]: true,
        "bg-button-primary-error-bg text-fg-white enabled:shadow-xs-skeuomorphic": true,
        "enabled:hover:bg-button-primary-error-bg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring-error": true,
        "disabled:bg-bg-disabled disabled:text-fg-disabled disabled:shadow-xs disabled:outline disabled:outline-1 disabled:outline-border-disabled-subtle": true,
      }),
      destructiveSecondary: cn({
        "bg-button-secondary-error-bg text-button-secondary-error-fg outline outline-1 -outline-offset-1 outline-button-secondary-error-border enabled:shadow-xs-skeuomorphic": true,
        "enabled:hover:bg-button-secondary-error-bg-hover enabled:hover:text-button-secondary-error-fg-hover enabled:hover:outline-button-secondary-error-border-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring-error": true,
        "disabled:bg-bg-primary disabled:text-fg-disabled disabled:shadow-xs disabled:outline disabled:outline-0 disabled:outline-1 disabled:outline-border-disabled-subtle": true,
      }),
      destructiveTertiary: cn({
        "bg-transparent text-button-tertiary-error-fg": true,
        "enabled:hover:bg-button-tertiary-error-bg-hover enabled:hover:text-button-tertiary-error-fg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring-error": true,
        "disabled:text-fg-disabled": true,
      }),
      destructiveLink: cn({
        "bg-transparent text-button-tertiary-error-fg": true,
        "enabled:hover:text-button-tertiary-error-fg-hover": true,
        "enabled:focus:outline enabled:focus:outline-2 enabled:focus:outline-offset-2 enabled:focus:outline-focus-ring-error": true,
        "disabled:text-fg-disabled": true,
      }),
      none: "",
    },
    size: {
      sm: "gap-2 rounded-lg px-3 py-2 text-sm font-semibold",
      md: "gap-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold",
      lg: "gap-1.5 rounded-lg px-4 py-2.5 text-base font-semibold",
      xl: "gap-1.5 rounded-lg px-[18px] py-3 text-base font-semibold",
      "2xl": "gap-2 rounded-[10px] px-[22px] py-4 text-lg font-semibold",
      none: "",
    },
    icon: {
      true: "block",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: ["link", "linkColor", "destructiveLink"],
      size: ["sm", "md", "lg", "xl", "2xl"],
      icon: false,
      className: "rounded-[4px] p-0",
    },
    {
      size: "sm",
      icon: true,
      className: "p-2",
    },
    {
      size: "md",
      icon: true,
      className: "p-2.5",
    },
    {
      size: "lg",
      icon: true,
      className: "p-3",
    },
    {
      size: "xl",
      icon: true,
      className: "p-[14px]",
    },
    {
      size: "2xl",
      icon: true,
      className: "p-4",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className = "", icon, variant, size, children, ...props }, ref) {
  return (
    <AriaButton
      className={cn({
        [button({ variant, size, icon })]: true,
        [className]: true,
      })}
      ref={ref}
      {...props}
    >
      {children}
    </AriaButton>
  );
});

export { Button };
