"use client";

import React from "react";
import LocationDetails from "@/components/ui/publice/LocationDetails";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  return (
    <div className="bg-gray-50 min-h-screen">
      <LocationDetails id={id} />
    </div>
  );
}
