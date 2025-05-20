"use client";
import React, { useState } from "react";
import CorporateImg from "@/public/images/property/corporate.jpg";
import LuxuryImg from "@/public/images/property/corp2.jpg";
import { OfficeLayoutTabs } from "./enum";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "./common/Image";
import { openWhatsAppMessage } from "./common/manager";
import { Button } from "./common/Button";

export default function CorporateSuites() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="corporate-suites">
      <div className="bg-[#371807] ">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 text-center">
          <div className="grid grid-cols-12 gap-5">
            <div
              className="col-span-12 md:col-span-6"
              data-aos="zoom-in"
              data-aos-delay={120}
            >
              <Image
                className="relative shadow-2xl "
                style={{ boxShadow: "0 4px 20px #fff" }}
                src={CorporateImg}
                height={500}
                alt="corporate_img"
              />
            </div>
            <div
              className="col-span-12 md:col-span-6 flex items-center justify-center"
              data-aos="fade-left"
              data-aos-delay={300}
            >
              <div className="grid text-white gap-5">
                <span
                  style={{ fontFamily: "ACaslonPro-Regular" }}
                  className="text-orange-200 text-5xl font-medium"
                >
                  CORPORATE SUITES
                </span>
                <p className="text-xl font-medium">
                  Pavilion Square’s office tower combines luxury with
                  functionality, empowering businesses to thrive in Kuala
                  Lumpur’s vibrant district. The 25-story tower has 106 units,
                  with offices ranging from 1,093 sq.ft. to 9,769 sq.ft.
                </p>

                <div className="flex justify-center">
                  <Button
                    label="LATEST PRICING"
                    onClickFunction={openWhatsAppMessage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto pb-10 bg-[#caa777]">
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
            EXCEPTIONAL FEATURES AT A GLANCE
          </p>
          <p className="tracking-wide text-2xl text-amber-950">
            A Grand Corporate Arrival
          </p>
          <p className="text-justify font-medium text-white">
            Easily access lifestyle amenities with Pavilion Square’s direct link
            bridge to Pavilion Kuala Lumpur. The lift destination control system
            ensures a secure and efficient arrival for your business needs.
          </p>
          <Button label="FIND OUT MORE" onClickFunction={openWhatsAppMessage} />
        </div>
      </div>

      {/* RESIDENTIAL Layout */}
      <div className="mx-auto px-5 md:px-20 py-10 bg-[#371809] flex flex-col gap-8">
        <div
          className="text-5xl md:text-6xl text-center text-[#caa777] tracking-wide"
          style={{ fontFamily: "ACaslonPro-Regular" }}
        >
          OFFICE LAYOUT
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 bg-orange-200 rounded-2xl py-2 px-5 text-center">
          {OfficeLayoutTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 text-center px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer
              ${
                activeTab === index
                  ? "bg-white shadow text-black"
                  : " hover:text-black text-black hover:bg-white hover:opacity-50"
              }`}
            >
              {tab.layout}
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
            >
              {OfficeLayoutTabs[activeTab].image.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image src={image} alt={`layout ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            label="ASK FOR LATEST PRICING"
            onClickFunction={openWhatsAppMessage}
          />
        </div>
      </div>
    </section>
  );
}
