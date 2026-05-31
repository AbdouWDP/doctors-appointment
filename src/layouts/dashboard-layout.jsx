import { cn } from "@/lib/utils";
import { AppSidebar } from "@/features/app-sidebar";
import { DashboardTopbar } from "@/features/dashboard-topbar";

function DashboardLayout({ className, title, subtitle, children, ...props }) {
  return (
    <div
      data-slot="dashboard-layout"
      className={cn("flex min-h-svh bg-muted/40 text-foreground", className)}
      {...props}
    >
      <AppSidebar className="sticky top-0 hidden h-svh lg:flex" />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar title={title} subtitle={subtitle} />
        <main data-slot="dashboard-content" className="flex-1 px-8 pb-10">
          {children}
        </main>
      </div>
    </div>
  );
}

export { DashboardLayout };
