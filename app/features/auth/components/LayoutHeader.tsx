import { LanguageSelect, ThemeSwitcher } from "@/common";
import { FC } from "react";

const LayoutHeader: FC = () => {
  return (
    <div className="mb-16 flex w-full items-center justify-between py-8">
      <ThemeSwitcher />
      <LanguageSelect />
    </div>
  );
};

export { LayoutHeader };
