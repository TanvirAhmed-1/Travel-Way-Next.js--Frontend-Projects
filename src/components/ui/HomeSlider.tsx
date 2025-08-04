"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"; 

const HomeSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/image/img1.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/image/img2.jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/image/img3.jpg"
              alt="Slide 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/image/img4.jpg"
              alt="Slide 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/image/img5.webp"
              alt="Slide 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
