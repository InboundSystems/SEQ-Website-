import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Lawn Mowing & Garden Maintenance Brisbane | SEQ Landscaping and Garden Maintenance",
    template: "%s | SEQ Landscaping and Garden Maintenance",
  },
  description:
    "Brisbane Southside's trusted lawn mowing and garden maintenance specialists. Servicing Tarragindi, Annerley, Moorooka & all South Brisbane suburbs. Free quotes — call Sam on 0490 770 382.",
  keywords: [
    "landscaping brisbane",
    "lawn mowing brisbane",
    "garden maintenance brisbane",
    "landscaper brisbane southside",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "SEQ Landscaping & Garden Maintenance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
