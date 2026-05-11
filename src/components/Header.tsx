"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MobileToggle from "./MobileToggle";
import UserMenu from "./UserMenu";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const scrolled = scrollY > 50;
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${isHome ? "is-home" : ""}`}>
      <div className="header-container">
        <div className="header-logo-area">
          <Link href="/" className="logo">
            <div className="logo-crop logo-reel-container">
              <div 
                className="logo-reel"
                style={{ 
                  transform: `translateY(${-((scrollY * 0.4) % 180)}px)`,
                  transition: 'none'
                }}
              >
                <img src="/images/whitesq.png" alt="G" className="logo-img reel-item" />
                <img src="/images/whitelogo.png" alt="Master G" className="logo-img reel-item" />
                <img src="/images/whitesq.png" alt="G" className="logo-img reel-item" />
                <img src="/images/whitelogo.png" alt="Master G" className="logo-img reel-item" />
                <img src="/images/whitesq.png" alt="G" className="logo-img reel-item" />
              </div>
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
