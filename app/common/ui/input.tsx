import { forwardRef } from "react";
import { InputProps } from "../types";
import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";

export const input = tv({
  variants: {
    sizeV: {
      sm: "px-3 py-2",
      md: "px-[14px] py-2.5",
    },
  },
  defaultVariants: {
    sizeV: "md",
  },
});

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ wrapperClassName = "", sizeV, invalid, leftIcon, rightIcon, label, hint, required, ...props }, ref) {
  return (
    <div
      className={cn({
        "flex w-full flex-col gap-1.5": true,
        [wrapperClassName]: true,
      })}
    >
      <label className="flex w-full flex-col gap-1.5">
        {label && (
          <div className="flex cursor-pointer items-start gap-0.5 text-sm font-medium text-text-secondary">
            <span>{label}</span>
            {required && <span className="text-text-brand-tertiary">*</span>}
          </div>
        )}
        <div
          className={cn({
            [input({ sizeV })]: true,
            "flex items-center gap-2 rounded-lg bg-bg-primary shadow-xs outline outline-1 outline-border-primary has-[:enabled]:cursor-text has-[:focus]:outline-2 has-[:focus]:outline-border-brand":
              true,
            "has-[:disabled]:bg-bg-disabled-subtle has-[:disabled]:outline-border-disabled": true,
            "outline-border-error-subtle has-[:focus]:outline-border-error": invalid,
          })}
        >
          {leftIcon}
          <input
            className={cn({
              "h-full w-full": true,
              "text-md font-regular bg-bg-primary text-text-primary placeholder:text-text-placeholder focus:outline-none": true,
              "disabled:bg-bg-disabled-subtle disabled:text-text-disabled disabled:placeholder:text-text-disabled": true,
            })}
            ref={ref}
            type="text"
            {...props}
          />
          {rightIcon}
        </div>
      </label>

      {hint && (
        <div
          className={cn({
            "text-sm font-normal text-text-tertiary": true,
            "text-text-error-primary": invalid,
          })}
        >
          {hint}
        </div>
      )}
    </div>
  );
});

export { Input };
