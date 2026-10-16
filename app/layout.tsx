import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topsyscuisine.co.zw"),
  title: "Topsy's Cuisine | Catering, Family Meals & Private Chef",
  description:
    "Family meals, packed lunches, freezer-ready meals, private-chef experiences and event catering from Topsy's Cuisine in Bulawayo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Topsy's Cuisine",
    title: "Topsy's Cuisine | Food for Every Table",
    description:
      "Family meals, packed lunches, private-chef experiences and dependable catering, made with heart in Bulawayo.",
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
    title: "Topsy's Cuisine | Food for Every Table",
    description:
      "Family meals, packed lunches, private-chef experiences and dependable catering, made with heart in Bulawayo.",
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
    "Family meals, packed lunches, freezer-ready meals, private-chef experiences and event catering from Topsy's Cuisine in Bulawayo.",
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
