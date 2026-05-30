import { PlusIcon, DotsThreeIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TaskRow } from "@/features/task-row";

const TODO_TASKS = [
  {
    title: "Schedule Me An Appointment With My Endocrine...",
    category: "Appointment",
    attachments: 12,
    comments: 21,
    status: "In Review",
    statusTone: "orange",
    priority: "High",
    priorityTone: "rose",
    daysLeft: "15 Days left",
    progress: 0,
  },
  {
    title: "Track Medicine Delivery",
    category: "Tracking",
    attachments: 4,
    comments: 32,
    status: "Drafts",
    statusTone: "neutral",
    priority: "Medium",
    priorityTone: "orange",
    daysLeft: "12 Days left",
    progress: 0,
  },
];

const ACTIVE_PROJECTS = [
  {
    title: "Plan An Event",
    category: "Plannning",
    attachments: 11,
    comments: 8,
    status: "In Progress",
    statusTone: "violet",
    priority: "Mid",
    priorityTone: "pink",
    daysLeft: "32 Days left",
    progress: 26,
  },
  {
    title: "Return A Package",
    category: "Delivery",
    attachments: 7,
    comments: 12,
    status: "In Progress",
    statusTone: "blue",
    priority: "Medium",
    priorityTone: "orange",
    daysLeft: "4 Days left",
    progress: 74,
  },
  {
    title: "Get A Passport",
    category: "Personal Help",
    attachments: 4,
    comments: 16,
    status: "Input Needed",
    statusTone: "neutral",
    priority: "Low",
    priorityTone: "teal",
    daysLeft: "22 Days left",
    progress: 38,
  },
];

function GroupHeader({ label }) {
  return (
    <div className="flex items-center justify-between px-1">
      <span className="text-xs font-medium tracking-wide text-muted-foreground">{label}</span>
      <Button variant="ghost" size="icon-sm" aria-label="Group options" className="rounded-full text-muted-foreground">
        <DotsThreeIcon weight="bold" />
      </Button>
    </div>
  );
}

function TaskList({ className, ...props }) {
  return (
    <div data-slot="task-list" className={cn("flex flex-col gap-3", className)} {...props}>
      <GroupHeader label="TODO" />
      {TODO_TASKS.map((task) => (
        <TaskRow key={task.title} {...task} />
      ))}

      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-border py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
      >
        <PlusIcon />
        Add New Project
      </button>

      <GroupHeader label="ACTIVE PROJECTS" />
      {ACTIVE_PROJECTS.map((task) => (
        <TaskRow key={task.title} {...task} />
      ))}
    </div>
  );
}

export { TaskList };
