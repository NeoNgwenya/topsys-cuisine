import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Topsy's Cuisine | Executive Catering in Bulawayo",
  description:
    "Executive catering, tailor-made menus and dependable event service from Topsy's Cuisine in Bulawayo, Zimbabwe.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
