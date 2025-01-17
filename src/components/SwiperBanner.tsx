"use client";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const images = [
  "/banner/image1.png",
  "/banner/image2.png",
  "/banner/image3.png",
];

function SwiperBanner() {
  return (
    <div className="flex">
      <div className="w-0 flex-1">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperBanner;
