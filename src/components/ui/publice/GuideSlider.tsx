"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useGuideHook from "@/hooks/useGuides";

export type IGuide = {
  _id: string;
  name: string;
  image: string;
  phone: string;
  email: string;
  address: string;
  rating: number;
  isAvailable: boolean | string;
  experience: number;
  languages: string;
  availabilityType: "Full-time" | "Part-time" | string;
};

const GuideSlider = () => {
  const [guides] = useGuideHook();

  return (
    <div className="py-1 px-4 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-lg text-center pb-3 lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
        Our Professional Guides
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {guides?.map((guide: IGuide) => (
          <SwiperSlide key={guide._id}>
            <div className="group bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-blue-100">
              {/* Profile Image */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name */}
              <h3 className="mt-5 text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                {guide.name}
              </h3>

              {/* Contact Info */}
              <p className="text-sm mt-3 text-gray-600">📧 {guide.email}</p>
              <p className="text-sm text-gray-600">📞 {guide.phone}</p>

              {/* Extra Info */}
              <div className="text-center text-gray-600 text-sm mt-3">
                <p className="italic">🗣 {guide.languages}</p>
                <p className="italic">🎯 {guide.experience} Years Experience</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center text-sm mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    guide.isAvailable === "true" || guide.isAvailable === true
                      ? "bg-green-500"
                      : "bg-red-400"
                  }`}
                >
                  {guide.isAvailable === "true" || guide.isAvailable === true
                    ? "Available"
                    : "Unavailable"}
                </span>

                <span className="bg-teal-600 text-white px-3 py-1 rounded-full">
                  ⭐ {guide.rating}
                </span>

                <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                  {guide.availabilityType}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GuideSlider;
