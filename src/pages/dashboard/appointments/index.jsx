import {
  CalendarCheckIcon,
  ClockCountdownIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@phosphor-icons/react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { StatCard } from "@/features/stat-card";
import { AppointmentRow } from "@/features/appointment-row";
import { AppointmentToolbar } from "@/pages/dashboard/components/appointment-toolbar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import appointments from "@/pages/dashboard/appointments/data.json";
import { useState } from "react";

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

function GroupHeader({ label, page, setPage, appointmentsLength }) {
  return (
    <div className="flex items-center justify-between px-1">
      <span className="text-xs font-medium tracking-wide text-muted-foreground">
        {label}
      </span>
      <div>
        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage(page - 1)}
                  href="#appointments-rows"
                />
              </PaginationItem>
            )}

            {Array.from(
              { length: Math.ceil(appointments.length / 5) },
              (_, i) => i + 1,
            ).map((item) => (
              <PaginationItem>
                <PaginationLink
                  className="rounded-md"
                  isActive={item === page}
                  onClick={() => setPage(item)}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ))}

            {page < appointmentsLength && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => setPage(page + 1)}
                  href="#appointments-rows"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default function AppointmentsPage() {
  const [page, setPage] = useState(1);

  const newAppointments = appointments.slice(5 * (page - 1), 5 * page);

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
          <GroupHeader
            label="Patients Schedule"
            page={page}
            setPage={setPage}
            appointmentsLength={newAppointments.length}
          />
          {newAppointments.map((appointment) => (
            <AppointmentRow
              key={appointment.id}
              {...appointment}
              appointment_id={appointment.id}
              id="appointments-rows"
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
