import { cn } from "@/lib/utils";

function Panel({ className, title, description, action, children, ...props }) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "flex flex-col gap-5 rounded-3xl border border-border bg-card p-6",
        className,
      )}
      {...props}
    >
      {title || action ? (
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            {title ? (
              <h2 className="font-heading text-base font-semibold text-foreground">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
            ) : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export { Panel };
