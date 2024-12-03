import { Input } from "@/common";
import { InputProps } from "@/common/types";
import { Dispatch, FC, forwardRef, SetStateAction, useState } from "react";
import { SvgOpenEye } from "../icons/SvgOpenEye";
import { SvgClosedEye } from "../icons/SvgClosedEye";

const PasswordInput: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(function PasswordInput({ ...props }, ref) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Input
      ref={ref}
      {...props}
      type={isOpen ? "text" : "password"}
      rightIcon={
        <Eye
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      }
    />
  );
});

const Eye = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="relative z-0 h-4 w-4">
      {isOpen && (
        <SvgOpenEye
          onClick={handleClick}
          className="absolute left-1/2 top-1/2 box-content h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 -translate-x-1/2 -translate-y-1/2 cursor-default rounded-full stroke-fg-quinary stroke-[1.5px] p-1 transition md:hover:bg-bg-tertiary md:hover:stroke-fg-quinary-hover"
        />
      )}
      {!isOpen && (
        <SvgClosedEye
          onClick={handleClick}
          className="absolute left-1/2 top-1/2 box-content h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 -translate-x-1/2 -translate-y-1/2 cursor-default rounded-full stroke-fg-quinary stroke-[1.5px] p-1 transition md:hover:bg-bg-tertiary md:hover:stroke-fg-quinary-hover"
        />
      )}
    </div>
  );
};

export { PasswordInput };
