"use client";
import HeaderImg from "@/public/images/property/header.jpg";
import Logo from "@/public/images/property/logo_big.png";
import Image from "./common/Image";
import { openWhatsAppMessage } from "./common/manager";

export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-no-repeat bg-center bg-cover h-lvh"
      style={{
        backgroundImage: `url(${HeaderImg.src})`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <div className="pb-12 pt-[32%] md:pb-20 md:pt-[25%]">
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
          {/* Buttons */}
          <div className="pb-12 text-center pt-39 md:pb-16">
            <div className="mx-auto max-w-3xl">
              <div className="relative before:absolute before:inset-0 ">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-[#c75513] bg-[bottom] text-white shadow-sm hover:bg-amber-50 hover:text-[#c75513] hover:border-[#c75513] hover:border-1 sm:mb-0 sm:w-auto"
                    href="#"
                  >
                    <span className="relative inline-flex items-center">
                      SCHEDULE FOR VIEWING{" "}
                      <span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5 group-hover:text-[#c75513]">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <button
                    onClick={openWhatsAppMessage}
                    className="btn w-full bg-green-400 text-gray-800 shadow-sm hover:bg-green-100 sm:ml-4 sm:w-auto"
                  >
                    ASK FOR EARLY BIRD PROMO NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
