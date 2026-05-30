import { SparkleIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

function BrandLogo({ className, name, showName = true, ...props }) {
  return (
    <span
      data-slot="brand-logo"
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <span
        data-slot="brand-logo-mark"
        aria-hidden="true"
        className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"
      >
        <SparkleIcon weight="fill" className="size-5" />
      </span>
      {showName && name ? (
        <span data-slot="brand-logo-name" className="font-heading text-lg font-semibold">
          {name}
        </span>
      ) : null}
    </span>
  );
}

export { BrandLogo };
