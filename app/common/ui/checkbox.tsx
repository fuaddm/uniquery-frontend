import { forwardRef } from "react";
import { tv } from "tailwind-variants";
import { CheckboxProps } from "../types";
import { cn } from "@/lib/utils";
import { SvgCheck } from "../icons/SvgCheck";
import { SvgMinus } from "../icons/SvgMinus";
import { Checkbox as AriaCheckbox } from "react-aria-components";

export const checkbox = tv({
  base: cn({
    "flex cursor-pointer items-center justify-center border border-border-primary bg-transparent": true,
    "group-data-[focus-visible=true]:outline group-data-[focus-visible=true]:outline-2 group-data-[focus-visible=true]:outline-offset-2 group-data-[focus-visible=true]:outline-focus-ring": true,
    "group-data-[selected=true]:border-bg-brand-solid group-data-[selected=true]:bg-bg-brand-solid": true,
    "group-data-[disabled=true]:cursor-default group-data-[disabled=true]:border-border-disabled group-data-[disabled=true]:bg-bg-disabled-subtle": true,
    "group-data-[selected=true]:group-data-[disabled=true]:cursor-default group-data-[selected=true]:group-data-[disabled=true]:border-border-disabled group-data-[selected=true]:group-data-[disabled=true]:bg-bg-disabled-subtle":
      true,
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

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(function Checkbox({ sizeV, label, hint, ...props }, ref) {
  return (
    <AriaCheckbox
      {...props}
      ref={ref}
      className={cn({
        group: true,
        "flex w-fit items-start": true,
        "gap-2": sizeV === "sm" || sizeV === undefined,
        "gap-3": sizeV === "md",
      })}
    >
      <span
        className={cn({
          [checkbox({ sizeV })]: true,
          "mt-0.5": label !== undefined,
        })}
      >
        <SvgCheck
          className={cn({
            "hidden stroke-fg-white group-data-[selected=true]:block group-data-[selected=true]:group-data-[indeterminate=true]:hidden group-data-[disabled=true]:group-data-[selected=true]:stroke-fg-disabled-subtle":
              true,
            "h-3 max-h-3 min-h-3 w-3 min-w-3 max-w-3": sizeV === "sm" || sizeV === undefined,
            "h-[14px] max-h-[14px] min-h-[14px] w-[14px] min-w-[14px] max-w-[14px]": sizeV === "md",
          })}
        />
        <SvgMinus
          className={cn({
            "hidden stroke-fg-white group-data-[selected=true]:group-data-[indeterminate=true]:block group-data-[disabled=true]:group-data-[selected=true]:stroke-fg-disabled-subtle": true,
            "h-3 max-h-3 min-h-3 w-3 min-w-3 max-w-3": sizeV === "sm" || sizeV === undefined,
            "h-[14px] max-h-[14px] min-h-[14px] w-[14px] min-w-[14px] max-w-[14px]": sizeV === "md",
          })}
        />
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
    </AriaCheckbox>
  );
});

export { Checkbox };
