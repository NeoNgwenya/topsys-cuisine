import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Topsy's Cuisine | Catering & Cooking Classes",
  description:
    "Joyful, generous catering and practical cooking classes from Topsy's Cuisine. Good food, happier people.",
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
