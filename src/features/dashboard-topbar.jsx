import { MagnifyingGlassIcon, BellIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DashboardTopbar({ className, title = "My Task", ...props }) {
  return (
    <header
      data-slot="dashboard-topbar"
      className={cn("flex items-center gap-6 px-8 py-5", className)}
      {...props}
    >
      <h1 className="font-heading text-xl font-semibold whitespace-nowrap">{title}</h1>

      <div className="relative mx-auto w-full max-w-xl">
        <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          aria-label="Search or type a command"
          placeholder="Search or type a command"
          className="h-11 rounded-full bg-card pl-10 pr-16 text-sm"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
          ⌘ F
        </kbd>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="relative inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
        >
          <BellIcon className="size-5" />
          <span
            aria-hidden="true"
            className="absolute right-1.5 top-1.5 size-2 rounded-full bg-foreground ring-2 ring-background"
          />
        </button>
        <Avatar>
          <AvatarImage src="" alt="Account" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export { DashboardTopbar };
