import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { GlobalProvider } from "@/components/context/globalContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const space_Grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Luxury Resort Getaways | Resdium Digital',
  description:
    'Escape to paradise with our luxury resort experiences, designed by Resdium Digital. Discover breathtaking views, relaxing retreats, and unforgettable moments.',
  keywords: [
    'luxury resort',
    'beach resort',
    'tropical getaway',
    'resort website design',
    'Resdium Digital',
    'resort web development',
    'relaxation vacation',
    'luxury travel',
    'resort booking platform',
    'premium holiday destination',
    'resort UX/UI design',
    'modern travel website',
    'digital resort experiences',
    'vacation booking system',
  ],
  metadataBase: new URL('https://resort-demo-website-by-resdium.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Luxury Resort Getaways | Resdium Digital',
    description:
      'Escape to paradise with our luxury resort experiences, designed by Resdium Digital. Discover breathtaking views, relaxing retreats, and unforgettable moments.',
    url: '/',
    siteName: 'Resdium Digital',
    images: [
      {
        url: 'https://ibb.co.com/svJGp4Vx', // Replace with a real resort preview if available
        width: 1200,
        height: 630,
        alt: 'Luxury Resort by Resdium Digital',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Resort Getaways | Resdium Digital',
    description:
      'Escape to paradise with our luxury resort experiences, designed by Resdium Digital. Discover breathtaking views, relaxing retreats, and unforgettable moments.',
    images: [
      'https://ibb.co.com/svJGp4Vx',
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${space_Grotesk.className} ${inter.variable} max-w-[1400px] mx-auto ease-in-out transition-all duration-300 px-2 md:px-10 lg:px-20 pb-4 pt-0 md:py-4 antialiased`}
      >
        <GlobalProvider>
          <NavBar />
          <div className="">{children}</div>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
