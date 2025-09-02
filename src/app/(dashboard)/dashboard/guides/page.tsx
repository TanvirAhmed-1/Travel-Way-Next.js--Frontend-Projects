import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides List | Travel Way",
  description:
    "Browse all available travel guides with details like experience, languages, and availability. Manage and update guides easily.",
  keywords: ["travel guides", "tour guide", "available guides", "book guides"],
};

import AddGuides from "@/components/ui/dashboard/admin/Guides/AddGuides";
import GuidesTable from "@/components/ui/dashboard/admin/Guides/GuidesTable";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-xl  font-bold text-blue-600 mb-4 md:mb-0">
          Manage All Guides
        </h1>
        <div>
          <AddGuides />
        </div>
      </div>

      {/* Guides Table */}
      <div className="bg-white rounded-2xl">
        <GuidesTable />
      </div>
    </div>
  );
};

export default page;
