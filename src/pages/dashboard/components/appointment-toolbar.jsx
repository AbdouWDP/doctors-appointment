import {
  FunnelSimpleIcon,
  ArrowsDownUpIcon,
  CalendarBlankIcon,
  CaretDownIcon,
  DotsThreeIcon,
  PlusIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function AppointmentToolbar({ className, ...props }) {
  return (
    <div
      data-slot="appointment-toolbar"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <Button variant="outline" size="lg" className="rounded-lg text-sm">
        <CalendarBlankIcon />
        Today
        <CaretDownIcon />
      </Button>
      <Button variant="outline" size="lg" className="rounded-lg text-sm">
        <FunnelSimpleIcon />
        Filter
        <CaretDownIcon />
      </Button>
      <Button variant="outline" size="lg" className="rounded-lg text-sm">
        <ArrowsDownUpIcon />
        Sort
      </Button>
      <Button
        variant="outline"
        size="icon-lg"
        aria-label="More options"
        className="rounded-lg"
      >
        <DotsThreeIcon weight="bold" />
      </Button>

      <Button size="lg" className="ml-auto rounded-lg text-sm">
        <PlusIcon />
        New Appointment
      </Button>
    </div>
  );
}

export { AppointmentToolbar };
