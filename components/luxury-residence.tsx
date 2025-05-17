import Image from "next/image";
import LuxuryImg from "@/public/images/property/luxury.jpg";
import WhatsappImg from "@/public/images/property/whatsapp.png";

export default function LuxuryResidence() {
  return (
    <section id="luxury-residences" className="bg-[#371807]">
      <div className="grid grid-cols-12 gap-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 text-center">
        <div className="col-span-6">
          <Image
            className="relative shadow-2xl "
            style={{ boxShadow: "0 4px 20px #fff" }}
            src={LuxuryImg}
            alt="corporate_img"
          />
        </div>
        <div className="col-span-6">
          <div className="grid text-white gap-5">
            <span
              style={{ fontFamily: "ACaslonPro-Regular" }}
              className="text-orange-500 text-5xl font-medium"
            >
              LUXURY RESIDENCE
            </span>
            <p className="text-xl font-medium">
              Pavilion Square’s impressive residential tower evokes a sense of
              wonder and prominence. The residence features 960 units, from 504
              sq.ft. studios to 1,272 sq.ft. suites, catering to various needs.
            </p>

            <a
              className="flex gap-5 btn w-full bg-green-600 text-gray-800 shadow-sm hover:bg-green-100 sm:ml-4 sm:w-auto mt-10"
              href="#0"
            >
              <Image src={WhatsappImg} width={35} alt="whatsapp" />
              <span className="text-xl font-semibold text-white">
                LATEST PRICING
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
