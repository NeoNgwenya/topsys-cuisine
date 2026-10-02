import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topsyscuisine.co.zw"),
  title: "Topsy's Cuisine | Executive Catering",
  description:
    "Executive catering, tailor-made menus and dependable event service from Topsy's Cuisine.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Topsy's Cuisine",
    title: "Topsy's Cuisine | Executive Catering",
    description:
      "Fine food, tailor-made menus and dependable catering for events where every detail matters.",
    images: [
      {
        url: "/SEO_image.jpg",
        width: 1254,
        height: 1254,
        alt: "Topsy's Cuisine — Good Food, Happier People",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Topsy's Cuisine | Executive Catering",
    description:
      "Fine food, tailor-made menus and dependable catering for events where every detail matters.",
    images: ["/SEO_image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Topsy's Cuisine",
  url: "https://www.topsyscuisine.co.zw/",
  image: "https://www.topsyscuisine.co.zw/SEO_image.jpg",
  description:
    "Executive catering, tailor-made menus and dependable event service from Topsy's Cuisine.",
  email: "topsyscuisine@gmail.com",
  telephone: "+263710825380",
  sameAs: [
    "https://www.facebook.com/topsyscuisine",
    "https://www.instagram.com/topsyscuisine/",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
