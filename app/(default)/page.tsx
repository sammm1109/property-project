// app/page.tsx
import Head from "next/head";
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
    "Discover the best solution for your business with our powerful tools.",
  icons: {
    icon: "/logo_big.png", // PNG favicon for the browser tab
    apple: "/logo_big.png", // Apple touch icon for iOS
    android: "/logo_big.png", // Android icon
  },
  // Open Graph Meta Tags for Facebook
  openGraph: {
    title: "Home - Simple", // OG Title
    description:
      "Discover the best solution for your business with our powerful tools.", // OG Description
    url: "https://yourdomain.com", // URL of the page
    siteName: "My Awesome Product", // Name of the site
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // OG Image URL
        width: 1200,
        height: 630,
        alt: "My Product OG Image", // Alt text for image
        secure_url: "https://yourdomain.com/og-image.jpg", // Optional but recommended
      },
    ],
    locale: "en_US", // Locale of the page
    type: "website", // Type of the content (use "website" for most sites)
  },

  // Twitter Card Meta Tags for Twitter
  twitter: {
    card: "summary_large_image", // Card type (summary with a large image)
    title: "Home - Simple", // Twitter Title
    description: "Discover the best solution for your business...", // Twitter Description
    images: ["https://yourdomain.com/og-image.jpg"], // Twitter Image URL
    site: "@your_twitter_handle", // Your Twitter handle
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Discover luxury properties." />
        {/* If you want a specific favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="de_DE" />
        {/* Add any other custom SEO/meta tags here if needed */}
      </Head>

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
