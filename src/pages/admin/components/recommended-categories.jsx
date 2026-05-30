import {
  HouseIcon,
  MagnifyingGlassIcon,
  PackageIcon,
  GiftIcon,
  CalendarBlankIcon,
  IdentificationCardIcon,
  VolleyballIcon,
  AirplaneTiltIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { CategoryTile } from "@/features/category-tile";

const CATEGORIES = [
  { label: "Home Help", icon: HouseIcon, iconClassName: "text-amber-500" },
  { label: "Plan an event", icon: MagnifyingGlassIcon, iconClassName: "text-rose-500" },
  { label: "Return a package", icon: PackageIcon, iconClassName: "text-blue-500" },
  { label: "Send a gift", icon: GiftIcon, iconClassName: "text-pink-500" },
  { label: "Schedule an appointment", icon: CalendarBlankIcon, iconClassName: "text-rose-400" },
  { label: "Get a passport", icon: IdentificationCardIcon, iconClassName: "text-emerald-500" },
  { label: "Find a kids activity", icon: VolleyballIcon, iconClassName: "text-teal-500" },
  { label: "Plan a trip", icon: AirplaneTiltIcon, iconClassName: "text-orange-500" },
];

function RecommendedCategories({ className, ...props }) {
  return (
    <section
      data-slot="recommended-categories"
      aria-labelledby="recommended-categories-heading"
      className={cn("rounded-3xl border border-border bg-card p-6", className)}
      {...props}
    >
      <h2 id="recommended-categories-heading" className="font-heading text-base font-semibold">
        Recommended Categories
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <CategoryTile key={category.label} {...category} />
        ))}
      </div>
    </section>
  );
}

export { RecommendedCategories };
