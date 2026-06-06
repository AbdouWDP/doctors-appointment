import {
  CalendarCheckIcon,
  ClockCountdownIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import { useEffect } from "react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { StatCard } from "@/features/stat-card";
import { DataTable } from "@/features/data-table";
import { AppointmentToolbar } from "@/pages/dashboard/appointments/components/appointment-toolbar";
import { GroupHeader } from "@/pages/dashboard/appointments/components/group-header";
import { appointmentColumns } from "@/pages/dashboard/appointments/components/columns";
import appointments from "@/pages/dashboard/appointments/data.json";
import { useData } from "@/store";

const STATS = [
  {
    label: "Total Today",
    value: "24",
    delta: "12%",
    trend: "up",
    icon: CalendarCheckIcon,
  },
  {
    label: "Pending",
    value: "6",
    delta: "2",
    trend: "up",
    icon: ClockCountdownIcon,
  },
  {
    label: "Confirmed",
    value: "15",
    delta: "8%",
    trend: "up",
    icon: CheckCircleIcon,
  },
  {
    label: "Cancelled",
    value: "3",
    delta: "1",
    trend: "down",
    icon: XCircleIcon,
  },
];

export default function AppointmentsPage() {
  const { data, setData, page } = useData();

  useEffect(() => {
    setData(appointments);
  }, [setData]);

  const newAppointments = data?.slice(5 * (page - 1), 5 * page) ?? [];

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

        <div id="appointments-rows" className="flex flex-col gap-3">
          <GroupHeader label="Patients Schedule" />
          <DataTable columns={appointmentColumns} data={newAppointments} />
        </div>
      </div>
    </DashboardLayout>
  );
}
