import { VisuallyHidden, Checkbox as AriaCheckbox } from "@ariakit/react";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";
import { CheckboxProps } from "../types";
import { cn } from "@/lib/utils";
import { SvgCheck } from "../icons/SvgCheck";
import { SvgMinus } from "../icons/SvgMinus";

export const checkbox = tv({
  base: cn({
    "flex items-center justify-center border border-border-primary bg-transparent has-[:enabled]:cursor-pointer": true,
    "has-[:focus]:outline has-[:focus]:outline-2 has-[:focus]:outline-offset-2 has-[:focus]:outline-focus-ring": true,
    "has-[:enabled:checked]:border-bg-brand-solid has-[:enabled:checked]:bg-bg-brand-solid": true,
    "has-[:disabled]:border-border-disabled has-[:disabled]:bg-bg-disabled-subtle": true,
  }),
  variants: {
    sizeV: {
      sm: "h-4 max-h-4 min-h-4 w-4 min-w-4 max-w-4 rounded",
      md: "h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 rounded-md",
    },
  },
  defaultVariants: {
    sizeV: "sm",
  },
});

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ sizeV, indeterminate, label, hint, ...props }, ref) {
  return (
    <label
      className={cn({
        group: true,
        "flex w-fit items-start": true,
        "gap-2": sizeV === "sm" || sizeV === undefined,
        "gap-3": sizeV === "md",
      })}
    >
      <span
        className={cn({
          "mt-0.5": label !== undefined,
          [checkbox({ sizeV })]: true,
        })}
      >
        {!indeterminate && (
          <SvgCheck
            className={cn({
              "hidden stroke-fg-white group-has-[:checked]:block group-has-[:checked:disabled]:stroke-fg-disabled-subtle": true,
              "h-3 max-h-3 min-h-3 w-3 min-w-3 max-w-3": sizeV === "sm" || sizeV === undefined,
              "h-[14px] max-h-[14px] min-h-[14px] w-[14px] min-w-[14px] max-w-[14px]": sizeV === "md",
            })}
          />
        )}
        {indeterminate && (
          <SvgMinus
            className={cn({
              "hidden stroke-fg-white group-has-[:checked]:block group-has-[:checked:disabled]:stroke-fg-disabled-subtle": true,
              "h-3 max-h-3 min-h-3 w-3 min-w-3 max-w-3": sizeV === "sm" || sizeV === undefined,
              "h-[14px] max-h-[14px] min-h-[14px] w-[14px] min-w-[14px] max-w-[14px]": sizeV === "md",
            })}
          />
        )}
        <VisuallyHidden>
          <AriaCheckbox
            {...props}
            ref={ref}
          />
        </VisuallyHidden>
      </span>
      {label !== undefined && (
        <div
          className={cn({
            "flex w-full flex-col": true,
            "gap-0.5": sizeV === "md",
          })}
        >
          <div
            className={cn({
              "font-medium text-text-secondary": true,
              "text-sm": sizeV === "sm" || sizeV === undefined,
              "text-base": sizeV === "md",
            })}
          >
            {label}
          </div>
          {hint && (
            <div
              className={cn({
                "font-normal text-text-tertiary": true,
                "text-sm": sizeV === "sm" || sizeV === undefined,
                "text-base": sizeV === "md",
              })}
            >
              {hint}
            </div>
          )}
        </div>
      )}
    </label>
  );
});

export { Checkbox };
