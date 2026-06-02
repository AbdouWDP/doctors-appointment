import {
  UsersThreeIcon,
  UserPlusIcon,
  HeartbeatIcon,
  CalendarCheckIcon,
  PlusIcon,
  FunnelSimpleIcon,
  ArrowsDownUpIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/features/stat-card";
import { Panel } from "@/features/panel";
import { PatientRow } from "@/features/patient-row";
import { PATIENTS } from "@/pages/dashboard/data";

const STATS = [
  {
    label: "Total Patients",
    value: "1,294",
    delta: "5.2%",
    trend: "up",
    icon: UsersThreeIcon,
  },
  {
    label: "New This Month",
    value: "86",
    delta: "12%",
    trend: "up",
    icon: UserPlusIcon,
  },
  {
    label: "Admitted",
    value: "24",
    delta: "2",
    trend: "down",
    icon: HeartbeatIcon,
  },
  {
    label: "Appointments",
    value: "342",
    delta: "8%",
    trend: "up",
    icon: CalendarCheckIcon,
  },
];

export default function PatientsPage() {
  return (
    <DashboardLayout
      title="Patients"
      subtitle="Browse and manage your patient records."
    >
      <div className="mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <Panel
          title="All Patients"
          description="1,294 total records"
          action={
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg text-sm"
              >
                <FunnelSimpleIcon />
                Filter
                <CaretDownIcon />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg text-sm"
              >
                <ArrowsDownUpIcon />
                Sort
              </Button>
              <Button size="lg" className="rounded-lg text-sm">
                <PlusIcon />
                Add Patient
              </Button>
            </div>
          }
        >
          <div className="flex flex-col gap-3">
            {PATIENTS.map((patient) => (
              <PatientRow key={patient.patientId} {...patient} />
            ))}
          </div>
        </Panel>
      </div>
    </DashboardLayout>
  );
}
