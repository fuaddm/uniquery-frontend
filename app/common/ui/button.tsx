import { Children, cloneElement, forwardRef, JSXElementConstructor, ReactElement } from "react";
import { ButtonProps } from "../types";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import styles from "./button.module.css";
import { Button as AriaButton } from "react-aria-components";
import { ILoading } from "../shared/Loading/ILoading";

export const button = tv({
  base: "relative z-0 flex w-fit items-center font-medium data-[focused=true]:outline-none",
  variants: {
    variant: {
      primary: cn({
        [styles.sk]: true,
        "bg-button-primary-bg text-button-primary-fg shadow-xs-skeuomorphic": true,
        "data-[hovered=true]:bg-button-primary-bg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring": true,
        "data-[disabled=true]:bg-bg-disabled data-[disabled=true]:text-fg-disabled data-[disabled=true]:shadow-xs data-[disabled=true]:outline data-[disabled=true]:outline-1 data-[disabled=true]:outline-offset-0 data-[disabled=true]:outline-border-disabled-subtle":
          true,
      }),

      secondary: cn({
        "border border-button-secondary-border bg-button-secondary-bg text-button-secondary-fg shadow-xs-secondary-skeuomorphic": true,
        "data-[hovered=true]:border-button-secondary-border-hover data-[hovered=true]:bg-button-secondary-bg-hover data-[hovered=true]:text-button-secondary-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring": true,
        "data-[disabled=true]:border-border-disabled-subtle data-[disabled=true]:bg-bg-primary data-[disabled=true]:text-fg-disabled data-[disabled=true]:shadow-xs": true,
      }),
      secondaryColor: cn({
        "border border-button-secondary-color-border bg-button-secondary-color-bg text-button-secondary-color-fg shadow-xs-secondary-skeuomorphic": true,
        "data-[hovered=true]:border-button-secondary-color-border-hover data-[hovered=true]:bg-button-secondary-color-bg-hover data-[hovered=true]:text-button-secondary-color-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring": true,
        "data-[disabled=true]:border-border-disabled-subtle data-[disabled=true]:bg-bg-primary data-[disabled=true]:text-fg-disabled data-[disabled=true]:shadow-xs": true,
      }),

      tertiary: cn({
        "bg-transparent text-button-tertiary-fg": true,
        "data-[hovered=true]:bg-button-tertiary-bg-hover data-[hovered=true]:text-button-tertiary-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring": true,
        "data-[disabled=true]:text-fg-disabled": true,
      }),
      tertiaryColor: cn({
        "bg-transparent text-button-tertiary-color-fg": true,
        "data-[hovered=true]:bg-button-tertiary-color-bg-hover data-[hovered=true]:text-button-tertiary-color-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring": true,
        "data-[disabled=true]:text-fg-disabled": true,
      }),

      link: cn({
        "bg-transparent text-button-tertiary-fg": true,
        "data-[hovered=true]:text-button-tertiary-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring": true,
        "data-[disabled=true]:text-fg-disabled": true,
      }),
      linkColor: cn({
        "bg-transparent text-button-tertiary-color-fg": true,
        "data-[hovered=true]:text-button-tertiary-color-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring": true,
        "data-[disabled=true]:text-fg-disabled": true,
      }),

      destructivePrimary: cn({
        [styles.sk]: true,
        "bg-button-primary-error-bg text-fg-white shadow-xs-skeuomorphic": true,
        "data-[hovered=true]:bg-button-primary-error-bg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring-error": true,
        "data-[disabled=true]:bg-bg-disabled data-[disabled=true]:text-fg-disabled data-[disabled=true]:shadow-xs data-[disabled=true]:outline data-[disabled=true]:outline-1 data-[disabled=true]:outline-border-disabled-subtle":
          true,
      }),
      destructiveSecondary: cn({
        "border border-button-secondary-error-border bg-button-secondary-error-bg text-button-secondary-error-fg shadow-xs-secondary-skeuomorphic": true,
        "data-[hovered=true]:border-button-secondary-error-border-hover data-[hovered=true]:bg-button-secondary-error-bg-hover data-[hovered=true]:text-button-secondary-error-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring-error": true,
        "data-[disabled=true]:border-border-disabled-subtle data-[disabled=true]:bg-bg-primary data-[disabled=true]:text-fg-disabled data-[disabled=true]:shadow-xs": true,
      }),
      destructiveTertiary: cn({
        "bg-transparent text-button-tertiary-error-fg": true,
        "data-[hovered=true]:bg-button-tertiary-error-bg-hover data-[hovered=true]:text-button-tertiary-error-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring-error": true,
        "data-[disabled=true]:text-fg-disabled": true,
      }),
      destructiveLink: cn({
        "bg-transparent text-button-tertiary-error-fg": true,
        "data-[hovered=true]:text-button-tertiary-error-fg-hover": true,
        "data-[focus-visible=true]:outline data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus-ring-error": true,
        "data-[disabled=true]:text-fg-disabled": true,
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

// TODO: isPending
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className = "", icon, variant, size, asChild, isPending, children, ...props }, ref) {
  if (asChild) {
    if (Children.count(children) !== 1) {
      throw Error("Only one child can be inside button");
    }

    const child = Children.only(children)! as ReactElement<any, string | JSXElementConstructor<any>>;

    return (
      <>
        {cloneElement(child, {
          className: cn({
            [button({ variant, size, icon })]: true,
            [className]: true,
          }),
          ref: ref,
          ...props,
        })}
      </>
    );
  }

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
