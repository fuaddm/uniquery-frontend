import { LanguageSelect, ThemeSwitcher } from "@/common";

const LayoutHeader = () => {
  return (
    <div className="mb-16 flex w-full items-center justify-between py-8">
      <ThemeSwitcher />
      <LanguageSelect />
    </div>
  );
};

export { LayoutHeader };
