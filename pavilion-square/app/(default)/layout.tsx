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
      once: false,
      // disable: "phone",
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
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      // this.alert("right click disabled");
    });
    document.addEventListener("keydown", function (e) {
      if (
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J
        (e.ctrlKey && e.key === "J") || // Ctrl+U
        e.key === "F12" // F12
      ) {
        e.preventDefault();
        alert("Keyboard shortcuts are disabled.");
      }
    });
    // setInterval(() => {
    //   if (
    //     window.outerWidth - window.innerWidth > 160 ||
    //     window.outerHeight - window.innerHeight > 160
    //   ) {
    //     alert("DevTools detected! Redirecting...");
    //     window.location.replace("/");
    //   }
    // }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      kjk
      <Header />
      <main className="grow">{children}</main>
      <Footer border={true} />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#c75513] text-white  shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-10 h-10 text-xl" />
        </button>
      )}
    </>
  );
}
