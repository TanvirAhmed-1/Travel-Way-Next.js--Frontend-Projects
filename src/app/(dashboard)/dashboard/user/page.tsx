import AllUsersTable from "@/components/ui/dashboard/admin/users/AllUsersTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User List | Travel Way",
  description:
    "Browse all available travel guides with details like experience, languages, and availability. Manage and update guides easily.",
  keywords: ["travel guides", "tour guide", "available guides", "book guides"],
};

const page = () => {
  return (
    <div>
      <div>
        <AllUsersTable />
      </div>
    </div>
  );
};

export default page;
