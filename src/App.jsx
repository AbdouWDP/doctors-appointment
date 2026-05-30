import { Routes, Route, Navigate } from "react-router";
import HomePage from "@/pages/home";
import AuthPage from "@/pages/auth";
import AdminPage from "@/pages/admin";
import { LoginForm } from "./pages/auth/components/login-form";
import { RegisterForm } from "./pages/auth/components/register-form";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />}>
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
