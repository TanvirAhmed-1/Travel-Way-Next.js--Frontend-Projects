import Image from "next/image";
import { TourPackage } from "@/types/tourPackage";

const LocationCard = ({ loc }: { loc: TourPackage }) => {
  return (
    <div className="">
      <div className="card bg-white w-80  shadow-sm">
        <figure className="relative h-48 P-2">
          <Image
            src={loc.tour_cover_photo}
            alt={loc.tour_title}
            //fill // ✅ Full width-height fill (parent div needs relative)
            className="object-cover p-2 rounded-xl"
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={400}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {loc.tour_location}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-gray-600">{loc.tour_title}</p>
           <samp>{loc.hotel_name}</samp>

            <samp>Total Day:{loc.total_days}</samp>
          <samp>{loc.price} BDT</samp>
          <samp>{loc.ratings} ⭐</samp>
          <div className="card-actions justify-between">
            <div className="py-2 px-4 bg-green-400 badge badge-outline">
              Witch
            </div>
            <div className="py-2 px-4 bg-sky-400 badge badge-outline">
              book Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
