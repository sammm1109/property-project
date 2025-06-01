// app/page.tsx
import HomePage from "@/components/home";
import LocationMap from "@/components/location-map";
import LuxuryResidence from "@/components/luxury-residence";
import Facilities from "@/components/facilities";
import CorporateSuites from "@/components/corporate-suites";
import PhotoGallery from "@/components/photo-gallery";
import { ContactForm } from "@/components/contact-us";

export const metadata = {
  title: "Pavilion Square | Home",
  description:
    "Trusted Property Consultant With Proven Track Record And Reviews",
  icons: {
    icon: "/logo_big.png", // PNG favicon for the browser tab
    apple: "/logo_big.png", // Apple touch icon for iOS
    android: "/logo_big.png", // Android icon
  },
  other: {
    canonical: "https://pavilion-square-project.web.app/",
    robots:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    "fb:pages": "",
    "fb:admins": "",
    "fb:app_id": "",
    "og:locale:alternate": "en_US",
    "google-site-verification": "your-verification-code",
  },
  // Open Graph Meta Tags for Facebook
  openGraph: {
    title:
      "Pavilion Square - Trusted Property Consultant With Proven Track Record And Reviews ",
    description:
      "Trusted Property Consultant With Proven Track Record And Reviews",
    url: "https://pavilion-square-project.web.app/",
    siteName: "Pavilion Square",
    images: [
      {
        url: "https://pavilion-square-project.web.app/_next/static/media/luxury.113d0e0c.jpg", // OG Image URL
        width: 1200,
        height: 630,
        alt: "Pavilion Square Project",
        secure_url:
          "https://pavilion-square-project.web.app/_next/static/media/luxury.113d0e0c.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card Meta Tags for Twitter
  twitter: {
    card: "summary",
    title:
      "Pavilion Square - Trusted Property Consultant With Proven Track Record And Reviews ",
    description:
      "Trusted Property Consultant With Proven Track Record And Reviews",
    images: [
      "https://pavilion-square-project.web.app/_next/static/media/luxury.113d0e0c.jpg",
    ], // Twitter Image URL
    site: "@pavilion-square",
  },
};

export default function Home() {
  return (
    <>
      {/* Landing page sections */}
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
