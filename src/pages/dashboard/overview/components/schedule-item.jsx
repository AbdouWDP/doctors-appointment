import { StatusPill } from "@/features/status-pill";

function ScheduleItem({ time, patient, reason, tone }) {
  return (
    <li className="flex gap-3">
      <div className="flex w-12 shrink-0 flex-col items-end pt-0.5">
        <span className="text-xs font-medium text-foreground">{time}</span>
      </div>
      <div className="flex flex-col items-center">
        <StatusPill tone={tone} dot className="size-3 p-0" />
        <span className="mt-1 w-px flex-1 bg-border" />
      </div>
      <div className="min-w-0 flex-1 pb-5">
        <p className="truncate text-sm font-medium text-foreground">{patient}</p>
        <p className="truncate text-xs text-muted-foreground">{reason}</p>
      </div>
    </li>
  );
}

export { ScheduleItem };
