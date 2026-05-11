import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MobileToggle from "@/components/MobileToggle";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PrismaticBurst from "@/components/PrismaticBurst";
import { StoreProvider } from "@/components/StoreProvider";
import UserMenu from "@/components/UserMenu";

export const metadata: Metadata = {
  title: {
    template: "%s | Master G Consultancy",
    default: "Master G Consultancy | Best Multi-Industry Services in India",
  },
  description: "Master G Consultancy provides expert solutions in Education, Solar Energy, Travel, Home Renovation, Scrap Management, Business Legal, Advertising, and Property investment.",
  keywords: [
    "Consultancy India", "Multi-service business", "Education Guide", "Solar ROI India",
    "North India Tourism", "Home Renovation Contractors", "E-waste Recycling",
    "Company Registration Experts", "Brand Advertising agency", "Prime Real Estate India"
  ],
  authors: [{ name: "Master G Team" }],
  creator: "Master G Consultancy",
  publisher: "Master G Consultancy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mastergconsultancy.example.com",
    title: "Master G Consultancy | Premium Solutions Across 8 Industries",
    description: "Expert consulting services for education, solar, property, travel, and more. Elevate your world with Master G Consultancy.",
    siteName: "Master G Consultancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master G Consultancy",
    description: "Multi-industry consulting excellence in India.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/masterglogo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <PrismaticBurst 
          intensity={1.2}
          speed={0.15}
          colors={['#F59E0B', '#FF7A00', '#7C3AED', '#3B82F6']}
          animationType="rotate3d"
          mixBlendMode="lighten"
        />
        <StoreProvider>
          <div className="relative z-10">
            <Header />
            {children}
            <Footer />
            <WhatsAppFloat />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
