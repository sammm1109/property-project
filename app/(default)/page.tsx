export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import HomePage from "@/components/home";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import LocationMap from "@/components/location-map";
import LuxuryResidence from "@/components/luxury-residence";
import Facilities from "@/components/facilities";
import CorporateSuites from "@/components/corporate-suites";
import PhotoGallery from "@/components/photo-gallery";
import { ContactForm } from "@/components/contact-us";

export default function Home() {
  return (
    <>
      <HomePage />
      <LocationMap />
      <LuxuryResidence />
      <Facilities />
      <CorporateSuites />
      <PhotoGallery />
      <ContactForm />
    </>
  );
}
