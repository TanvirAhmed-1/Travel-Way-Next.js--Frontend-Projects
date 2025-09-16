"use client";

import React from "react";
import LocationBooking from "@/components/ui/publice/LocationBooking";

export default function BookingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = React.use(params);

  return (
    <div>
      <LocationBooking id={id} />
    </div>
  );
}
