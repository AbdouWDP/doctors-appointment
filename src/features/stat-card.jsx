import { TrendUpIcon, TrendDownIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

function StatCard({
  className,
  label,
  value,
  delta,
  trend = "up",
  icon: Icon,
  iconClassName,
  ...props
}) {
  const TrendIcon = trend === "down" ? TrendDownIcon : TrendUpIcon;

  return (
    <div
      data-slot="stat-card"
      className={cn(
        "flex flex-col gap-4 rounded-3xl border border-border bg-card p-5",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        {Icon ? (
          <span
            aria-hidden="true"
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary",
              iconClassName,
            )}
          >
            <Icon weight="duotone" className="size-5" />
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="font-heading text-2xl font-bold tracking-tight text-foreground">
          {value}
        </span>
        {delta ? (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <span
              className={cn(
                "inline-flex items-center gap-0.5 font-medium",
                trend === "down" ? "text-rose-500" : "text-emerald-600",
              )}
            >
              <TrendIcon className="size-3.5" />
              {delta}
            </span>
            vs last month
          </span>
        ) : null}
      </div>
    </div>
  );
}

export { StatCard };
