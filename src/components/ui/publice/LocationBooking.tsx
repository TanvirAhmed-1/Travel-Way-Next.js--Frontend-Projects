"use client";

import useAxiosPublic from "@/lib/AxiosPublic";
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/useAuth";
import React from "react";
import useLocation from "@/hooks/useLocation";
import { TourPackage } from "@/types/TourPackage";
import FormProviderWrapper from "@/components/shared/FormProviderWrapper";
import { BookingType } from "@/types/BookingType";
import RHFInput from "@/components/shared/RHFInput";

const LocationBooking = ({ id }: { id: string }) => {
  const [location] = useLocation();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  // find this location
  const locationData = location?.find((loc: TourPackage) => loc._id === id);

  if (!locationData) {
    return (
      <div className="w-full flex justify-center items-center bg-gray-50 p-4 min-h-screen">
        <span className="loading loading-spinner loading-lg text-yellow-400"></span>
      </div>
    );
  }

  const handleBook = async (data: BookingType) => {
    const { _id, ...Data } = locationData;

    const bookingInfo = {
      ...Data,
      ...data,
      booking_states: "pending",
    };

    try {
      const res = await axiosPublic.post(`/book`, bookingInfo);
      if (res.data?.insertedId || res.data?.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Booking Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Book Desired Package
          </h2>
          <p className="text-gray-500 mt-2">
            Fill out the form below to confirm your booking
          </p>
        </div>

        {/* Form Card */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <FormProviderWrapper<BookingType> onSubmit={handleBook}>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col">
                <RHFInput
                  name="firstName"
                  label="First Name"
                  placeholder="Enter first name"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <RHFInput
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  required
                  label=" Last Name"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <RHFInput
                  name="phone"
                  label=" Phone Number"
                  placeholder="Your phone number"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  required
                  className="input input-bordered rounded-xl w-full bg-gray-100 cursor-not-allowed"
                />
              </div>
            </fieldset>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full btn bg-teal-400 hover:bg-teal-600 border-none text-black font-semibold py-3 rounded-xl shadow-md transition"
              >
                Confirm Booking
              </button>
            </div>
          </FormProviderWrapper>
        </section>
      </div>
    </div>
  );
};

export default LocationBooking;
