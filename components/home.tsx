"use client";
import HeaderImg from "@/public/images/property/header.jpg";
import Logo from "@/public/images/property/logo_big.png";
import Image from "./common/Image";
import { openWhatsAppMessage } from "./common/manager";

export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-no-repeat bg-center bg-cover h-[70vh]"
      style={{
        backgroundImage: `url(${HeaderImg.src})`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <div className="pb-12 pt-[30%] md:pb-20 md:pt-[15%]">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              className="relative"
              src={Logo}
              width={250}
              height={250}
              alt="Logo_big"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#ffe0cb] to-transparent z-0 pointer-events-none"></div>
      </div>
    </section>
  );
}
