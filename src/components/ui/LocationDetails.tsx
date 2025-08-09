"use client";

import useLocation from "@/hooks/useLocation";
import { TourPackage } from "@/types/tourPackage";
import Image from "next/image";
import Link from "next/link";

const LocationDetails = ({ id }: { id: string }) => {
  const [location] = useLocation();
  console.log(id, location);
  const idData = location?.find((loc: TourPackage) => loc._id === id);
  console.log(idData);
  if (!idData) {
    return (
      <div className="w-full flex justify-center items-center bg-gray-100 p-4 min-h-screen">Loading...</div>
    );
  }

  const {
    tour_title,
    tour_location,
    bus_name,
    bus_contact,
    bus_photo,
    tour_cover_photo,
    hotel_image,
    hotel_description,
    hotel_name,
    total_days,
    tour_manager_contact,
    tour_manager,
    ratings,
    things_to_carry,
    description,
    places,
    guide_contact,
    guide_name,
    price,
    _id,
  } = idData;
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden">
        <Image
          src={tour_cover_photo}
          alt={tour_title}
          width={1000}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            {tour_title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-8 mt-10">
        {/* Left: Gallery and Quick Info */}
        <div className="space-y-6 lg:col-span-1">
          <Image
            width={500}
            height={300}
            src={hotel_image}
            alt={hotel_name}
            className="rounded-xl w-full shadow-md"
          />
          <img
            src={bus_photo}
            alt={bus_name}
            className="rounded-xl w-full shadow-md"
          />
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-lg">
              <span className="font-bold">Tour Location:</span> {tour_location}
            </p>
            <p className="text-lg">
              <span className="font-bold">Total Days:</span> {total_days}
            </p>
            <p className="text-lg">
              <span className="font-bold">Ratings:</span> {ratings}
            </p>
            <p className="text-lg font-bold text-green-600">Price: {price} ৳</p>
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-2xl font-bold mb-2 text-blue-800">
              Tour Details
            </h2>
            <p className="text-gray-700">{description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Hotel Info
              </h3>
              <p>
                <span className="font-semibold">Name:</span> {hotel_name}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {hotel_description}
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Bus Info</h3>
              <p>
                <span className="font-semibold">Name:</span> {bus_name}
              </p>
              <p>
                <span className="font-semibold">Contact:</span> {bus_contact}
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Tour Manager
              </h3>
              <p>
                <span className="font-semibold">Name:</span> {tour_manager}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {tour_manager_contact}
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Tour Guide
              </h3>
              <p>
                <span className="font-semibold">Name:</span> {guide_name}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {guide_contact}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Places to Visit
            </h3>
            <p>{places}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              What to Carry
            </h3>
            <p>{things_to_carry}</p>
          </div>

          <div className="text-center mt-10">
            <Link
              href={`/book/${_id}`}
              className=" btn border-none px-4 py-3 bg-sky-400 hover:bg-sky-600 text-black font-medium text-lg rounded-xl"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
