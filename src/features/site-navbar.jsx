import { CaretDownIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function SiteNavbar({
  className,
  brandName = "Medicare",
  primaryLinks = ["Home", "Contribution", "Our Mission"],
  menuLinks = ["Solutions", "Projects"],
  ...props
}) {
  return (
    <header
      data-slot="site-navbar"
      className={cn("sticky top-0 z-50 w-full px-4 py-4", className)}
      {...props}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4"
      >
        <ul className="hidden items-center gap-1 rounded-full bg-card/80 p-1 ring-1 ring-foreground/10 backdrop-blur md:flex">
          {primaryLinks.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                aria-current={i === 0 ? "page" : undefined}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground aria-[current=page]:bg-background aria-[current=page]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-foreground/10"
              >
                {i === 0 ? (
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-foreground" />
                ) : null}
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 ring-1 ring-foreground/10 backdrop-blur">
          <span
            aria-hidden="true"
            className="inline-flex size-7 items-center justify-center rounded-full bg-violet-200 font-heading text-sm font-bold text-violet-700"
          >
            M
          </span>
          <span className="font-heading text-lg font-semibold">{brandName}</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {menuLinks.map((link) => (
            <Button
              key={link}
              variant="ghost"
              size="lg"
              className="rounded-full text-sm text-muted-foreground"
            >
              {link}
              <CaretDownIcon />
            </Button>
          ))}
          <Button
            size="lg"
            className="rounded-full bg-violet-300 text-sm text-violet-950 hover:bg-violet-400"
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
}

export { SiteNavbar };
