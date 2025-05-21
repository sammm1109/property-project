"use client";
import Map from "@/public/images/property/img_map1.jpg";
import { openWhatsAppMessage } from "./common/manager";
import { Button } from "./common/Button";
import Image from "next/image";

export default function LocationMap() {
  return (
    <section id="location" className="bg-[#ffe0cb]">
      <div className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6 text-center">
        <div className="text-center">
          <p
            className="text-[#371807] text-4xl"
            style={{ fontFamily: "ACaslonPro-Regular" }}
            data-aos="fade-left"
            data-aos-delay={300}
          >
            LOCATION OF PAVILION SQUARE
          </p>

          <p
            className="text-base text-black pb-10"
            data-aos="fade-left"
            data-aos-delay={500}
          >
            Pavilion Square is located in the heart of Kuala Lumpur’s Golden
            Triangle, surrounded by iconic landmarks like the Petronas Twin
            Towers, Merdeka 118, and TRX. With a dedicated link bridge to
            Pavilion Kuala Lumpur, it ensures seamless access to everything the
            city has to offer.
          </p>
        </div>

        <div className="relative flex justify-center">
          <Image
            className="object-cover"
            src={Map}
            width={950}
            height={950}
            alt="pavilion square location map"
            data-aos="zoom-in"
            data-aos-delay={450}
          />
        </div>
        <div className="flex justify-center pt-5">
          <Button label="VISIT US" onClickFunction={openWhatsAppMessage} />
        </div>
      </div>
    </section>
  );
}
