import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/property/logo_big.png";
import { FooterList } from "../enum";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl py-10 sm:px-6  bg-[#371807]">
        <div className="grid grid-cols-12 gap-10 sm:px-6 text-center">
          <div className="col-span-3">
            <Image src={Logo} alt="footer-log" width={120} />
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-12 gap-10 ">
              {FooterList.map((footer, index) => (
                <div key={index} className="space-y-2 col-span-6">
                  <h3
                    className="text-lg font-medium text-orange-200 tracking-wide"
                    style={{ fontFamily: "ACaslonPro-Regular" }}
                  >
                    {footer.name}
                  </h3>
                  <ul className="space-y-2 text-sm text-white">
                    {footer.items.map((child, index) => (
                      <li key={index}>
                        <Link
                          className="font-semibold transition hover:text-lg"
                          href={child.id}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="mx-auto max-w-6xl py-4 bg-[#1c0a00]">
        <div className="flex flex-col gap-3 text-white items-center justify-center font-semibold">
          <span>@2025 All Rights Reserved.</span>
          <span>
            Appointed Zeon Properties International for Pavilion Square by
            Pavilion Group
          </span>
        </div>
      </div>
    </footer>
  );
}
