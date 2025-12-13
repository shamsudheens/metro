import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-geist-sans", // Reusing geist-sans var name or mapping it in globals.css
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Metro Gold & Diamonds | Timeless Luxury Jewelry",
  description: "Experience the purity of gold and diamond jewelry. Handcrafted designs for every occasion. Visit our showrooms in Dubai, Abu Dhabi & Sharjah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
