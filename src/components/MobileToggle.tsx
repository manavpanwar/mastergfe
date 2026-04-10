"use client";

import { useState, useEffect } from "react";

export default function MobileToggle() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('.main-nav');
    if (nav) {
      if (isOpen) {
        nav.classList.add('is-open');
      } else {
        nav.classList.remove('is-open');
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
