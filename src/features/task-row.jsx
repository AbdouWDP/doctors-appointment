import {
  PaperclipIcon,
  ChatCircleIcon,
  ClockIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TaskBadge } from "@/features/task-badge";

function TaskMeta({ icon: Icon, value }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
      <Icon className="size-3.5" />
      {value}
    </span>
  );
}

function TaskRow({
  className,
  title,
  category,
  attachments,
  comments,
  status,
  statusTone = "neutral",
  priority,
  priorityTone = "neutral",
  daysLeft,
  progress = 0,
  ...props
}) {
  return (
    <div
      data-slot="task-row"
      className={cn(
        "flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4",
        className
      )}
      {...props}
    >
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{category}</p>
      </div>

      <div className="hidden items-center gap-2 lg:flex">
        <TaskMeta icon={PaperclipIcon} value={attachments} />
        <TaskMeta icon={ChatCircleIcon} value={comments} />
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <TaskBadge tone={statusTone}>{status}</TaskBadge>
        <TaskBadge tone={priorityTone}>{priority}</TaskBadge>
      </div>

      <span className="hidden items-center gap-1.5 text-xs whitespace-nowrap text-muted-foreground xl:inline-flex">
        <ClockIcon className="size-3.5" />
        {daysLeft}
      </span>

      <div className="flex items-center gap-3">
        <Progress value={progress} className="hidden w-28 rounded-full sm:block" />
        <span className="w-9 text-right text-xs font-medium text-foreground tabular-nums">
          {progress}%
        </span>
      </div>

      <Button variant="ghost" size="icon-sm" aria-label="Task options" className="rounded-full text-muted-foreground">
        <DotsThreeIcon weight="bold" />
      </Button>
    </div>
  );
}

export { TaskRow };
