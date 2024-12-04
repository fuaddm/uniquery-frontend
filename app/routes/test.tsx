import { Button, Checkbox, Input, LanguageSelect, RouteError, ThemeSwitcher } from "@/common";
import { ILoading } from "@/common/shared/Loading/ILoading";

export default function Test() {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-3 p-10">
        <div className="relative z-10">
          <ThemeSwitcher />
        </div>
        <LanguageSelect />

        <ILoading radius={24} />
        <Checkbox
          label="Remember me"
          isIndeterminate
          hint="Save my login details for next time."
        />
        <Checkbox />
        <Checkbox isDisabled />
        <Checkbox
          isDisabled
          isSelected
        />
        <Checkbox sizeV="md" />
        <Checkbox sizeV="md" />
        <div className="max-w-[300px]">
          <Input
            required
            placeholder="olivia@untitledui.com"
            sizeV="sm"
            wrapperClassName="mb-3"
          />
          <Input
            disabled
            placeholder="olivia@untitledui.com"
            sizeV="md"
          />
        </div>
        <div className="flex flex-col">
          <Button size="sm">Button</Button>
          <Button
            size="sm"
            isDisabled
          >
            Button
          </Button>
        </div>

        <div className="flex flex-col">
          <Button
            size="sm"
            variant="secondary"
          >
            Button
          </Button>
          <Button
            size="sm"
            isDisabled
            variant="secondary"
          >
            Button
          </Button>
        </div>

        <Button
          variant="secondary"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="secondary"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="secondaryColor"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="secondaryColor"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="tertiary"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="tertiary"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="tertiaryColor"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="tertiaryColor"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="link"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="link"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="linkColor"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="linkColor"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="destructivePrimary"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="destructivePrimary"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="destructiveSecondary"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="destructiveSecondary"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="destructiveTertiary"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="destructiveTertiary"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="destructiveLink"
          size="2xl"
        >
          Button
        </Button>

        <Button
          variant="destructiveLink"
          size="2xl"
          isDisabled
        >
          Button
        </Button>

        <Button
          variant="tertiary"
          icon={true}
          size="2xl"
        >
          <div className="h-6 w-6 bg-rose-400"></div>
        </Button>
        <div className="rounded-xl px-10 py-2 text-5xl font-semibold"></div>
      </div>
    </>
  );
}

export const ErrorBoundary = RouteError;
