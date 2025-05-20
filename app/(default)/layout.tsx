"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showButton, setShowButton] = useState(false);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });

    // Scroll event listener to toggle scroll-to-top button visibility
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-black hover:border-1 hover:border-blue-600 hover:bg-blue-400 hover:text-black shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
