"use client";
import React, { useRef, useState } from "react";
import { PhotoGalleryTabs } from "./enum";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import Image from "./common/Image";
import { openWhatsAppMessage } from "./common/manager";
import { Button } from "./common/Button";

export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const goToSlide = (index: number) => {
    swiperRef.current?.slideToLoop(index); // Loop-safe slide navigation
  };
  return (
    <section id="gallery">
      {/* Facilities Plan */}
      <div className="mx-auto px-5 md:px-20 py-10 bg-[#ffe0cb] flex flex-col gap-8">
        <div
          className="text-5xl md:text-6xl text-center text-[#371809] tracking-wide"
          style={{ fontFamily: "ACaslonPro-Regular" }}
          data-aos="fade-down"
          data-aos-delay={100}
        >
          PHOTO GALLERY
        </div>
        <div className="flex flex-col sm:flex-row justify-between rounded-2xl py-2 px-4 sm:px-5 gap-4 sm:gap-6">
          {PhotoGalleryTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 text-center p-4 rounded-full text-xl border-2 border-[#371809] font-medium transition-all duration-300 cursor-pointer
              ${
                activeTab === index
                  ? "bg-[#371809] shadow text-white"
                  : " hover:text-black text-black hover:bg-white hover:opacity-50"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="">
          <div className="flex flex-col gap-2 w-full">
            <div className="bg-white rounded-xl shadow">
              {/* Main Swiper */}
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                loop={true}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                // onSlideChange={() => console.log("slide change")}
                className="text-center h-100"
              >
                {PhotoGalleryTabs[activeTab].image.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`layout ${index}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Pagination (Thumbnails) */}
            <div className="custom-pagination hidden md:flex justify-center mt-2 gap-2">
              {PhotoGalleryTabs[activeTab].image.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="thumbnail w-45 h-20 object-cover cursor-pointer border border-transparent hover:border-blue-500"
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            label="WHATSAPP FOR LATEST PRICING"
            onClickFunction={openWhatsAppMessage}
          />
        </div>
      </div>
    </section>
  );
}
