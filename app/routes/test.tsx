import { Button, Checkbox, Input } from "@/components";

export default function Test() {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-3">
        <Checkbox
          label="Remember me"
          hint="Save my login details for next time."
        />
        <Checkbox indeterminate={true} />
        <Checkbox
          disabled={true}
          indeterminate={true}
        />
        <Checkbox disabled={true} />
        <Checkbox
          sizeV="md"
          indeterminate={true}
        />
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
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
        <Button
          size="2xl"
          disabled={true}
        >
          Button
        </Button>

        <Button
          variant="secondary"
          size="2xl"
        >
          Button
        </Button>
        <Button
          variant="secondary"
          size="2xl"
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
