import { ThemeSwitcher } from "./shared/ThemeSwitcher";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { SvgProps } from "./types";
import { LanguageSelect } from "./shared/LanguageSelect";
import { useThemeAndLocale } from "./hooks/useThemeAndLocale";
import { Loading } from "./ui/loading";

import type { locale, theme } from "./types";

export { ThemeSwitcher, Button, Input, Checkbox, Loading, LanguageSelect };
export type { locale, theme, SvgProps };
export { useThemeAndLocale };
