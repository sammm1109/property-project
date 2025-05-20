"use client";
import LuxuryImg from "@/public/images/property/luxury.jpg";
import WhatsappImg from "@/public/images/property/whatsapp.png";
import Image from "./common/Image";
import { openWhatsAppMessage } from "./common/manager";
import { Button } from "./common/Button";

export default function LuxuryResidence() {
  return (
    <section id="luxury-residences">
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
                src={LuxuryImg}
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
                  className="text-orange-500 text-5xl font-medium"
                >
                  LUXURY RESIDENCE
                </span>
                <p className="text-xl font-medium">
                  Pavilion Square’s impressive residential tower evokes a sense
                  of wonder and prominence. The residence features 960 units,
                  from 504 sq.ft. studios to 1,272 sq.ft. suites, catering to
                  various needs.
                </p>

                <div className="flex justify-center">
                  <Button
                    label="LATEST PRICING"
                    onClickFunction={openWhatsAppMessage}
                    alt="whatsapp"
                    src={WhatsappImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
