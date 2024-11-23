import { useFetcher } from "@remix-run/react";
import { FC, useEffect } from "react";
import { theme } from "../types";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ThemeSwitcherProps = {
  theme: theme;
};

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ theme }) => {
  const fetcher = useFetcher();
  const sendingTheme = (fetcher.formData?.get("theme") as string | null) ?? "";

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (sendingTheme !== "") {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("system");
        document.documentElement.classList.add(sendingTheme);
      }
    }
  }, [sendingTheme]);

  function isActiveButton(themeProp: theme) {
    if (sendingTheme === "") {
      return theme === themeProp;
    } else {
      return sendingTheme === themeProp;
    }
  }

  return (
    <fetcher.Form
      action="/api/theme-switch"
      method="POST"
      className="flex items-center rounded-full bg-bg-secondary p-1"
    >
      <Button
        className={cn({
          "rounded-full px-4 py-2 text-text-secondary md:enabled:hover:bg-bg-brand-solid md:enabled:hover:text-text-secondary-on-brand": true,
          "bg-bg-brand-solid-hover text-text-secondary-on-brand shadow-[0px_4px_14px_0px_rgba(105,65,98,0.4)]": isActiveButton("light"),
        })}
        variant="none"
        size="none"
        type="submit"
        name="theme"
        value="light"
        disabled={isActiveButton("light")}
      >
        Light
      </Button>
      <Button
        className={cn({
          "rounded-full px-4 py-2 text-text-secondary md:enabled:hover:bg-bg-brand-solid md:enabled:hover:text-text-secondary-on-brand": true,
          "bg-bg-brand-solid-hover text-text-secondary-on-brand shadow-[0px_4px_14px_0px_rgba(105,65,98,0.4)]": isActiveButton("dark"),
        })}
        variant="none"
        size="none"
        type="submit"
        name="theme"
        value="dark"
        disabled={isActiveButton("dark")}
      >
        Dark
      </Button>
      <Button
        className={cn({
          "rounded-full px-4 py-2 text-text-secondary md:enabled:hover:bg-bg-brand-solid md:enabled:hover:text-text-secondary-on-brand": true,
          "bg-bg-brand-solid-hover text-text-secondary-on-brand shadow-[0px_4px_14px_0px_rgba(105,65,98,0.4)]": isActiveButton("system"),
        })}
        variant="none"
        size="none"
        type="submit"
        name="theme"
        value="system"
        disabled={isActiveButton("system")}
      >
        System
      </Button>

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </fetcher.Form>
  );
};

export { ThemeSwitcher };
