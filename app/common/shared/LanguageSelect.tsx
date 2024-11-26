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

const options: { name: locale }[] = [
  {
    name: "az",
  },
  {
    name: "en",
  },
];

const LanguageSelect: FC = () => {
  const fetcher = useFetcher();
  const { locale } = useThemeAndLocale();

  const sendingLocale = fetcher.formData?.get("lng") as locale;

  function isActiveLocale(localeProp: locale) {
    if (fetcher.state === "submitting" || fetcher.state === "loading") {
      return sendingLocale === localeProp;
    }
    return locale === localeProp;
  }

  function getFullLocale(localeProp: locale) {
    switch (localeProp) {
      case "en":
        return "English";
      case "az":
        return "Azərbaycan";
      default:
        return "English";
    }
  }

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
            {isActiveLocale("en") && (
              <>
                <img
                  src={usFlag}
                  height={20}
                  width={20}
                  alt={usFlag + " flag"}
                  className="me-2"
                />
                <div className="text-primary text-sm font-medium">{getFullLocale("en")}</div>
              </>
            )}
            {isActiveLocale("az") && (
              <>
                <img
                  src={azFlag}
                  height={20}
                  width={20}
                  alt={azFlag + " flag"}
                  className="me-2"
                />
                <div className="text-primary text-sm font-medium">{getFullLocale("az")}</div>
              </>
            )}
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
                    <SelectItem
                      locale={option.name}
                      fullLocale={getFullLocale(option.name)}
                    />
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
  fullLocale: Langs;
};

const SelectItem: FC<SelecItemProps> = ({ locale, fullLocale }) => {
  const mainFlag = locale === "en" ? usFlag : azFlag;

  return (
    <div className="flex min-w-max items-center gap-2 rounded-md p-2 md:hover:bg-bg-active">
      <img
        src={mainFlag}
        height={20}
        width={20}
        alt={mainFlag + " flag"}
      />
      <div className="text-primary text-sm font-medium">{fullLocale}</div>
    </div>
  );
};

export { LanguageSelect };
