import {
  EnvelopeSimpleIcon,
  PhoneIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusPill } from "@/features/status-pill";

function PatientRow({
  className,
  name,
  avatar,
  patientId,
  email,
  phone,
  gender,
  age,
  lastVisit,
  status,
  statusTone = "emerald",
  ...props
}) {
  const initials = name
    ?.split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      data-slot="patient-row"
      className={cn(
        "flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4",
        className,
      )}
      {...props}
    >
      <Avatar size="lg">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{name}</p>
        <p className="truncate text-xs text-muted-foreground">{patientId}</p>
      </div>

      <div className="hidden min-w-0 flex-1 flex-col gap-1 lg:flex">
        <span className="inline-flex items-center gap-1.5 truncate text-xs text-muted-foreground">
          <EnvelopeSimpleIcon className="size-3.5 shrink-0" />
          {email}
        </span>
        <span className="inline-flex items-center gap-1.5 truncate text-xs text-muted-foreground">
          <PhoneIcon className="size-3.5 shrink-0" />
          {phone}
        </span>
      </div>

      <span className="hidden w-28 text-xs text-muted-foreground md:block">
        {gender}, {age}
      </span>

      <span className="hidden w-28 text-xs text-muted-foreground xl:block">
        Last: {lastVisit}
      </span>

      <StatusPill tone={statusTone} dot className="hidden sm:inline-flex">
        {status}
      </StatusPill>

      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Patient options"
        className="rounded-full text-muted-foreground"
      >
        <DotsThreeIcon weight="bold" />
      </Button>
    </div>
  );
}

export { PatientRow };
