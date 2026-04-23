"use client";

import React, { useState } from "react";
import { useLoginMutation, useGetMeQuery } from "@/store/apiSlice";
import { apiSlice } from "@/store/apiSlice";

interface DynamicServiceFormProps {
  serviceSlug: string;
  serviceTitle: string;
}

export default function DynamicServiceForm({ serviceSlug, serviceTitle }: DynamicServiceFormProps) {
  const { data: user } = useGetMeQuery(undefined, {
    skip: typeof window === 'undefined' || !localStorage.getItem("token")
  });
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pre-fill user data if logged in
  React.useEffect(() => {
    if (user) {
      setFormData((prev: any) => ({
        ...prev,
        email: user.email,
        phone: user.phone || ""
      }));
    }
  }, [user]);

  // If user is logged in and not a customer, don't show the form
  if (user && user.role !== 'customer') {
    return null;
  }

  const handleNext = (field: string, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);

    // Education Logic
    if (serviceSlug === "education") {
      if (step === 1 && ["school", "college", "tuitions"].includes(value)) {
        setStep(2);
        return;
      }
      if (step === 2 && value === "college") {
        setStep(3);
        return;
      }
    }

    // Generic step transitions
    if (step === 1) {
      if (serviceSlug === "solar" || serviceSlug === "travel" || serviceSlug === "renovation" || 
          serviceSlug === "business-legal" || serviceSlug === "advertising" || serviceSlug === "property") {
        setStep(2);
        return;
      }
    }

    // Always go to contact form as the final step
    if (serviceSlug === "education") {
      if (step === 1 || step === 2 || step === 3) {
        setStep(4);
      }
    } else {
      if (step === 1) {
        setStep(2);
      }
    }
  };

  const submitForm = async (finalData: any) => {
    setIsSubmitting(true);
    try {
      if (!finalData.email || !finalData.phone) {
        alert("Please provide both email and phone number.");
        setIsSubmitting(false);
        return;
      }

      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050/api'}/requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          service: serviceSlug,
          formData: finalData
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="glass" style={{ padding: '40px', textAlign: 'center', borderRadius: '24px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 className="accent-text">Inquiry Sent!</h3>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>
          Our Solar experts will reach out to you within 24 hours.
        </p>
        <button className="btn btn-primary" style={{ marginTop: '24px' }} onClick={() => { setStep(1); setIsSuccess(false); setFormData({}); }}>
          Submit Another Request
        </button>
      </div>
    );
  }

  const renderContactForm = (currentStep: number) => (
    <div className="form-step">
      <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Contact Details</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            value={formData.email || ""}
            required 
            style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--color-secondary)', border: '1px solid var(--color-border)', color: 'white' }}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Phone Number</label>
          <input 
            type="tel" 
            placeholder="+91 00000 00000" 
            value={formData.phone || ""}
            required 
            style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--color-secondary)', border: '1px solid var(--color-border)', color: 'white' }}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <button 
          className="btn btn-primary" 
          style={{ width: '100%', marginTop: '12px' }}
          onClick={() => submitForm(formData)}
        >
          {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
        </button>
      </div>
      <button className="back-link" style={{ marginTop: '20px', border: 'none', background: 'none' }} onClick={() => setStep(currentStep - 1)}>← Back</button>
    </div>
  );

  const renderSolarForm = () => {
    if (step === 1) {
      const options = [
        { id: "on-grid", label: "On-Grid System", icon: "🔌" },
        { id: "off-grid", label: "Off-Grid System", icon: "🔋" },
        { id: "hybrid", label: "Hybrid Solar", icon: "🔄" },
        { id: "residential", label: "Residential Setup", icon: "🏠" },
        { id: "commercial", label: "Commercial Setup", icon: "🏛️" },
        { id: "maintenance", label: "Maintenance / AMC", icon: "🛠️" },
      ];

      return (
        <div className="form-step">
          <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Where would you like to install?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {options.map(opt => (
              <button 
                key={opt.id} 
                className="glass-button" 
                onClick={() => handleNext("installationType", opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--color-border)',
                  color: 'white',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '24px' }}>{opt.icon}</span>
                <span style={{ fontWeight: '600' }}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 2) return renderContactForm(2);
  };

  const renderTravelForm = () => {
    if (step === 1) {
      const options = [
        { id: "transport", label: "Bus / Taxi / Traveller", icon: "🚐" },
        { id: "india", label: "All India Tour", icon: "🇮🇳" },
        { id: "north-india", label: "North Indian Tour", icon: "🏛️" },
        { id: "4-dham", label: "Tirath Dham / 4 Dham", icon: "🙏" },
        { id: "mountains", label: "Himachal & Uttarakhand", icon: "🏔️" },
        { id: "paradise", label: "J&K and Ladakh", icon: "❄️" },
      ];

      return (
        <div className="form-step">
          <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>What kind of trip are you planning?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {options.map(opt => (
              <button 
                key={opt.id} 
                className="glass-button" 
                onClick={() => handleNext("tripType", opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--color-border)',
                  color: 'white',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '24px' }}>{opt.icon}</span>
                <span style={{ fontWeight: '600' }}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 2) return renderContactForm(2);
  };

  const renderRenovationForm = () => {
    if (step === 1) {
      const options = [
        { id: "interior", label: "Interior & Exterior", icon: "🎨" },
        { id: "painting", label: "Painting & Proofing", icon: "🖌️" },
        { id: "flooring", label: "Designer Flooring", icon: "🪵" },
        { id: "kitchen", label: "Modular Kitchen", icon: "👩‍🍳" },
        { id: "electric", label: "Electric & Plumbing", icon: "⚡" },
        { id: "structural", label: "Structural Repairs", icon: "🏘️" },
      ];

      return (
        <div className="form-step">
          <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Which renovation service do you need?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {options.map(opt => (
              <button 
                key={opt.id} 
                className="glass-button" 
                onClick={() => handleNext("serviceType", opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--color-border)',
                  color: 'white',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '24px' }}>{opt.icon}</span>
                <span style={{ fontWeight: '600' }}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 2) return renderContactForm(2);
  };

  const renderBusinessForm = () => {
    if (step === 1) {
      const options = [
        { id: "taxation", label: "Taxation & Reg", icon: "📑" },
        { id: "company", label: "Company Reg (Pvt/Ltd)", icon: "🏢" },
        { id: "msme", label: "Firm / MSME / LLP", icon: "📝" },
        { id: "startup", label: "Startup / FSSAI", icon: "🚀" },
        { id: "legal", label: "Investment & Legal", icon: "⚖️" },
      ];

      return (
        <div className="form-step">
          <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Which business service do you need?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {options.map(opt => (
              <button 
                key={opt.id} 
                className="glass-button" 
                onClick={() => handleNext("businessService", opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--color-border)',
                  color: 'white',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '24px' }}>{opt.icon}</span>
                <span style={{ fontWeight: '600' }}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 2) return renderContactForm(2);
  };

  const renderAdvertisingForm = () => {
    if (step === 1) {
      const adTypes = [
        "Transit Media", "Outdoor Media", "BTL / Human Ad", 
        "Society Branding", "Radio Advertising", "Newspaper Ads", 
        "Printing Services", "Digital Marketing", "Manufacturing"
      ];

      return (
        <div className="form-step">
          <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Tell us about your Campaign</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--color-text-muted)' }}>Business Name</label>
              <input 
                type="text" 
                placeholder="Company Name" 
                style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--color-secondary)', border: '1px solid var(--color-border)', color: 'white' }}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--color-text-muted)' }}>Interested Service</label>
                <select 
                  style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--color-secondary)', border: '1px solid var(--color-border)', color: 'white' }}
                  onChange={(e) => setFormData({ ...formData, adType: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {adTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--color-text-muted)' }}>Approx Budget (₹)</label>
                <input 
                  type="text" 
                  placeholder="e.g. 50,000" 
                  style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--color-secondary)', border: '1px solid var(--color-border)', color: 'white' }}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--color-text-muted)' }}>Campaign Goals</label>
              <textarea 
                rows={3} 
                placeholder="Tell us what you want to achieve..." 
                style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--color-secondary)', border: '1px solid var(--color-border)', color: 'white' }}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '12px' }}
              onClick={() => {
                if (!formData.businessName || !formData.adType) {
                  alert("Please fill in Business Name and select a Service.");
                  return;
                }
                handleNext("stage", "details-collected");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      );
    }

    if (step === 2) return renderContactForm(2);
  };

  const renderPropertyForm = () => {
    if (step === 1) {
      const options = [
        { id: "residential", label: "Buy Residential", icon: "🔑" },
        { id: "commercial", label: "Buy Commercial", icon: "🏢" },
        { id: "rent", label: "Rental / Lease", icon: "🏠" },
        { id: "pg", label: "PG / Room", icon: "🛏️" },
        { id: "valuation", label: "Property Valuation", icon: "📐" },
        { id: "legal", label: "Legal Check", icon: "📜" },
      ];

      return (
        <div className="form-step">
          <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>What are you looking for?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {options.map(opt => (
              <button 
                key={opt.id} 
                className="glass-button" 
                onClick={() => setFormData({ ...formData, propertyType: opt.id })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: formData.propertyType === opt.id ? 'var(--color-accent-dim)' : 'rgba(255,255,255,0.03)',
                  border: formData.propertyType === opt.id ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                  color: 'white',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '24px' }}>{opt.icon}</span>
                <span style={{ fontWeight: '600' }}>{opt.label}</span>
              </button>
            ))}
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--color-text-muted)' }}>Requirement Details</label>
            <textarea 
              rows={3} 
              placeholder="Budget, Preferred Location, BHK, etc..." 
              style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--color-secondary)', border: '1px solid var(--color-border)', color: 'white' }}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
            ></textarea>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '20px' }}
            onClick={() => {
              if (!formData.propertyType || !formData.requirement) {
                alert("Please select a property type and enter your requirements.");
                return;
              }
              handleNext("stage", "requirements-collected");
            }}
          >
            Continue
          </button>
        </div>
      );
    }

    if (step === 2) return renderContactForm(2);
  };

  const renderEducationForm = () => {
    if (step === 1) {
      const options = [
        { id: "school", label: "School Admission", icon: "🏫" },
        { id: "college", label: "College Admission", icon: "🏛️" },
        { id: "tuitions", label: "Tutoring / Tuitions", icon: "📖" },
        { id: "staff", label: "Staff Recruitment", icon: "👥" },
        { id: "career", label: "Career Panel", icon: "🎯" },
        { id: "yoga", label: "Yoga or Fitness", icon: "🧘" },
        { id: "skill", label: "Skill Development", icon: "🔬" },
        { id: "abroad", label: "Study Abroad", icon: "🌍" },
      ];

      return (
        <div className="form-step">
          <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>What do you need help with?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {options.map(opt => (
              <button 
                key={opt.id} 
                className="glass-button" 
                onClick={() => handleNext("needHelp", opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--color-border)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '24px' }}>{opt.icon}</span>
                <span style={{ fontWeight: '600' }}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 2) {
      if (formData.needHelp === "school" || formData.needHelp === "tuitions") {
        const standards = ["KG-5th", "6th-8th", "9th-10th", "11th-12th (Science)", "11th-12th (Commerce)", "11th-12th (Arts)"];
        return (
          <div className="form-step">
            <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Select Standard</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {standards.map(s => (
                <button key={s} className="glass-button" onClick={() => handleNext("standard", s)}
                  style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', color: 'white', cursor: 'pointer' }}
                >
                  {s}
                </button>
              ))}
            </div>
            <button className="back-link" style={{ marginTop: '20px', border: 'none', background: 'none' }} onClick={() => setStep(1)}>← Back</button>
          </div>
        );
      }

      if (formData.needHelp === "college") {
        return (
          <div className="form-step">
            <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Select Level</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <button className="glass-button" onClick={() => handleNext("level", "UG")} style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', color: 'white', cursor: 'pointer', fontSize: '18px', fontWeight: '700' }}>Undergraduate (UG)</button>
              <button className="glass-button" onClick={() => handleNext("level", "PG")} style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', color: 'white', cursor: 'pointer', fontSize: '18px', fontWeight: '700' }}>Postgraduate (PG)</button>
            </div>
            <button className="back-link" style={{ marginTop: '20px', border: 'none', background: 'none' }} onClick={() => setStep(1)}>← Back</button>
          </div>
        );
      }
    }

    if (step === 3) {
      const courses = formData.level === "UG" 
        ? ["B.Tech / BE", "MBBS", "BCA / BSc IT", "BBA / B.Com", "BA", "B.Arch", "B.Des", "Other"]
        : ["M.Tech", "MBA", "MCA", "MSc", "MA", "MD/MS", "Other"];
      
      return (
        <div className="form-step">
          <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Select {formData.level} Course</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {courses.map(c => (
              <button key={c} className="glass-button" 
                onClick={() => {
                  if (c === "Other") {
                    setFormData({ ...formData, course: "Other" });
                  } else {
                    handleNext("course", c);
                  }
                }}
                style={{ 
                  padding: '14px', 
                  borderRadius: '12px', 
                  background: formData.course === c ? 'var(--color-accent-dim)' : 'rgba(255,255,255,0.03)', 
                  border: formData.course === c ? '1px solid var(--color-accent)' : '1px solid var(--color-border)', 
                  color: 'white', 
                  cursor: 'pointer' 
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {formData.course === "Other" && (
            <div style={{ marginTop: '20px' }}>
              <input 
                type="text" 
                placeholder="Enter your course name" 
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  background: 'var(--color-secondary)',
                  border: '1px solid var(--color-border)',
                  color: 'white',
                  marginBottom: '12px'
                }}
                onChange={(e) => setFormData({ ...formData, otherCourse: e.target.value })}
              />
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => handleNext("course", `Other: ${formData.otherCourse}`)}
              >
                Continue
              </button>
            </div>
          )}

          <button className="back-link" style={{ marginTop: '20px', border: 'none', background: 'none' }} onClick={() => setStep(2)}>← Back</button>
        </div>
      );
    }

    if (step === 4) return renderContactForm(4);
  };

  return (
    <div className="dynamic-service-form glass" style={{ padding: '32px', borderRadius: '24px', position: 'relative' }}>
      {isSubmitting && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '24px' }}>
          <div className="accent-text">Submitting...</div>
        </div>
      )}
      
      <div style={{ marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
        <h2 className="accent-text" style={{ fontSize: '24px' }}>Inquire for {serviceTitle}</h2>
      </div>

      {serviceSlug === "education" ? renderEducationForm() : 
       serviceSlug === "solar" ? renderSolarForm() : 
       serviceSlug === "travel" ? renderTravelForm() : 
       serviceSlug === "renovation" ? renderRenovationForm() : 
       serviceSlug === "business-legal" ? renderBusinessForm() : 
       serviceSlug === "advertising" ? renderAdvertisingForm() : 
       serviceSlug === "property" ? renderPropertyForm() : (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p style={{ color: 'var(--color-text-muted)' }}>Custom form for {serviceTitle} is coming soon.</p>
          <a href="https://wa.me/919999999999" className="btn btn-primary" style={{ marginTop: '16px' }}>Chat on WhatsApp</a>
        </div>
      )}
    </div>
  );
}
