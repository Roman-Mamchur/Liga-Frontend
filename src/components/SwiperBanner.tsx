"use client";
import "flickity/css/flickity.css";
import Image from "next/image";
import Flickity from "react-flickity-component";

const flickityOptions = {
  autoPlay: 3000,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: true,
  contain: false,
  cellAlign: "left",
};

const images = [
  "/banner/image1.png",
  "/banner/image2.png",
  "/banner/image3.png",
];

function SwiperBanner() {
  return (
    <Flickity
      className="swiper-banner"
      elementType="div"
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          width={0}
          height={0}
          sizes="100vw"
          alt={`Banner ${index + 1}`}
          className="h-auto w-full object-contain"
          priority={true}
        />
      ))}
    </Flickity>
  );
}

export default SwiperBanner;
