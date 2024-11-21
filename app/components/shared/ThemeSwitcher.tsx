import { cn } from "@/lib/utils";
import { useFetcher } from "@remix-run/react";
import { FC, useEffect } from "react";
import { theme } from "../types";
import { Button } from "../ui/button";

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
      className="flex items-center gap-2"
    >
      <Button
        variant="secondary"
        type="submit"
        name="theme"
        value="light"
        disabled={isActiveButton("light")}
      >
        Light
      </Button>
      <Button
        variant="secondary"
        type="submit"
        name="theme"
        value="dark"
        disabled={isActiveButton("dark")}
      >
        Dark
      </Button>
      <Button
        variant="secondary"
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
