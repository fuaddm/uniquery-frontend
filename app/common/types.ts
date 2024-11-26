import { FC, InputHTMLAttributes, ReactNode, SVGProps } from "react";
import { VariantProps } from "tailwind-variants";
import { button } from "./ui/button";
import { input } from "./ui/input";
import { checkbox } from "./ui/checkbox";
import { ButtonProps as AriaButtonProps, CheckboxProps as AriaCheckboxProps } from "react-aria-components";

type ButtonVariants = VariantProps<typeof button>;
export type ButtonProps = AriaButtonProps &
  ButtonVariants & {
    children?: ReactNode;
    className?: string;
    asChild?: boolean;
  };

type InputVariants = VariantProps<typeof input>;
export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputVariants & {
    wrapperClassName?: string;
    label?: string;
    required?: boolean;
    hint?: string;
    invalid?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

type CheckboxVariants = VariantProps<typeof checkbox>;
export type CheckboxProps = AriaCheckboxProps &
  CheckboxVariants & {
    label?: string;
    hint?: string;
  };

export type SvgProps = FC<SVGProps<SVGSVGElement>>;

export type locale = "en" | "az";

export type theme = "dark" | "light" | "system";
