import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Location | Travel Way",
  description:
    "Browse all available travel guides with details like experience, languages, and availability. Manage and update guides easily.",
  keywords: ["travel guides", "tour guide", "available guides", "book guides"],
};

import { AddLocationModal } from "@/components/ui/dashboard/admin/all-location/AddLocationModal";
import AllLocationTable from "@/components/ui/dashboard/admin/all-location/AllLocationTable";

const AllPackage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-start pb-10">All Package</h1>
        <AddLocationModal />
      </div>

      {/* Table section */}

      <AllLocationTable />
    </div>
  );
};

export default AllPackage;
