import { langs, LanguageSelect, theme, ThemeSwitcher } from "@/common";
import { FC } from "react";

type LayoutHeaderProps = {
  theme: theme;
  locale: langs;
};

const LayoutHeader: FC<LayoutHeaderProps> = ({ theme, locale }) => {
  return (
    <div className="mb-16 flex w-full items-center justify-between py-8">
      <ThemeSwitcher theme={theme} />
      <LanguageSelect defaultLanguage={locale} />
    </div>
  );
};

export { LayoutHeader };
