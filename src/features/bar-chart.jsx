import { cn } from "@/lib/utils";

function BarChart({ className, data = [], max, ...props }) {
  const peak = max ?? Math.max(...data.map((d) => d.value), 1);

  return (
    <div
      data-slot="bar-chart"
      className={cn("flex items-end gap-3", className)}
      {...props}
    >
      {data.map((item) => {
        const height = Math.round((item.value / peak) * 100);
        return (
          <div
            key={item.label}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div className="flex h-40 w-full items-end justify-center">
              <div
                className={cn(
                  "w-full max-w-9 rounded-t-lg bg-primary/15",
                  item.highlight && "bg-primary",
                )}
                style={{ height: `${Math.max(height, 4)}%` }}
                title={`${item.label}: ${item.value}`}
              />
            </div>
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export { BarChart };
