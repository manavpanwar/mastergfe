"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";

// --- Data ---

const AD_CATEGORIES = [
  {
    id: "transit",
    title: "Transit Media Advertising",
    icon: "🚌",
    desc: "Reach commuters on the move with high-impact branding on public and private transport.",
    items: [
      "Auto Advertising", "Bus Advertising", "Taxi / Cab Advertising", 
      "Mobile / Promotional Van", "Metro Advertising", "Train Advertising", 
      "Truck Advertising", "E Rickshaw Advertising", "Tricycle Advertising", 
      "Bicycle Advertising", "Car Sunshade Advertising", "Stepney Branding"
    ]
  },
  {
    id: "outdoor",
    title: "Outdoor Media",
    icon: "🏗️",
    desc: "Command attention in the physical world with premium street-side and landmark placements.",
    items: [
      "Hoardings", "Glow Sign Boards", "Bus Shelter Advertising", 
      "Mall Advertising", "Wall Painting Advertising", 
      "No Parking Boards Branding", "Roadshow Advertising"
    ]
  },
  {
    id: "btl",
    title: "Human Advertising / BTL",
    icon: "🚶",
    desc: "Engage your audience directly with ground-level activations and promotions.",
    items: [
      "Human Billboard Advertising", "Human Banner Advertising", 
      "Pamphlet Distribution", "Canopy Promotions", 
      "Promotional Events", "Sampling Campaigns"
    ]
  },
  {
    id: "society",
    title: "Society / RWA Gate",
    icon: "🏙️",
    desc: "Hyper-local targeting within premium residential complexes and gated communities.",
    items: [
      "Gate Branding", "Society Entry Boards", 
      "Apartment Promotions", "Resident Target Campaigns"
    ]
  },
  {
    id: "radio",
    title: "Radio Advertising",
    icon: "📻",
    desc: "Be heard across the frequency with catchy jingles and prime-time spots.",
    items: [
      "FM Radio Campaigns", "RJ Mentions", "Jingles", "Regional Promotions"
    ]
  },
  {
    id: "newspaper",
    title: "Newspaper Advertising",
    icon: "📰",
    desc: "Traditional reach with high credibility in leading national and regional dailies.",
    items: [
      "Newspaper Ads", "Inserts / Flyers", "Classified Ads", "City Editions Campaigns"
    ]
  },
  {
    id: "printing",
    title: "Printing Services",
    icon: "🖨️",
    desc: "High-quality offset and digital printing for all your corporate and marketing needs.",
    items: [
      "Pamphlet Printing", "Brochure Printing", "Sunpack Printing", 
      "Visiting Cards", "Posters", "Caps Printing", 
      "Mug Printing", "Pen Printing", "Corporate Merchandise"
    ]
  },
  {
    id: "flex",
    title: "Flex Printing",
    icon: "🖼️",
    desc: "Large format printing for banners, backdrops, and environmental branding.",
    items: [
      "Flex Banners", "Vinyl Printing", "Event Backdrops", "Store Branding"
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing / Promo Assets",
    icon: "🛠️",
    desc: "Custom production of advertising structures and promotional hardware.",
    items: [
      "Auto Hood Branding", "Look Walker Boards", "Canopies", 
      "Standees", "Umbrellas", "Promotional Tables", "Event Booth Assets"
    ]
  },
  {
    id: "digital",
    title: "Digital Marketing",
    icon: "💻",
    desc: "Data-driven online growth through strategic search and social media dominance.",
    items: [
      "SEO", "Social Media Marketing", "Google Ads", 
      "Meta Ads", "Lead Generation", "Website Promotion", "Brand Strategy"
    ]
  }
];

const WHY_CHOOSE_US = [
  { title: "One Stop Brand Solution", icon: "💎" },
  { title: "Online + Offline Reach", icon: "🌐" },
  { title: "Fast Execution", icon: "⚡" },
  { title: "Delhi NCR Expertise", icon: "📍" },
  { title: "Affordable Packages", icon: "💰" },
  { title: "Result Driven Campaigns", icon: "📈" }
];

const INDUSTRIES = [
  "Real Estate", "Education", "Retail", "Healthcare", 
  "Restaurants", "Local Businesses", "Events", "Startups"
];

const PROCESS = [
  { step: "01", title: "Strategy", desc: "Understanding goals and defining target demographics." },
  { step: "02", title: "Creative Design", desc: "Crafting visually stunning and high-converting assets." },
  { step: "03", title: "Placement / Launch", desc: "Deploying campaigns across selected high-impact channels." },
  { step: "04", title: "Monitoring", desc: "Real-time tracking of performance and reach." },
  { step: "05", title: "Results & Scaling", desc: "Analyzing ROI and scaling successful campaigns." }
];

const STATS = [
  { label: "Campaigns Run", value: "800+" },
  { label: "Monthly Reach", value: "5M+" },
  { label: "ROI Average", value: "3.5x" },
  { label: "Cities Active", value: "25+" }
];

// --- Components ---

const ServiceCard = ({ category }: { category: typeof AD_CATEGORIES[0] }) => {
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
          {category.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function AdvertisingAgencyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    service: "",
    budget: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data to API
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="ad-agency-container">
      {/* Background Glows */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      {/* Hero Section - Standard Style */}
      <section className="service-page-hero">
        <div className="container">
          <MotionWrapper direction="down">
            <div className="service-hero-inner">
              <div className="service-hero-text">
                <Link href="/" className="back-link">← Back to Home</Link>
                <div className="service-hero-icon-circle">📢</div>
                <h1>Advertising & Digital Marketing Services</h1>
                <p className="service-tagline">
                  Complete Offline, Outdoor, Transit, Print & Digital Marketing Solutions Under One Roof. 
                  Grow your brand with powerful, high-impact advertising strategies.
                </p>
              </div>
              <div className="service-hero-cta">
                <div className="cta-group">
                  <a href="#quote" className="btn btn-primary">Get Free Quote</a>
                  <a href="tel:+919999999999" className="btn btn-outline">Call Now</a>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Main Services */}
      <section className="ad-services-section">
        <div className="container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Comprehensive Advertising Ecosystem</h2>
              <span className="svc-section-tag">Expertise</span>
            </div>
          </MotionWrapper>

          <div className="ad-grid">
            {AD_CATEGORIES.map((cat, idx) => (
              <MotionWrapper key={cat.id} delay={idx * 0.05}>
                <ServiceCard category={cat} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Counters */}
      <section className="ad-stats-section">
        <div className="container">
          <div className="ad-stats-grid">
            {STATS.map((stat, idx) => (
              <MotionWrapper key={idx} delay={idx * 0.1}>
                <div className="ad-stat-card">
                  <div className="ad-stat-value accent-text">{stat.value}</div>
                  <div className="ad-stat-label">{stat.label}</div>
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
                <h2>Why Choose Us</h2>
                <span className="svc-section-tag">Value</span>
             </div>
          </MotionWrapper>
          <div className="why-grid">
            {WHY_CHOOSE_US.map((item, idx) => (
              <MotionWrapper key={idx} delay={idx * 0.1}>
                <div className="why-item">
                  <span className="why-icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="ad-industries-section">
        <div className="container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Industries We Serve</h2>
              <span className="svc-section-tag">Verticals</span>
            </div>
            <div className="industries-cloud">
               {INDUSTRIES.map((ind, idx) => (
                 <span key={idx} className="industry-tag">{ind}</span>
               ))}
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Process */}
      <section className="ad-process-section">
        <div className="container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Campaign Process Timeline</h2>
              <span className="svc-section-tag">Workflow</span>
            </div>
          </MotionWrapper>
          <div className="process-timeline">
            {PROCESS.map((p, idx) => (
              <MotionWrapper key={idx} direction="left" delay={idx * 0.1}>
                <div className="process-card">
                   <div className="process-num">{p.step}</div>
                   <div className="process-info">
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                   </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="quote" className="ad-form-section">
        <div className="container">
          <div className="form-grid">
            <MotionWrapper direction="right">
              <div className="form-text">
                <h2 className="accent-text">Start Your Campaign Today</h2>
                <p>Fill out the form below and our brand strategist will reach out to you within 24 hours with a custom proposal.</p>
                
                <div className="form-contacts">
                  <div className="contact-info-item">
                     <span>📍</span>
                     <div>
                        <strong>Our Office</strong>
                        <p>Delhi NCR, India</p>
                     </div>
                  </div>
                  <div className="contact-info-item">
                     <span>📞</span>
                     <div>
                        <strong>Phone</strong>
                        <p>+91 99999 99999</p>
                     </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
               <form className="ad-form glass" onSubmit={handleSubmit}>
                 <div className="form-row">
                   <div className="form-group">
                      <label>Name</label>
                      <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                   </div>
                   <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" placeholder="Your Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                   </div>
                 </div>
                 <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" placeholder="Company Name" required value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} />
                 </div>
                 <div className="form-row">
                    <div className="form-group">
                      <label>Interested Service</label>
                      <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                        <option value="">Select Service</option>
                        {AD_CATEGORIES.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                       <label>Approx Budget (₹)</label>
                       <input type="text" placeholder="e.g. 50,000" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} />
                    </div>
                 </div>
                 <div className="form-group">
                    <label>Message</label>
                    <textarea rows={4} placeholder="Tell us about your campaign goals..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                 </div>
                 <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    {isSubmitted ? "Requirement Sent!" : "Submit Request"}
                 </button>
                 {isSubmitted && <p className="success-msg">Thank you! We'll get back to you shortly.</p>}
               </form>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919999999999?text=Hi%20Master%20G%2C%20I'm%20interested%20in%20Advertising%20services." 
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="wa-pulse"></span>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M12.031 6.172c-2.32 0-4.591 1.342-4.591 3.515 0 .524.116 1.031.347 1.503l-1.011 3.708 3.805-1.001a4.89 4.89 0 0 0 1.45.217c2.32 0 4.591-1.342 4.591-3.515 0-2.174-2.271-3.527-4.591-3.527zm3.111 5.343c-.114.309-.661.623-.915.66-.254.038-.564.062-1.353-.255-.788-.317-1.351-1.121-1.503-1.32-.152-.2-.266-.464-.266-.728 0-.255.132-.383.18-.445.048-.063.106-.114.152-.152.046-.038.077-.076.114-.152.038-.076.038-.152.019-.228-.02-.076-.18-.445-.246-.61-.067-.166-.134-.143-.18-.143-.047 0-.096-.008-.143-.008-.047 0-.122.016-.188.084-.067.068-.255.247-.255.61 0 .362.264.714.3 0 .762.036.048.666.974 1.458 1.954.793.985 1.53.985 2.108 0 .578-.445.746-1.045 1.139-1.597.393-.553.791-.568 1.189-.175l.4.195c.394.195.66.326.755.485.093.159.093.464-.022.773z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 2.136.67 4.116 1.81 5.74L2 22l4.318-1.776c1.624 1.14 3.604 1.81 5.74 1.81 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.85 0-3.578-.585-5-1.586l-.358-.23L4.172 19l.816-2.47-.23-.358A7.953 7.953 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
      </a>
    </div>
  );
}
