import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// Load fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D Trinity Security | Elite Risk Management",
  description: "Bespoke security ecosystems for UHNW individuals, Family Offices, and Sovereign entities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-white text-gray-900`}>
        {/* WE REMOVED <Navbar /> and <Footer /> HERE to prevent duplication. 
            They are now rendered in the individual pages. */}
        {children}
      </body>
    </html>
  );
}