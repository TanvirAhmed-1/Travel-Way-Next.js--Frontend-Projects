import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/types/tourPackage";

const LocationCard = ({ loc }: { loc: TourPackage }) => {
  return (
    <div className="card bg-white w-80 shadow-sm">
      {/* Image Section */}
      <figure className="relative h-48 p-2">
        <Image
          src={loc.tour_cover_photo}
          alt={loc.tour_title}
          className="object-cover rounded-xl"
          width={400}
          height={300}
        />
      </figure>

      {/* Content Section */}
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2">
          {loc.tour_location}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p className="text-gray-600">{loc.tour_title}</p>

        <span className="block font-medium">{loc.hotel_name}</span>
        <span className="block">Total Days: {loc.total_days}</span>
        <span className="block">{loc.price} BDT</span>
        <span className="block">{loc.ratings} ⭐</span>

        {/* Actions */}
        <div className="card-actions justify-between mt-4">
          <Link href={`/location/${loc._id}`}>
            <button className="p-4  text-base font-semibold bg-green-400 badge badge-outline">
              Watch
            </button>
          </Link>

          <button className=" p-4 text-base font-semibold bg-sky-400 badge badge-outline">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
