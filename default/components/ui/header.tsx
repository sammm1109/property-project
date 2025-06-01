import Link from "next/link";
import Logo from "./logo";
import Image from "../common/Image";
import WhatsappImg from "@/public/images/property/whatsapp.png";
import { openWhatsAppMessage } from "../common/manager";
import { Button } from "../common/Button";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Button
                label="Contact Us"
                onClickFunction={openWhatsAppMessage}
                src={WhatsappImg}
                alt="whatsapp"
                imageWidth={20}
                customBtnStyle="btn-sm"
                customLabelStyle="text-black text-normal"
              />
              {/* <button
                onClick={openWhatsAppMessage}
                className="btn-sm bg-green-400 text-black shadow-sm hover:bg-gray-900"
              >
                <Image
                  src={WhatsappImg}
                  width={20}
                  alt="whatsapp"
                  className="mr-1"
                />
                Contact Us
              </button> */}
            </li>
            <li>
              <Link
                href="#contact-us"
                className="btn-sm bg-[#c75513] text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Register
                <span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5 group-hover:text-[#c75513]">
                  -&gt;
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
