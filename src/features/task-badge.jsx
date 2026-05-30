import { cn } from "@/lib/utils";

const TONES = {
  neutral: "bg-muted text-muted-foreground",
  amber: "bg-amber-100 text-amber-700",
  orange: "bg-orange-100 text-orange-700",
  rose: "bg-rose-100 text-rose-600",
  pink: "bg-pink-100 text-pink-600",
  violet: "bg-violet-100 text-violet-700",
  blue: "bg-blue-100 text-blue-700",
  teal: "bg-teal-100 text-teal-700",
};

function TaskBadge({ className, tone = "neutral", ...props }) {
  return (
    <span
      data-slot="task-badge"
      data-tone={tone}
      className={cn(
        "inline-flex h-6 w-fit shrink-0 items-center justify-center rounded-full px-3 text-xs font-medium whitespace-nowrap",
        TONES[tone],
        className
      )}
      {...props}
    />
  );
}

export { TaskBadge };
