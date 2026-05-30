import { DashboardLayout } from "@/layouts/dashboard-layout";
import { RecommendedCategories } from "@/pages/admin/components/recommended-categories";
import { TaskToolbar } from "@/pages/admin/components/task-toolbar";
import { TaskList } from "@/pages/admin/components/task-list";

export default function AdminPage() {
  return (
    <DashboardLayout title="My Task">
      <div className="mx-auto flex  flex-col gap-6">
        <RecommendedCategories />
        <TaskToolbar />
        <TaskList />
      </div>
    </DashboardLayout>
  );
}
