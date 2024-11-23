import { useFetcher } from "@remix-run/react";
import { FC, FocusEvent, forwardRef, useRef, useState } from "react";
import { Button } from "../ui/button";
import { SvgChevronDown } from "../icons/SvgChevronDown";
import usFlag from "@assets/layout/US.svg";
import azFlag from "@assets/layout/AZ.svg";
import { ButtonProps } from "../types";
import { cn } from "@/lib/utils";

type LanguageSelectProps = {
  defaultLanguage: "en" | "az";
};

type Langs = "English" | "Azərbaycan";

const LanguageSelect: FC<LanguageSelectProps> = ({ defaultLanguage }) => {
  const defaultFullLang = defaultLanguage === "en" ? "English" : "Azərbaycan";

  const fetcher = useFetcher();

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  function handleBlur(e: FocusEvent<HTMLDivElement>) {
    if (!containerRef.current?.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  }

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <fetcher.Form
      action="/api/locale-switch"
      method="POST"
    >
      <div
        className="relative z-0"
        tabIndex={0}
        ref={containerRef}
        onBlur={handleBlur}
      >
        <SelectLang
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          lang={defaultFullLang}
        />
        <div
          className={cn({
            "invisible absolute right-0 top-[calc(100%_+_12px)] min-w-full rounded-lg border border-border-secondary bg-bg-primary py-1 shadow-lg": true,
            visible: isOpen,
          })}
        >
          <button
            onClick={handleClose}
            className={cn({
              "group w-full px-1.5 py-0.5": true,
              hidden: defaultFullLang === "Azərbaycan",
            })}
            type="submit"
            name="lng"
            value="Azərbaycan"
          >
            <div className="flex min-w-max items-center gap-2 rounded-md p-2 group-hover:bg-bg-active">
              <img
                src={azFlag}
                alt={azFlag + " flag"}
              />
              <div>Azərbaycan</div>
            </div>
          </button>
          <button
            onClick={handleClose}
            className={cn({
              "group w-full px-1.5 py-0.5": true,
              hidden: defaultFullLang === "English",
            })}
            type="submit"
            name="lng"
            value="English"
          >
            <div className="flex min-w-max items-center gap-2 rounded-md p-2 group-hover:bg-bg-active">
              <img
                src={usFlag}
                alt={usFlag + " flag"}
              />
              <div>English</div>
            </div>
          </button>
        </div>
      </div>
    </fetcher.Form>
  );
};

type SelectLangProps = ButtonProps & {
  lang: Langs;
};

const SelectLang = forwardRef<HTMLButtonElement, SelectLangProps>(function SelectLang({ lang, ...props }, ref) {
  const mainFlag = lang === "English" ? usFlag : azFlag;

  return (
    <Button
      ref={ref}
      variant="secondary"
      size="md"
      className="flex w-[170px] items-center"
      {...props}
    >
      <img
        src={mainFlag}
        alt={lang + " flag"}
      />
      <div className="">{lang}</div>
      <SvgChevronDown className="ms-auto max-h-5 min-h-5 min-w-5 max-w-5 stroke-button-secondary-fg" />
    </Button>
  );
});

export { LanguageSelect };
