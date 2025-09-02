import DashboardLayout from "@/layout/DashboardLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardLayout> {children}</DashboardLayout>
    </div>
  );
};

export default layout;
