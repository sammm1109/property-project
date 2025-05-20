import Link from "next/link";
import logoImg from "@/public/images/property/logo_big.png";
import Image from "../common/Image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <div className="relative bg-gray-200 py-2 px-4 rounded-4xl">
        <Image
          className="relative"
          src={logoImg}
          width={70}
          height={20}
          alt="Logo_big"
        />
      </div>
    </Link>
  );
}
