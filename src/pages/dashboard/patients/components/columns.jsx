import {
  EnvelopeSimpleIcon,
  PhoneIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusPill } from "@/features/status-pill";

function getInitials(name) {
  return name
    ?.split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

// Column definitions (the headers) for the patients table — kept separate from
// the data so the same DataTable can render it.
export const patientColumns = [
  {
    accessorKey: "name",
    header: "Patient",
    cell: ({ row }) => {
      const { name, avatar, patientId } = row.original;
      return (
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {patientId}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "contact",
    header: "Contact",
    meta: {
      className: "hidden lg:table-cell",
      headClassName: "hidden lg:table-cell",
    },
    cell: ({ row }) => {
      const { email, phone } = row.original;
      return (
        <div className="flex min-w-0 flex-col gap-1">
          <span className="inline-flex items-center gap-1.5 truncate text-xs text-muted-foreground">
            <EnvelopeSimpleIcon className="size-3.5 shrink-0" />
            {email}
          </span>
          <span className="inline-flex items-center gap-1.5 truncate text-xs text-muted-foreground">
            <PhoneIcon className="size-3.5 shrink-0" />
            {phone}
          </span>
        </div>
      );
    },
  },
  {
    id: "demographics",
    header: "Gender / Age",
    meta: {
      className: "hidden text-xs text-muted-foreground md:table-cell",
      headClassName: "hidden md:table-cell",
    },
    cell: ({ row }) => {
      const { gender, age } = row.original;
      return (
        <span>
          {gender}, {age}
        </span>
      );
    },
  },
  {
    accessorKey: "lastVisit",
    header: "Last Visit",
    meta: {
      className: "hidden text-xs text-muted-foreground xl:table-cell",
      headClassName: "hidden xl:table-cell",
    },
    cell: ({ row }) => <span>Last: {row.original.lastVisit}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    meta: {
      className: "hidden sm:table-cell",
      headClassName: "hidden sm:table-cell",
    },
    cell: ({ row }) => (
      <StatusPill tone={row.original.statusTone} dot>
        {row.original.status}
      </StatusPill>
    ),
  },
  {
    id: "actions",
    header: "",
    meta: { className: "text-right", headClassName: "text-right" },
    cell: () => (
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Patient options"
        className="rounded-full text-muted-foreground"
      >
        <DotsThreeIcon weight="bold" />
      </Button>
    ),
  },
];
