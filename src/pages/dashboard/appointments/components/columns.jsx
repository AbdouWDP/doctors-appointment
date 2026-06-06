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

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusPill } from "@/features/status-pill";
import AppointmentModal from "./appointment-modal";

const MODE_ICON = {
  "In-person": MapPinIcon,
  Video: VideoCameraIcon,
};

function getInitials(name) {
  return name
    ?.split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

// Column definitions (the headers) for the appointments table — kept separate
// from the data so the same table can be reused across pages.
export const appointmentColumns = [
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => {
      const { patient, avatar, condition } = row.original;
      return (
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            <AvatarImage src={avatar} alt={patient} />
            <AvatarFallback>{getInitials(patient)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {patient}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {condition}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "doctor",
    header: "Doctor",
    meta: {
      className: "hidden md:table-cell",
      headClassName: "hidden md:table-cell",
    },
    cell: ({ row }) => {
      const { doctor, type } = row.original;
      return (
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">
            {doctor}
          </p>
          <p className="truncate text-xs text-muted-foreground">{type}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    meta: {
      className: "hidden xl:table-cell",
      headClassName: "hidden xl:table-cell",
    },
    cell: ({ row }) => (
      <span className="inline-flex items-center gap-1.5 text-xs whitespace-nowrap text-muted-foreground">
        <ClockIcon className="size-3.5" />
        {row.original.time}
      </span>
    ),
  },
  {
    id: "mode",
    header: "Mode",
    meta: {
      className: "hidden lg:table-cell",
      headClassName: "hidden lg:table-cell",
    },
    cell: ({ row }) => {
      const mode = row.original.mode ?? "In-person";
      const ModeIcon = MODE_ICON[mode] ?? MapPinIcon;
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
          <ModeIcon className="size-3.5" />
          {mode}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    meta: {
      className: "hidden sm:table-cell",
      headClassName: "hidden sm:table-cell",
    },
    cell: ({ row }) => (
      <StatusPill status={row.original.status} dot>
        {row.original.status}
      </StatusPill>
    ),
  },
  {
    id: "actions",
    header: "",
    meta: { className: "text-right", headClassName: "text-right" },
    cell: ({ row }) => {
      const { patient } = row.original;
      return (
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
      );
    },
  },
];
