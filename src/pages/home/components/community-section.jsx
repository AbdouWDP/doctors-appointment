import {
  CompassIcon,
  AsteriskIcon,
  DropHalfIcon,
  CircleHalfIcon,
  SunIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

const LOGOS = [
  { icon: CircleHalfIcon, label: "Circle" },
  { icon: DropHalfIcon, label: "Invert" },
  { icon: CompassIcon, label: "Compass" },
  { icon: AsteriskIcon, label: "hues" },
  { icon: SunIcon, label: "Sun" },
  { icon: AsteriskIcon, label: "hues" },
  { icon: SunIcon, label: "Beam" },
];

function CommunitySection({ className, ...props }) {
  return (
    <section
      data-slot="community-section"
      aria-label="Trusted by businesses"
      className={cn("mx-auto max-w-6xl px-4 py-12 text-center", className)}
      {...props}
    >
      <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
        Join our community of 120,000+ businesses
      </h2>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-muted-foreground">
        {LOGOS.map(({ icon: Icon, label }, i) => (
          <li key={i} className="inline-flex items-center gap-2 opacity-70">
            <Icon weight="bold" className="size-6" />
            <span className="text-sm font-semibold">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { CommunitySection };
