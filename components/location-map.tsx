"use client"; // required for client-side hooks if using Next.js App Router

import { useEffect, useRef, useState } from "react";
import Map from "@/public/images/property/img_map1.jpg";
import Image from "./common/Image";
import { openWhatsAppMessage } from "./common/manager";

export default function LocationMap() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Run animation once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="location" className="bg-[#ffe0cb]" ref={sectionRef}>
      <div className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6 text-center">
        <div className="text-center">
          <p
            className={`
              text-[#371807]  text-4xl transition-all duration-1000 ease-out
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
            `}
            style={{ fontFamily: "ACaslonPro-Regular" }}
          >
            LOCATION OF PAVILION SQUARE
          </p>

          <p
            className={`
              text-base text-black pb-10 transition-all duration-1000 ease-out delay-100
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
            `}
          >
            Pavilion Square is located in the heart of Kuala Lumpur’s Golden
            Triangle, surrounded by iconic landmarks like the Petronas Twin
            Towers, Merdeka 118, and TRX. With a dedicated link bridge to
            Pavilion Kuala Lumpur, it ensures seamless access to everything the
            city has to offer.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            className={`
              relative transition-all duration-1000 ease-out delay-200
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
            `}
            src={Map}
            width={950}
            height={950}
            alt="pavilion square location map"
          />
        </div>

        <button
          onClick={openWhatsAppMessage}
          className="btn w-full bg-green-400 text-gray-800 shadow-sm hover:bg-green-100 sm:ml-4 sm:w-auto mt-10"
        >
          VISIT US
        </button>
      </div>
    </section>
  );
}
