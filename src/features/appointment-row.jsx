import {
  ClockIcon,
  VideoCameraIcon,
  MapPinIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusPill } from "@/features/status-pill";
import AppointmentModal from "../pages/dashboard/appointments/components/appointment-modal";

const MODE_ICON = {
  "In-person": MapPinIcon,
  Video: VideoCameraIcon,
};

function AppointmentRow({
  className,
  appointment_id,
  patient,
  avatar,
  type,
  time,
  doctor,
  condition,
  mode = "In-person",
  status,
  statusTone = "neutral",
  ...props
}) {
  const ModeIcon = MODE_ICON[mode] ?? MapPinIcon;
  const initials = patient
    ?.split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      data-slot="appointment-row"
      className={cn(
        "flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4",
        className,
      )}
      {...props}
    >
      <Avatar size="lg">
        <AvatarImage src={avatar} alt={patient} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">
          {patient}
        </p>
        <p className="truncate text-xs text-muted-foreground">{condition}</p>
      </div>

      <div className="hidden min-w-0 flex-1 flex-col md:flex">
        <p className="truncate text-sm font-medium text-foreground">{doctor}</p>
        <p className="truncate text-xs text-muted-foreground">{type}</p>
      </div>

      <span className="hidden items-center gap-1.5 text-xs whitespace-nowrap text-muted-foreground xl:inline-flex">
        <ClockIcon className="size-3.5" />
        {time}
      </span>

      <span className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground lg:inline-flex">
        <ModeIcon className="size-3.5" />
        {mode}
      </span>

      <StatusPill
        status={status}
        tone={statusTone}
        dot
        className="hidden sm:inline-flex"
      >
        {status}
      </StatusPill>

      <DropdownMenu className="w-fit">
        <DropdownMenuTrigger>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Appointment options"
            className="rounded-full text-muted-foreground"
          >
            <DotsThreeIcon weight="bold" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <AppointmentModal
              trigger={<DropdownMenuItem>Edit</DropdownMenuItem>}
              type="update"
              appointment={{ patient }}
            />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { AppointmentRow };
