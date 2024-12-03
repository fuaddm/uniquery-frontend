// IMPORTS:

// Components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Loading } from "./ui/loading";
import { LanguageSelect } from "./shared/LanguageSelect";
import { ThemeSwitcher } from "./shared/ThemeSwitcher";

// Types
import type { locale, theme, SvgProps, ServiceResp } from "./types";

// Hooks
import { useThemeAndLocale } from "./hooks/useThemeAndLocale";

// Errors
import { HttpError } from "./shared/HttpError";
import { HttpErrorPage } from "./shared/HttpErrorPage";
import { ErrorMsg } from "./shared/ErrorMsg";
import { ErrorPage } from "./shared/ErrorPage";
import { RouteError } from "./shared/RouteError";
import { HttpErrorDocument } from "./shared/HttpErrorDocument";
import { ErrorDocument } from "./shared/ErrorDocument";

// Locales
import { commonAz } from "./locales/az";
import { commonEn } from "./locales/en";

// EXPORTS:

// Components
export { ThemeSwitcher, Button, Input, Checkbox, Loading, LanguageSelect };

// Types
export type { locale, theme, SvgProps, ServiceResp };

// Hooks
export { useThemeAndLocale };

// Errors
export { HttpError, HttpErrorPage, ErrorMsg, ErrorPage, RouteError, HttpErrorDocument, ErrorDocument };

//Locales
export { commonAz, commonEn };
