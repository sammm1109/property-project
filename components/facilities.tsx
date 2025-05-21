"use client";
import React, { useState } from "react";
import LuxuryImg from "@/public/images/property/facilities2.jpg";
import PdfImg from "@/public/images/property/pdf.png";
import { FacilitiesTabs, ResidentialLayoutTabs } from "./enum";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { openWhatsAppMessage } from "./common/manager";
import { Button } from "./common/Button";
import Image from "next/image";

export default function Facilities() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeResidentialTab, setActiveResidentialTab] = useState(0);

  return (
    <section>
      <div className="mx-auto pb-10 bg-blue-200">
        <Image
          className="relative w-full"
          src={LuxuryImg}
          alt="corporate_img"
        />

        <div className="flex flex-col gap-4 text-lg m-auto py-5 px-5 md:px-20">
          <p
            className="text-5xl w-[90%] tracking-wide text-amber-950"
            style={{ fontFamily: "ACaslonPro-Regular" }}
          >
            OVER 70,000 SQFT OF LIFESTYLE FACILITIES
          </p>
          <p className="tracking-wide text-2xl text-amber-950">
            Unwind and play in exceptional spaces
          </p>
          <p className="text-justify  font-medium">
            Relax and enjoy the longest rooftop infinity pool at 118 meters,
            along with the 15,000 sq. ft. Sky Sports Zone at Pavilion Square –
            perfect for unwinding and having fun. On level 12, the function
            room, entertainment room, and BBQ deck are great for family and
            friend gatherings.
          </p>
          <Button label="FIND OUT MORE" onClickFunction={openWhatsAppMessage} />
        </div>
      </div>
      {/* Facilities Plan */}
      <div className="mx-auto px-5 md:px-20 py-10 bg-[#371809] flex flex-col gap-8">
        <div
          className="text-5xl md:text-6xl text-center text-[#ff6602] tracking-wide"
          style={{ fontFamily: "ACaslonPro-Regular" }}
        >
          FACILITIES PLAN
        </div>
        {/* <div className="flex justify-between bg-[#a4725ab3] rounded-2xl py-2 px-1 md:px-5"> */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 bg-[#a4725ab3] rounded-2xl py-2 px-1 md:px-5">
          {FacilitiesTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 text-center px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer
              ${
                activeTab === index
                  ? "bg-white shadow text-black"
                  : " hover:text-black text-white hover:bg-white hover:opacity-50"
              }`}
            >
              Level {tab.level}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 rounded-xl shadow">
          <Image
            src={FacilitiesTabs[activeTab].image}
            alt={String(FacilitiesTabs[activeTab].level)}
          />
          <div
            className="text-center pb-5 text-lg text-black"
            style={{ fontFamily: "ACaslonPro-Regular" }}
          >
            {FacilitiesTabs[activeTab].description}
          </div>
          {/* description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 text-center">
            {FacilitiesTabs[activeTab].item.map((item, index) => (
              <span key={index} className="flex gap-3 items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 text-white font-bold">
                  {index + 1}
                </span>
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            label="ASK FOR LATEST PRICING"
            onClickFunction={openWhatsAppMessage}
            alt="whatsapp"
            src={PdfImg}
          />
        </div>
      </div>
      {/* RESIDENTIAL Layout */}
      <div className="mx-auto px-5 md:px-20 py-10 bg-[#ffe0cb] flex flex-col gap-8">
        <div
          className="text-5xl md:text-6xl text-center text-[#371809] tracking-wide"
          style={{ fontFamily: "ACaslonPro-Regular" }}
        >
          RESIDENTIAL LAYOUT
        </div>
        <div className="flex justify-between bg-[#371809] rounded-2xl py-2 px-1 md:px-5">
          {ResidentialLayoutTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveResidentialTab(index)}
              className={`flex-1 text-center px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer
              ${
                activeResidentialTab === index
                  ? "bg-orange-200 shadow text-black"
                  : " hover:text-black text-white hover:bg-white hover:opacity-50"
              }`}
            >
              Type {tab.layout}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              loop={true}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }} // Enable pagination dots
              onSwiper={(swiper) => console.log(swiper)} // Debugging swiper instance
              // onSlideChange={() => console.log("slide change")} // Slide change event
              className="text-center"
              autoHeight={true}
            >
              {ResidentialLayoutTabs[activeResidentialTab].image.map(
                (image, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center w-full">
                      <Image
                        src={image}
                        className="object-cover"
                        alt={`layout ${index}`}
                      />
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
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
