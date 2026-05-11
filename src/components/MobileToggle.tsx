"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const nav = document.querySelector('.main-nav');
    if (nav) {
      if (isOpen) {
        nav.classList.add('open');
      } else {
        nav.classList.remove('open');
      }
    }
  }, [isOpen]);

  return (
    <button 
      className={`mobile-toggle ${isOpen ? 'is-active' : ''}`} 
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
