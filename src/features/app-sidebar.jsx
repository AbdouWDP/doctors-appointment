import { NavLink } from "react-router";
import {
  SquaresFourIcon,
  CalendarCheckIcon,
  StethoscopeIcon,
  UsersThreeIcon,
  ChartLineUpIcon,
  GearIcon,
  LifebuoyIcon,
  PlusIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AppointmentModal from "../pages/dashboard/appointments/components/appointment-modal";

const NAV_ITEMS = [
  { label: "Dashboard", icon: SquaresFourIcon, to: "/dashboard", end: true },
  {
    label: "Appointments",
    icon: CalendarCheckIcon,
    to: "/dashboard/appointments",
    badge: "8",
  },
  { label: "Doctors", icon: StethoscopeIcon, to: "/dashboard/doctors" },
  { label: "Patients", icon: UsersThreeIcon, to: "/dashboard/patients" },
  { label: "Analytics", icon: ChartLineUpIcon, to: "/dashboard/analytics" },
];

const SECONDARY_ITEMS = [
  { label: "Settings", icon: GearIcon, to: "/dashboard/settings" },
  { label: "Help & Support", icon: LifebuoyIcon, to: "/dashboard/support" },
];

function NavItem({ to, end, icon: Icon, label, badge }) {
  return (
    <NavLink
      to={to}
      end={end}
      state={{ prev: to }}
      className="group/nav inline-flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted aria-[current=page]:bg-primary/10 aria-[current=page]:text-primary"
    >
      {({ isActive }) => (
        <>
          <Icon
            weight={isActive ? "fill" : "regular"}
            className="size-5 shrink-0"
          />
          <span className="flex-1">{label}</span>
          {badge ? (
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary/15 text-xs font-medium text-primary">
              {badge}
            </span>
          ) : null}
        </>
      )}
    </NavLink>
  );
}

function AppSidebar({ className, brandName = "MediCare", ...props }) {
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
        <div className="flex items-center gap-2 px-1">
          <span
            aria-hidden="true"
            className="inline-flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"
          >
            <StethoscopeIcon weight="fill" className="size-5" />
          </span>
          <span className="font-heading text-2xl font-bold tracking-tight">
            {brandName}
          </span>
        </div>

        <nav aria-label="Main" className="mt-6 flex flex-col gap-1">
          <span className="px-2 pb-1 text-xs font-medium text-muted-foreground">
            Menu
          </span>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl bg-primary/10 p-4">
          <p className="text-sm font-semibold text-foreground">
            New appointment
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Book a slot for a patient in a few clicks.
          </p>
          <AppointmentModal
            trigger={
              <Button size="lg" className="mt-3 w-full rounded-lg text-sm">
                <PlusIcon />
                Add Appointment
              </Button>
            }
          />
        </div>

        <div className="flex flex-col gap-1 border-t border-border pt-4">
          {SECONDARY_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export { AppSidebar };
