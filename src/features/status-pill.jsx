import { cn } from "@/lib/utils";

const TONES = {
  confirmed: "bg-emerald-100 text-emerald-700",
  pending: "bg-orange-100 text-orange-700",
  canceled: "bg-rose-100 text-rose-600",
  neutral: "bg-muted text-muted-foreground",
  primary: "bg-primary/10 text-primary",
  amber: "bg-amber-100 text-amber-700",
  pink: "bg-pink-100 text-pink-600",
  violet: "bg-violet-100 text-violet-700",
  blue: "bg-blue-100 text-blue-700",
  teal: "bg-teal-100 text-teal-700",
};

function StatusPill({
  className,
  status = "pending",
  tone = "neutral",
  dot = false,
  ...props
}) {
  return (
    <span
      data-slot="status-pill"
      data-tone={tone}
      className={cn(
        "inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-medium whitespace-nowrap",
        TONES[status],
        className,
      )}
      {...props}
    >
      {dot ? (
        <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      ) : null}
      {props.children}
    </span>
  );
}

export { StatusPill };
