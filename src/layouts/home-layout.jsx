import { cn } from "@/lib/utils";
import { SiteNavbar } from "@/features/site-navbar";

function HomeLayout({ className, children, ...props }) {
  return (
    <div
      data-slot="home-layout"
      className={cn("min-h-svh bg-background text-foreground", className)}
      {...props}
    >
      <SiteNavbar />
      <main data-slot="home-layout-content">{children}</main>
    </div>
  );
}

export { HomeLayout };
