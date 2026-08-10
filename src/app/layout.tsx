import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Harmony Property & Living — Modern Living Spaces & 360° Virtual Tours",
  description: "Discover modern luxury residences with interactive 360° virtual tours, world-class amenities, and contemporary architectural design.",
  keywords: ["Property & Living", "360 Virtual Tour", "Harmony Property", "Real Estate", "Luxury Living"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        plusJakartaSans.variable,
        playfairDisplayHeading.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6F0] text-[#232A25] selection:bg-[#809176] selection:text-white">
        {children}
      </body>
    </html>
  );
}
