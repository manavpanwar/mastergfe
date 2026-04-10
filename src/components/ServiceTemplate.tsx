"use client";

import { Service } from "@/data/services";
import Link from "next/link";
import MotionWrapper from "@/components/MotionWrapper";

interface ServiceTemplateProps {
  service: Service;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.seoDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Master G Consultancy",
            },
            "areaServed": "India",
          })
        }}
      />

      {/* ══ HERO ══════════════════════════════════ */}
      <section
        className={`service-page-hero ${service.heroImage ? 'has-image' : ''}`}
        style={service.heroImage ? { backgroundImage: `url(${service.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="container">
          <MotionWrapper direction="down">
            <div className="service-hero-inner">
              <div className="service-hero-text">
                <Link href="/" className="back-link">← Back to Home</Link>
                <div className="service-hero-icon-circle">{service.icon}</div>
                <h1>{service.title}</h1>
                <p className="service-tagline">{service.tagline}</p>
              </div>
              <div className="service-hero-cta">
                <a
                  href={`https://wa.me/919999999999?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(service.title)}%20services`}
                  className="btn btn-primary"
                >
                  {service.ctaButtonText || "Get Free Consultation"}
                </a>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ══ HIGHLIGHTS ════════════════════════════ */}
      <section className="svc-section container">
        <MotionWrapper>
          <div className="svc-section-header">
            <h2>What We Offer</h2>
            <span className="svc-section-tag">Services</span>
          </div>
        </MotionWrapper>
        <div className="highlights-grid">
          {service.highlights.map((highlight, index) => (
            <MotionWrapper key={index} delay={0.08 * (index % 3)}>
              <div className="highlight-item">
                <div className="highlight-icon">{highlight.icon}</div>
                <h4>{highlight.title}</h4>
                <p>{highlight.desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* ══ BENEFITS ══════════════════════════════ */}
      {service.benefits && (
        <section className="svc-section container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Key Benefits</h2>
              <span className="svc-section-tag">Why Choose Us</span>
            </div>
          </MotionWrapper>
          <ul className="benefits-list">
            {service.benefits.map((benefit, index) => (
              <MotionWrapper key={index} delay={0.08 * (index % 4)}>
                <li className="benefit-item">
                  <span className="check-icon">✓</span>
                  {benefit}
                </li>
              </MotionWrapper>
            ))}
          </ul>
        </section>
      )}

      {/* ══ BEFORE / AFTER ════════════════════════ */}
      {service.comparisons && (
        <section className="svc-section container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Recent Transformations</h2>
              <span className="svc-section-tag">Portfolio</span>
            </div>
          </MotionWrapper>
          <div className="comparisons-grid">
            {service.comparisons.map((item, index) => (
              <div key={index} className="comparison-card">
                <p className="comparison-label">{item.label}</p>
                <div className="comparison-images">
                  <MotionWrapper direction="right" className="image-pair before">
                    <img src={item.before} alt={`${item.label} Before`} className="reno-img" />
                    <span className="img-badge">Before</span>
                  </MotionWrapper>
                  <MotionWrapper direction="left" className="image-pair after">
                    <img src={item.after} alt={`${item.label} After`} className="reno-img" />
                    <span className="img-badge accent">After</span>
                  </MotionWrapper>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══ STEPS ═════════════════════════════════ */}
      {service.steps && (
        <section className="svc-section container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Our Process</h2>
              <span className="svc-section-tag">How It Works</span>
            </div>
          </MotionWrapper>
          <div className="steps-timeline">
            {service.steps.map((step, index) => (
              <MotionWrapper key={index} delay={0.1 * index} direction="left">
                <div className="step-card">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </section>
      )}

      {/* ══ STATS ═════════════════════════════════ */}
      {service.stats && (
        <section className="svc-section container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Our Impact</h2>
              <span className="svc-section-tag">Numbers</span>
            </div>
          </MotionWrapper>
          <div className="stats-grid">
            {service.stats.map((stat, index) => (
              <MotionWrapper key={index} delay={0.1 * index}>
                <div className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </section>
      )}

      {/* ══ LISTINGS ══════════════════════════════ */}
      {service.listings && (
        <section className="svc-section container">
          <MotionWrapper>
            <div className="svc-section-header">
              <h2>Featured Listings</h2>
              <span className="svc-section-tag">Available Now</span>
            </div>
          </MotionWrapper>
          <div className="listings-grid">
            {service.listings.map((listing, index) => (
              <MotionWrapper key={index} delay={0.1 * (index % 3)}>
                <div className="listing-card">
                  {listing.image && (
                    <div className="listing-image">
                      <img src={listing.image} alt={listing.title} />
                      <span className="listing-badge">{listing.type}</span>
                    </div>
                  )}
                  <div className="listing-info">
                    <h4>{listing.title}</h4>
                    <p className="listing-location">📍 {listing.location}</p>
                    <div className="listing-footer">
                      <span className="listing-price">{listing.price}</span>
                      <Link
                        href={`https://wa.me/919999999999?text=Interested%20in%20${encodeURIComponent(listing.title)}`}
                        className="btn btn-outline btn-sm"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </section>
      )}

      {/* ══ SPECIAL FEATURE ═══════════════════════ */}
      {service.specialFeature && (
        <section className="svc-section container">
          <MotionWrapper delay={0.2}>
            <div className="special-feature-banner">{service.specialFeature}</div>
          </MotionWrapper>
        </section>
      )}

      {/* ══ CTA ═══════════════════════════════════ */}
      <section className="service-cta-section">
        <div className="container">
          <MotionWrapper>
            <h2>{service.ctaTitle}</h2>
            <p>{service.ctaText}</p>
            <a
              href={`https://wa.me/919999999999?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(service.title)}%20services`}
              className="btn btn-primary"
              style={{ fontSize: '16px', padding: '16px 44px' }}
            >
              {service.ctaButtonText || "Contact Us via WhatsApp"}
            </a>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
