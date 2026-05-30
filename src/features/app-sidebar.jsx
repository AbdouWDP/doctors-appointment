import {
  SquaresFourIcon,
  CheckSquareIcon,
  CookingPotIcon,
  FolderIcon,
  ReceiptIcon,
  ChatCircleIcon,
  GearIcon,
  LifebuoyIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const NAV_ITEMS = [
  { label: "Dashboard", icon: SquaresFourIcon },
  { label: "My Task", icon: CheckSquareIcon, active: true },
  { label: "Meal Planner", icon: CookingPotIcon },
  { label: "Documents", icon: FolderIcon },
  { label: "Receipts", icon: ReceiptIcon },
  { label: "Chats", icon: ChatCircleIcon, badge: "3" },
];

function AppSidebar({ className, brandName = "Sundays.", ...props }) {
  return (
    <aside
      data-slot="app-sidebar"
      className={cn(
        "flex w-64 shrink-0 flex-col justify-between gap-6 border-r border-border bg-card px-5 py-6",
        className,
      )}
      {...props}
    >
      <div>
        <span className="font-heading text-2xl font-bold tracking-tight">
          {brandName}
        </span>

        <nav aria-label="Main" className="flex flex-col gap-1 mt-6">
          <span className="px-2 pb-1 text-xs font-medium text-muted-foreground">
            Menu
          </span>
          {NAV_ITEMS.map(({ label, icon: Icon, active, badge }) => (
            <a
              key={label}
              href="#"
              aria-current={active ? "page" : undefined}
              className="group/nav inline-flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted aria-[current=page]:bg-violet-100 aria-[current=page]:text-foreground"
            >
              <Icon
                weight={active ? "fill" : "regular"}
                className="size-5 shrink-0 group-aria-[current=page]/nav:text-foreground"
              />
              <span className="flex-1">{label}</span>
              {badge ? (
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-violet-200 text-xs font-medium text-violet-700">
                  {badge}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-1 border-t border-border pt-4">
        <a
          href="#"
          className="inline-flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
        >
          <GearIcon className="size-5" />
          Settings
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
        >
          <LifebuoyIcon className="size-5" />
          Help &amp; Support
        </a>
      </div>
    </aside>
  );
}

export { AppSidebar };
