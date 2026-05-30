import { cn } from "@/lib/utils";

function CategoryTile({ className, icon: Icon, label, iconClassName, ...props }) {
  return (
    <a
      href="#"
      data-slot="category-tile"
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 transition-colors hover:bg-muted",
        className
      )}
      {...props}
    >
      {Icon ? (
        <span aria-hidden="true" className={cn("inline-flex size-6 items-center justify-center", iconClassName)}>
          <Icon weight="duotone" className="size-6" />
        </span>
      ) : null}
      <span className="text-sm font-medium text-foreground">{label}</span>
    </a>
  );
}

export { CategoryTile };
