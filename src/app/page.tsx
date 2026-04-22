import Link from "next/link";
import MotionWrapper from "@/components/MotionWrapper";

const SERVICES = [
  { slug: "education", title: "Education", icon: "🎓", desc: "Expert guidance for admissions, professional tutoring, and fitness training." },
  { slug: "solar", title: "Solar Energy", icon: "☀️", desc: "Sustainable On-grid, Off-grid, and Hybrid solar systems for homes and businesses." },
  { slug: "travel", title: "Tours & Travel", icon: "✈️", desc: "Premium travel packages and luxury transport across the Himalayas." },
  { slug: "renovation", title: "Renovation", icon: "🔨", desc: "Luxury home transformations from modular kitchens to full interior overhauls." },
  { slug: "scrap", title: "Scrap & Metal", icon: "♻️", desc: "Responsible e-waste recycling, industrial scrap, and CNC metal fabrication." },
  { slug: "business-legal", title: "Business & Legal", icon: "⚖️", desc: "Fast-track company registration, GST filing, and full legal compliance." },
  { slug: "advertising", title: "Advertising", icon: "📢", desc: "Multi-channel media campaigns that build brands and drive real results." },
  { slug: "property", title: "Property", icon: "🏠", desc: "Prime residential and commercial real estate — buying, selling, and renting." },
];

const HERO_STATS = [
  { value: "8+", label: "Industries Served" },
  { value: "2000+", label: "Clients Helped" },
  { value: "10 Yrs", label: "Experience" },
  { value: "100%", label: "Satisfaction" },
];

const ABOUT_STATS = [
  { value: "8+", label: "Industries" },
  { value: "2K+", label: "Happy Clients" },
  { value: "₹50Cr+", label: "Business Value Created" },
  { value: "25+", label: "Cities Reached" },
];

export default function Home() {
  return (
    <main id="app">
      {/* ══ HERO ══════════════════════════════════ */}
      <section className="hero">
        <div className="hero-content">
          <MotionWrapper direction="down" delay={0.1}>
            <div className="hero-logo-container">
              <img src="/images/whitelogo.png" alt="Master G Logo" className="hero-logo" />
            </div>
            <span className="hero-eyebrow">⚡ The Gold Standard of Consulting</span>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <h1>Solutions That <span className="accent-text">Elevate</span><br />Your World</h1>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <p className="hero-desc">
              Expert professional consulting across 8 industries — from education to real estate.
              Precision, trust, and excellence in every engagement.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.5} className="cta-group">
            <Link href="#services" className="btn btn-primary">Explore Services</Link>
            <a href="https://wa.me/919999999999" className="btn btn-outline">Free Consultation</a>
          </MotionWrapper>

          <MotionWrapper delay={0.6}>
            <div className="hero-stats">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="hero-stat">
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════ */}
      <section id="services" className="services-section container">
        <MotionWrapper className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our <span className="accent-text">Services</span></h2>
          <p className="section-subtitle">End-to-end solutions across 8 specialized industries, all under one roof.</p>
        </MotionWrapper>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <MotionWrapper
              key={service.slug}
              delay={0.08 * (index % 3)}
              className="service-card-wrapper"
            >
              <Link href={`/services/${service.slug}`} className="service-card">
                <span className="card-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <span className="learn-more">Learn More →</span>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════ */}
      <section id="about" className="about-section container">
        <div className="about-grid">
          <MotionWrapper direction="right" className="about-text-col">
            <span className="section-label">Who We Are</span>
            <h2 style={{ marginBottom: '20px' }}>Built on <span className="accent-text">Trust</span>,<br />Driven by Excellence</h2>
            <p>
              Master G Consultancy is a multi-industry powerhouse helping clients navigate education, energy, real estate, travel, and business with expert precision. We combine deep domain knowledge with a passion for client success.
            </p>
            <p>
              Whether you're launching a startup, investing in solar, or finding your dream property — our team ensures you get the best outcome, every time.
            </p>
            <div className="about-badges">
              <span className="badge">✅ Verified Experts</span>
              <span className="badge">🏆 Award Winning</span>
              <span className="badge">🔒 Fully Compliant</span>
              <span className="badge">🌍 Pan-India</span>
            </div>
          </MotionWrapper>

          <div className="about-stats-col">
            {ABOUT_STATS.map((s, i) => (
              <MotionWrapper key={s.label} delay={0.1 * i}>
                <div className="about-stat-card">
                  <div className="about-stat-value">{s.value}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
