import { AuthLayout } from "@/layouts/auth-layout";
import { AuthShowcase } from "@/pages/auth/components/auth-showcase";
import { Outlet } from "react-router";

export default function AuthPage() {
  return (
    <AuthLayout aside={<AuthShowcase />}>
      <Outlet />
    </AuthLayout>
  );
}
