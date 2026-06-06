import {
  CurrencyDollarIcon,
  CalendarCheckIcon,
  UsersThreeIcon,
  PulseIcon,
  CaretDownIcon,
  ArrowSquareOutIcon,
} from "@phosphor-icons/react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/features/stat-card";
import { Panel } from "@/features/panel";
import { BarChart } from "@/features/bar-chart";
import { DistributionRow } from "@/pages/dashboard/analytics/components/distribution-row";
import { WEEKLY_APPOINTMENTS, DEPARTMENTS } from "@/pages/dashboard/data";

const STATS = [
  { label: "Total Revenue", value: "$48.2k", delta: "8.1%", trend: "up", icon: CurrencyDollarIcon },
  { label: "Appointments", value: "342", delta: "5.4%", trend: "up", icon: CalendarCheckIcon },
  { label: "New Patients", value: "86", delta: "12%", trend: "up", icon: UsersThreeIcon },
  { label: "No-show Rate", value: "4.3%", delta: "1.2%", trend: "down", icon: PulseIcon },
];

const SATISFACTION = [
  { label: "Excellent", value: 64, tone: "bg-emerald-500" },
  { label: "Good", value: 24, tone: "bg-blue-500" },
  { label: "Average", value: 9, tone: "bg-amber-500" },
  { label: "Poor", value: 3, tone: "bg-rose-500" },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout
      title="Analytics"
      subtitle="Track performance across appointments, revenue and patients."
    >
      <div className="mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" size="lg" className="rounded-lg text-sm">
            Last 7 days
            <CaretDownIcon />
          </Button>
          <Button variant="outline" size="lg" className="rounded-lg text-sm">
            <ArrowSquareOutIcon />
            Export
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Panel
            className="lg:col-span-2"
            title="Appointments Overview"
            description="Bookings over the last 7 days"
          >
            <BarChart data={WEEKLY_APPOINTMENTS} className="mt-2" />
          </Panel>

          <Panel title="Patient Satisfaction" description="Based on 1,042 reviews">
            <ul className="flex flex-col gap-4">
              {SATISFACTION.map((item) => (
                <DistributionRow key={item.label} {...item} />
              ))}
            </ul>
          </Panel>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Panel title="Appointments by Department" description="This month">
            <ul className="flex flex-col gap-4">
              {DEPARTMENTS.map((department) => (
                <DistributionRow key={department.label} {...department} />
              ))}
            </ul>
          </Panel>

          <Panel
            className="lg:col-span-2"
            title="Revenue by Department"
            description="This month"
          >
            <BarChart
              className="mt-2"
              data={DEPARTMENTS.map((d) => ({
                label: d.label.slice(0, 5),
                value: d.value,
                highlight: d.label === "Cardiology",
              }))}
            />
          </Panel>
        </div>
      </div>
    </DashboardLayout>
  );
}
