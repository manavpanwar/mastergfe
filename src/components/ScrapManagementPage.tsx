"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";

// --- Data ---
const SCRAP_CATEGORIES = [
  {
    title: "Paper & Cardboard",
    icon: "📰",
    desc: "Premium recycling for all your paper-based materials.",
    tags: ["Newspaper", "Office Paper (A3/A4)", "Books", "Cardboard", "Magazines"]
  },
  {
    title: "Metals & Alloys",
    icon: "🏗️",
    desc: "Best scrap value for all types of ferrous and non-ferrous metals.",
    tags: ["Iron", "Copper", "Aluminum", "Brass", "Steel", "Heavy Metal"]
  },
  {
    title: "Large Appliances",
    icon: "🧺",
    desc: "Professional dismantling and disposal of heavy household assets.",
    tags: ["Washing Machine", "Fridge", "AC (Window/Split)", "Geyser", "Gym Equipment"]
  },
  {
    title: "IT & E-Waste",
    icon: "💻",
    desc: "Secure and eco-friendly processing of electronic components.",
    tags: ["Laptop", "CPU", "Monitor", "Printer", "LED TV", "Batteries"]
  },
  {
    title: "Small Appliances",
    icon: "🔌",
    desc: "Recycling solutions for compact home and office gadgets.",
    tags: ["Microwave", "Mixer", "Induction", "Vacuum Cleaner", "Router/Modem"]
  },
  {
    title: "Vehicle Scrap",
    icon: "🚗",
    desc: "Complete documentation and official scrap handling for old vehicles.",
    tags: ["Car", "Bike", "Scooty/Scooter", "Spare Parts"]
  }
];

const WHY_SCRAP_G = [
  { title: "Digital Weighing", desc: "Accurate digital scales used for every collection.", icon: "⚖️" },
  { title: "Safe & Verified", desc: "Trained and background-verified staff only.", icon: "🛡️" },
  { title: "Instant Payment", desc: "Get paid instantly via UPI or Cash on the spot.", icon: "💰" },
  { title: "Formal Bills", desc: "Digital invoices and documentation for all transactions.", icon: "📄" }
];

const STEPS = [
  { title: "Schedule Pickup", desc: "Choose your convenient time slot online." },
  { title: "Home Collection", desc: "Our crew weighs the items at your doorstep." },
  { title: "Get Paid", desc: "Instant transfer before we leave your location." }
];

// --- Components ---

const ScrapCategoryCard = ({ category }: { category: typeof SCRAP_CATEGORIES[0] }) => {
  return (
    <div className="ad-service-card glass">
      <div className="ad-card-top">
        <div className="ad-card-icon">{category.icon}</div>
        <div className="ad-card-head">
          <h3>{category.title}</h3>
          <p className="ad-card-desc">{category.desc}</p>
        </div>
      </div>
      <div className="ad-card-content">
        <ul className="ad-card-items">
          {category.tags.map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function ScrapManagementPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="ad-agency-container">
      {/* Hero Section - Standard Style for consistency */}
      <section className="service-page-hero">
        <div className="container">
          <MotionWrapper direction="down">
            <div className="service-hero-inner">
              <div className="service-hero-text">
                <Link href="/" className="back-link">← Back to Home</Link>
                <div className="service-hero-icon-circle">♻️</div>
                <h1>Eco-Friendly Scrap Management</h1>
                <p className="service-tagline">
                  Schedule a pickup online, we collect from your doorstep and you get paid instantly. 
                  Professional waste management for a greener tomorrow.
                </p>
              </div>
              <div className="service-hero-cta">
                <div className="cta-group">
                  <a href="#pickup" className="btn btn-primary">Schedule Pickup</a>
                  <a href="https://wa.me/918368777144" className="btn btn-outline" target="_blank">WhatsApp Chat</a>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Categories Section */}
      <section className="ad-services-section">
        <div className="container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Recyclables We Pick</h2>
              <span className="svc-section-tag">Categories</span>
            </div>
          </MotionWrapper>

          <div className="ad-grid">
            {SCRAP_CATEGORIES.map((cat, idx) => (
              <MotionWrapper key={idx} delay={idx * 0.05}>
                <ScrapCategoryCard category={cat} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="ad-process-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>3 Simple Steps to Recycle</h2>
              <span className="svc-section-tag">Workflow</span>
            </div>
          </MotionWrapper>
          <div className="process-timeline">
            {STEPS.map((step, idx) => (
              <MotionWrapper key={idx} direction="left" delay={idx * 0.1}>
                <div className="process-card">
                  <div className="process-num">0{idx + 1}</div>
                  <div className="process-info">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="ad-why-section">
        <div className="container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Why Scrap with Master G?</h2>
              <span className="svc-section-tag">Value</span>
            </div>
          </MotionWrapper>
          <div className="why-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {WHY_SCRAP_G.map((item, idx) => (
              <MotionWrapper key={idx} delay={idx * 0.1}>
                <div className="why-item" style={{ textAlign: 'left', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span className="why-icon" style={{ marginBottom: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup Form */}
      <section id="pickup" className="ad-form-section">
        <div className="container">
          <div className="form-grid">
            <MotionWrapper direction="right">
              <div className="form-text">
                <h2 className="accent-text">Schedule Your First Pickup</h2>
                <p>Join thousands of green heroes. Get the best market value for your scrap with accurate digitial weighing.</p>
                <div className="form-contacts">
                   <div className="contact-info-item">
                     <span>📍</span>
                     <div>
                        <strong>Service Area</strong>
                        <p>Entire Delhi NCR Region</p>
                     </div>
                   </div>
                   <div className="contact-info-item">
                     <span>⏰</span>
                     <div>
                        <strong>Hours</strong>
                        <p>10:00 AM - 7:00 PM (Daily)</p>
                     </div>
                   </div>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
              <form className="ad-form glass" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Pickup Address</label>
                  <textarea rows={3} placeholder="House No, Street, Landmark..." required></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Approx Weight (kg)</label>
                    <input type="text" placeholder="e.g. 50kg" />
                  </div>
                  <div className="form-group">
                    <label>Primary Scrap Type</label>
                    <select>
                      <option>Paper/Newspaper</option>
                      <option>Metals</option>
                      <option>Appliances</option>
                      <option>E-Waste</option>
                      <option>Vehicle Scrap</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  {isSubmitted ? "Pickup Scheduled!" : "Confirm Pickup Slot"}
                </button>
                {isSubmitted && <p className="success-msg">Thank you! Our agent will call you to confirm the time.</p>}
              </form>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
