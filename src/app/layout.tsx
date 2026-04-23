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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <PrismaticBurst 
          intensity={0.8}
          speed={0.2}
          colors={['#0A0A0A', '#F59E0B', '#141414']}
          animationType="rotate"
          mixBlendMode="normal"
        />
        <StoreProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </StoreProvider>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-logo-area">
          <Link href="/" className="logo">
            <div className="logo-crop">
              <img src="/images/whitesq.png" alt="Master G Logo" className="logo-img" />
            </div>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#about">About</Link></li>
            <UserMenu />
          </ul>
        </nav>
        <div className="header-cta">
          <a href="https://wa.me/919999999999" className="btn btn-primary cta-btn">Consult Now</a>
          <MobileToggle />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-contact">
          <a href="tel:+919999999999" className="glass">📞 Call</a>
          <a href="https://wa.me/919999999999" className="glass">💬 WhatsApp</a>
          <span className="footer-hours">Available 9 AM – 7 PM</span>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Master G Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
