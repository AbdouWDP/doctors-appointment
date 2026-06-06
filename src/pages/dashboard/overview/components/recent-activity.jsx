import {
  CalendarPlusIcon,
  UserPlusIcon,
  CheckCircleIcon,
  XCircleIcon,
  FileTextIcon,
} from "@phosphor-icons/react";

import { Panel } from "@/features/panel";
import { RECENT_ACTIVITY } from "@/pages/dashboard/data";

const ACTIVITY = {
  appointment: { icon: CalendarPlusIcon, tone: "bg-primary/10 text-primary" },
  patient: { icon: UserPlusIcon, tone: "bg-blue-100 text-blue-700" },
  confirmed: { icon: CheckCircleIcon, tone: "bg-emerald-100 text-emerald-700" },
  report: { icon: FileTextIcon, tone: "bg-violet-100 text-violet-700" },
  canceled: { icon: XCircleIcon, tone: "bg-rose-100 text-rose-600" },
};

function RecentActivity({ className }) {
  return (
    <Panel
      className={className}
      title="Recent Activity"
      description="Latest updates across your clinic"
    >
      <ul className="flex flex-col gap-4">
        {RECENT_ACTIVITY.map((item) => {
          const { icon: Icon, tone } = ACTIVITY[item.type] ?? ACTIVITY.report;
          return (
            <li key={item.id} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full ${tone}`}
              >
                <Icon weight="duotone" className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">
                  {item.title}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </div>
              <span className="shrink-0 text-xs whitespace-nowrap text-muted-foreground">
                {item.time}
              </span>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}

export { RecentActivity };
