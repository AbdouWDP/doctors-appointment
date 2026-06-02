import {
  StethoscopeIcon,
  UserCheckIcon,
  StarIcon,
  ClockIcon,
  PlusIcon,
  FunnelSimpleIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/features/stat-card";
import { DoctorCard } from "@/features/doctor-card";
import { DOCTORS } from "@/pages/dashboard/data";

const STATS = [
  {
    label: "Total Doctors",
    value: "32",
    delta: "3",
    trend: "up",
    icon: StethoscopeIcon,
  },
  {
    label: "On Duty Now",
    value: "18",
    delta: "4",
    trend: "up",
    icon: UserCheckIcon,
  },
  {
    label: "Avg. Rating",
    value: "4.8",
    delta: "0.2",
    trend: "up",
    icon: StarIcon,
  },
  {
    label: "Avg. Wait",
    value: "12 min",
    delta: "3 min",
    trend: "down",
    icon: ClockIcon,
  },
];

const SPECIALTIES = [
  "All",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
];

export default function DoctorsPage() {
  return (
    <DashboardLayout
      title="Doctors"
      subtitle="Your medical team and their specialties."
    >
      <div className="mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {SPECIALTIES.map((specialty, index) => (
            <Button
              key={specialty}
              variant={index === 0 ? "default" : "outline"}
              size="lg"
              className="rounded-full text-sm"
            >
              {specialty}
            </Button>
          ))}
          <Button
            variant="outline"
            size="lg"
            className="ml-auto rounded-lg text-sm"
          >
            <FunnelSimpleIcon />
            Filter
            <CaretDownIcon />
          </Button>
          <Button size="lg" className="rounded-lg text-sm">
            <PlusIcon />
            Add Doctor
          </Button>
        </div>

        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-5">
          {DOCTORS.map((doctor) => (
            <li key={doctor.id}>
              <DoctorCard {...doctor} />
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}
