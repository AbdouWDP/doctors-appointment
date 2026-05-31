import { cn } from "@/lib/utils";

function AuthLayout({ className, children, aside, ...props }) {
  return (
    <div
      data-slot="auth-layout"
      className={cn("grid min-h-svh bg-background lg:grid-cols-2", className)}
      {...props}
    >
      <main
        data-slot="auth-layout-content"
        className="flex items-center justify-center px-6 py-12"
      >
        <div className="w-full max-w-md">{children}</div>
      </main>
      <aside
        data-slot="auth-layout-aside"
        aria-hidden="true"
        className="relative hidden overflow-hidden bg-sidebar p-10 lg:block"
      >
        {aside}
      </aside>
    </div>
  );
}

export { AuthLayout };
