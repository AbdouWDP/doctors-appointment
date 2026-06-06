import {
  CalendarCheckIcon,
  UsersThreeIcon,
  StethoscopeIcon,
  CurrencyDollarIcon,
} from "@phosphor-icons/react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { StatCard } from "@/features/stat-card";
import { Panel } from "@/features/panel";
import { BarChart } from "@/features/bar-chart";
import { ScheduleItem } from "@/pages/dashboard/overview/components/schedule-item";
import { DepartmentBar } from "@/pages/dashboard/overview/components/department-bar";
import { RecentActivity } from "@/pages/dashboard/overview/components/recent-activity";
import {
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
          <RecentActivity className="lg:col-span-2" />

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
