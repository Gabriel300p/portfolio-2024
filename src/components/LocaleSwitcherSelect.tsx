"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "../navigation";

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        "relative text-gray-400",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <button
        onClick={() =>
          onSelectChange({
            target: { value: "pt" },
          } as React.ChangeEvent<HTMLSelectElement>)
        }
        disabled={isPending}
        value="pt"
      >
        Português
      </button>
      <button
        onClick={() =>
          onSelectChange({
            target: { value: "en" },
          } as React.ChangeEvent<HTMLSelectElement>)
        }
        disabled={isPending}
        value="en"
      >
        English
      </button>
    </label>
  );
}
