import {
  CalendarCheckIcon,
  ClockCountdownIcon,
  CheckCircleIcon,
  XCircleIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/features/stat-card";
import { AppointmentRow } from "@/features/appointment-row";
import { AppointmentToolbar } from "@/pages/dashboard/components/appointment-toolbar";
import { APPOINTMENTS } from "@/pages/dashboard/data";

const STATS = [
  { label: "Total Today", value: "24", delta: "12%", trend: "up", icon: CalendarCheckIcon },
  { label: "Pending", value: "6", delta: "2", trend: "up", icon: ClockCountdownIcon },
  { label: "Confirmed", value: "15", delta: "8%", trend: "up", icon: CheckCircleIcon },
  { label: "Cancelled", value: "3", delta: "1", trend: "down", icon: XCircleIcon },
];

const TODAY = APPOINTMENTS.slice(0, 3);
const UPCOMING = APPOINTMENTS.slice(3);

function GroupHeader({ label }) {
  return (
    <div className="flex items-center justify-between px-1">
      <span className="text-xs font-medium tracking-wide text-muted-foreground">
        {label}
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Group options"
        className="rounded-full text-muted-foreground"
      >
        <DotsThreeIcon weight="bold" />
      </Button>
    </div>
  );
}

export default function AppointmentsPage() {
  return (
    <DashboardLayout
      title="Appointments"
      subtitle="Manage and review your scheduled patient visits."
    >
      <div className="mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <AppointmentToolbar />

        <div className="flex flex-col gap-3">
          <GroupHeader label="TODAY" />
          {TODAY.map((appointment) => (
            <AppointmentRow key={appointment.patient} {...appointment} />
          ))}

          <GroupHeader label="UPCOMING" />
          {UPCOMING.map((appointment) => (
            <AppointmentRow key={appointment.patient} {...appointment} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
