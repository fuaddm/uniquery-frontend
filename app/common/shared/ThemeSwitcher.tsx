import { useFetcher } from "@remix-run/react";
import { FC, useEffect } from "react";
import { theme } from "../types";
import { Button } from "../ui/button";
import { useThemeAndLocale } from "../hooks/useThemeAndLocale";
import { Key, ListBox, ListBoxItem, Popover, Select, SelectValue } from "react-aria-components";
import { SvgSun } from "../icons/SvgSun";
import { SvgMoon } from "../icons/SvgMoon";
import { SvgMonitor } from "../icons/SvgMonitor";

const ThemeSwitcher: FC = () => {
  const { theme } = useThemeAndLocale();

  const fetcher = useFetcher();
  const sendingTheme = fetcher.formData?.get("theme") as theme;

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (fetcher.state === "submitting" || fetcher.state === "loading") {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("system");
        document.documentElement.classList.add(sendingTheme);
      }
    }
  }, [sendingTheme]);

  function isActiveTheme(themeProp: theme) {
    if (fetcher.state === "submitting" || fetcher.state === "loading") {
      return sendingTheme === themeProp;
    }
    return theme === themeProp;
  }

  const options: { name: theme }[] = [
    {
      name: "light",
    },
    {
      name: "dark",
    },
    {
      name: "system",
    },
  ];

  function handleSubmit(selected: Key) {
    const formData = new FormData();
    formData.append("theme", String(selected));
    fetcher.submit(formData, {
      method: "POST",
      action: "/api/theme-switch",
    });
  }

  return (
    <fetcher.Form className="relative z-0 w-fit">
      <Select
        name="lng"
        defaultSelectedKey={theme}
        aria-label="Select language"
        onSelectionChange={handleSubmit}
      >
        <Button
          variant="secondary"
          size="md"
          icon={true}
        >
          <SelectValue>
            {isActiveTheme("light") && <SvgSun className="h-5 w-5 stroke-fg-quinary" />}
            {isActiveTheme("dark") && <SvgMoon className="h-5 w-5 stroke-fg-quinary" />}
            {isActiveTheme("system") && <SvgMonitor className="h-5 w-5 stroke-fg-quinary" />}
          </SelectValue>
        </Button>
        <Popover className="min-w-[--trigger-width] rounded-lg border border-border-secondary bg-bg-primary p-1.5 shadow-lg">
          <ListBox
            className="outline-none"
            items={options}
          >
            {options.map((option) => {
              return (
                <ListBoxItem
                  key={option.name}
                  id={option.name}
                  textValue={option.name}
                  className="pointer-events-auto cursor-pointer outline-none hover:outline-none"
                >
                  <SelectItem theme={option.name} />
                </ListBoxItem>
              );
            })}
          </ListBox>
        </Popover>
      </Select>
    </fetcher.Form>
  );
};

type SelecItemProps = {
  theme: theme;
};

const SelectItem: FC<SelecItemProps> = ({ theme }) => {
  return <div className="flex w-full min-w-max items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-text-secondary md:hover:bg-bg-active">{theme[0].toUpperCase() + theme.slice(1)}</div>;
};

export { ThemeSwitcher };
