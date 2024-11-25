import { useFetcher } from "@remix-run/react";
import { FC } from "react";
import { Button } from "../ui/button";
import { SvgChevronDown } from "../icons/SvgChevronDown";
import usFlag from "@assets/layout/US.svg";
import azFlag from "@assets/layout/AZ.svg";
import { useThemeAndLocale } from "../hooks/useThemeAndLocale";
import { Key, ListBox, ListBoxItem, Popover, Select, SelectValue } from "react-aria-components";
import { locale } from "../types";

type Langs = "English" | "Azərbaycan";

const LanguageSelect: FC = () => {
  const { locale } = useThemeAndLocale();

  const mainFlag = locale === "en" ? usFlag : azFlag;
  const getFullLocale = (shortLocale: locale): Langs => (locale === shortLocale ? "English" : "Azərbaycan");
  const fullLocale = locale === "en" ? "English" : "Azərbaycan";

  const fetcher = useFetcher();

  const options: { name: locale }[] = [
    {
      name: "az",
    },
    {
      name: "en",
    },
  ];

  function handleSubmit(selected: Key) {
    const formData = new FormData();
    formData.append("lng", String(selected));
    fetcher.submit(formData, {
      method: "POST",
      action: "/api/locale-switch",
    });
  }

  return (
    <fetcher.Form
      action="/api/locale-switch"
      method="POST"
    >
      <Select
        name="lng"
        defaultSelectedKey={locale}
        aria-label="Select language"
        onSelectionChange={handleSubmit}
      >
        <Button
          variant="secondary"
          size="md"
        >
          <SelectValue className="flex w-[140px] items-center">
            <img
              src={mainFlag}
              height={20}
              width={20}
              alt={mainFlag + " flag"}
              className="me-2"
            />
            <div className="text-primary text-sm font-medium">{fullLocale}</div>
            <SvgChevronDown className="ms-auto max-h-5 min-h-5 min-w-5 max-w-5 stroke-button-secondary-fg" />
          </SelectValue>
        </Button>
        <Popover className="w-[--trigger-width] rounded-lg border border-border-secondary bg-bg-primary p-1.5 shadow-lg">
          <ListBox
            className="outline-none"
            items={options}
          >
            {options.map((option) => {
              if (option.name !== locale)
                return (
                  <ListBoxItem
                    key={option.name}
                    id={option.name}
                    textValue={getFullLocale(option.name)}
                    className="cursor-pointer outline-none hover:outline-none"
                  >
                    <SelectItem locale={option.name} />
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
  locale: locale;
};

const SelectItem: FC<SelecItemProps> = ({ locale }) => {
  const mainFlag = locale === "en" ? usFlag : azFlag;
  const fullLocale: Langs = locale === "en" ? "English" : "Azərbaycan";

  return (
    <div className="group">
      <div className="flex min-w-max items-center gap-2 rounded-md p-2 md:group-hover:bg-bg-active">
        <img
          src={mainFlag}
          height={20}
          width={20}
          alt={mainFlag + " flag"}
        />
        <div className="text-primary text-sm font-medium">{fullLocale}</div>
      </div>
    </div>
  );
};

export { LanguageSelect };
