import {
  MagnifyingGlassIcon,
  BellIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DashboardTopbar({
  className,
  title = "Dashboard",
  subtitle,
  ...props
}) {
  return (
    <header
      data-slot="dashboard-topbar"
      className={cn("flex items-center gap-6 px-8 py-5", className)}
      {...props}
    >
      <div className="min-w-0">
        <h1 className="font-heading text-xl font-semibold whitespace-nowrap">
          {title}
        </h1>
        {subtitle ? (
          <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>

      <div className="relative mx-auto w-full max-w-xl">
        <label htmlFor="search">
          <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </label>
        <Input
          id="search"
          type="search"
          aria-label="Search patients, doctors or appointments"
          placeholder="Search patients, doctors or appointments"
          className="h-11 rounded-full bg-card pl-10 pr-16 text-sm"
        />
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
            className="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary ring-2 ring-background"
          />
        </button>

        <div className="flex items-center gap-2.5">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80"
              alt="Dr. Andrew Bennett"
            />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-medium text-foreground">
              Dr. Andrew Bennett
            </p>
            <p className="text-xs text-muted-foreground">Cardiologist</p>
          </div>
          <CaretDownIcon className="hidden size-4 text-muted-foreground sm:block" />
        </div>
      </div>
    </header>
  );
}

export { DashboardTopbar };
