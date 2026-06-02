import { Routes, Route, Navigate } from "react-router";
import HomePage from "@/pages/home";
import AuthPage from "@/pages/auth";
import DashboardOverviewPage from "@/pages/dashboard/overview";
import AppointmentsPage from "@/pages/dashboard/appointments";
import DoctorsPage from "@/pages/dashboard/doctors";
import PatientsPage from "@/pages/dashboard/patients";
import AnalyticsPage from "@/pages/dashboard/analytics";
import { LoginForm } from "./pages/auth/components/login-form";
import { RegisterForm } from "./pages/auth/components/register-form";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />}>
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
        <Route index element={<DashboardOverviewPage />} />
        <Route path="appointments" element={<AppointmentsPage />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="patients" element={<PatientsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
      </Route>
    </Routes>
  );
}
