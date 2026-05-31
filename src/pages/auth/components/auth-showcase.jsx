import { SparkleIcon, TrendUpIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function AuthShowcase({ className, ...props }) {
  return (
    <div
      data-slot="auth-showcase"
      className={cn(
        "relative flex size-full items-center justify-center",
        className,
      )}
      {...props}
    >
      <Card className="w-md translate-x-6 rounded-xl relative overflow-visible">
        <span
          aria-hidden="true"
          className="absolute right-0 translate-x-1/2 -top-8 inline-flex size-16 items-center justify-center rounded-2xl bg-card text-foreground shadow-lg ring-1 ring-foreground/10"
        >
          <SparkleIcon weight="fill" className="size-8" />
        </span>
        <div className="flex flex-col gap-4 px-5">
          <div className="flex items-center justify-between">
            <span className="font-heading text-sm font-semibold">
              Dashboard
            </span>
            <Badge className="rounded-md bg-primary text-white">Export</Badge>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <StatTile label="Total sales" value="$18.200" trend="10.2%" up />
            <StatTile
              label="Operating expenses"
              value="$18.200"
              trend="5.75%"
            />
            <StatTile label="Gross profit" value="$18.200" trend="8.55%" up />
          </div>
          <div className="flex h-32 items-end gap-2 rounded-lg bg-muted/60 p-3">
            {[40, 65, 50, 80, 100, 70, 55, 75, 60].map((h, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="flex-1 rounded-sm bg-primary/40 data-[peak=true]:bg-primary"
                data-peak={h === 100}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <Card
          className="absolute -bottom-11 -left-1/2 translate-x-1/2 w-56 rounded-xl shadow-xl"
          size="sm"
        >
          <div className="flex flex-col gap-2 px-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Total sales</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-heading text-xl font-bold">$18.200</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <TrendUpIcon className="size-3" />
                10.2%
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground">
              vs last month
            </span>
          </div>
        </Card>
      </Card>
    </div>
  );
}

function StatTile({ label, value, trend, up = false }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg bg-muted/60 p-2.5">
      <span className="truncate text-[10px] text-muted-foreground">
        {label}
      </span>
      <span className="font-heading text-sm font-bold">{value}</span>
      <span
        className={cn(
          "text-[10px] font-medium",
          up ? "text-emerald-600" : "text-destructive",
        )}
      >
        {up ? "↑" : "↓"} {trend}
      </span>
    </div>
  );
}

export { AuthShowcase };
