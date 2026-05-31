import {
  CalendarCheckIcon,
  UsersThreeIcon,
  StethoscopeIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/features/stat-card";
import { Panel } from "@/features/panel";
import { BarChart } from "@/features/bar-chart";
import { AppointmentRow } from "@/features/appointment-row";
import { StatusPill } from "@/features/status-pill";
import {
  APPOINTMENTS,
  WEEKLY_APPOINTMENTS,
  DEPARTMENTS,
  TODAY_SCHEDULE,
} from "@/pages/dashboard/data";

const STATS = [
  { label: "Appointments Today", value: "24", delta: "12%", trend: "up", icon: CalendarCheckIcon },
  { label: "Total Patients", value: "1,294", delta: "5.2%", trend: "up", icon: UsersThreeIcon },
  { label: "Active Doctors", value: "32", delta: "3", trend: "up", icon: StethoscopeIcon },
  { label: "Revenue", value: "$48.2k", delta: "2.1%", trend: "down", icon: CurrencyDollarIcon },
];

function ScheduleItem({ time, patient, reason, tone }) {
  return (
    <li className="flex gap-3">
      <div className="flex w-12 shrink-0 flex-col items-end pt-0.5">
        <span className="text-xs font-medium text-foreground">{time}</span>
      </div>
      <div className="flex flex-col items-center">
        <StatusPill tone={tone} dot className="size-3 p-0" />
        <span className="mt-1 w-px flex-1 bg-border" />
      </div>
      <div className="min-w-0 flex-1 pb-5">
        <p className="truncate text-sm font-medium text-foreground">{patient}</p>
        <p className="truncate text-xs text-muted-foreground">{reason}</p>
      </div>
    </li>
  );
}

function DepartmentBar({ label, value, tone }) {
  return (
    <li className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${value}%` }} />
      </div>
    </li>
  );
}

export default function DashboardOverviewPage() {
  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Welcome back, Dr. Bennett — here's what's happening today."
    >
      <div className="mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Panel
            className="lg:col-span-2"
            title="Upcoming Appointments"
            description="Next visits scheduled for today"
            action={
              <Button variant="ghost" size="sm" className="rounded-lg text-muted-foreground">
                View all
                <ArrowRightIcon />
              </Button>
            }
          >
            <div className="flex flex-col gap-3">
              {APPOINTMENTS.slice(0, 4).map((appointment) => (
                <AppointmentRow key={appointment.patient} {...appointment} />
              ))}
            </div>
          </Panel>

          <Panel title="Today's Schedule" description="Friday, May 31">
            <ul className="flex flex-col">
              {TODAY_SCHEDULE.map((item) => (
                <ScheduleItem key={item.time} {...item} />
              ))}
            </ul>
          </Panel>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Panel
            className="lg:col-span-2"
            title="Weekly Appointments"
            description="Appointments booked over the last 7 days"
          >
            <BarChart data={WEEKLY_APPOINTMENTS} className="mt-2" />
          </Panel>

          <Panel title="By Department" description="Share of total appointments">
            <ul className="flex flex-col gap-4">
              {DEPARTMENTS.map((department) => (
                <DepartmentBar key={department.label} {...department} />
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </DashboardLayout>
  );
}
