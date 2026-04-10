export interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

export interface Step {
  title: string;
  desc: string;
}

export interface GalleryItem {
  label: string;
  before: string;
  after: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Listing {
  title: string;
  type: string;
  price: string;
  location: string;
  image?: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  highlights: Highlight[];
  benefits?: string[];
  comparisons?: GalleryItem[];
  steps?: Step[];
  stats?: Stat[];
  listings?: Listing[];
  specialFeature?: string;
  heroImage?: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText?: string;

  // SEO Fields
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const SERVICES: Record<string, Service> = {
  education: {
    slug: "education",
    title: "Educational Services",
    icon: "🎓",
    tagline: "Empowering students and professionals through strategic academic and career guidance.",
    highlights: [
      { icon: "🏫", title: "School & College Admissions", desc: "Expert guidance for KG-12, UG, and PG admissions in top-tier institutions nationwide." },
      { icon: "👨‍🏫", title: "Elite Tutoring & Coaching", desc: "Personalized home and online tutoring for core subjects, competitive exams, and language proficiency." },
      { icon: "💼", title: "Staff & Career Panel", desc: "Connecting schools and colleges with top-tier educators, professors, and administrative professionals." },
      { icon: "🧘", title: "Yoga & Fitness Training", desc: "Certified gym trainers and yoga instructors for personal coaching and institutional health programs." },
      { icon: "🔬", title: "Skill Development", desc: "Vocational training and skill-based workshops to bridge the gap between academia and industry." },
      { icon: "🌍", title: "Study Abroad Support", desc: "End-to-end assistance for international admissions, visa processing, and pre-departure orientation." }
    ],
    benefits: [
      "Access to exclusive institutional networks",
      "One-on-one mentorship from industry experts",
      "Comprehensive test preparation (JEE, NEET, CUET)",
      "Certified and verified instructors",
      "Flexible learning schedules tailored to your lifestyle"
    ],
    ctaTitle: "Ignite Your Future",
    ctaText: "Ready to take the next step in your academic or professional journey? Our experts are here to guide you.",
    ctaButtonText: "Get Counseling",
    seoTitle: "Best Educational Consultant in India | College Admissions & Tutoring Master G",
    seoDescription: "Leading educational consultancy in India providing admission guidance for schools and colleges, NEET/JEE coaching, staff recruitment for universities, and career counseling.",
    keywords: ["educational consultant India", "college admission guidance", "UG PG career consulting", "top schools admission help", "home tutoring services", "yoga fitness coaching"]
  },
  solar: {
    slug: "solar",
    title: "Solar Energy Solutions",
    icon: "☀️",
    tagline: "Sustainable, cost-effective power solutions for a cleaner and brighter tomorrow.",
    highlights: [
      { icon: "🔌", title: "On-Grid Systems", desc: "Maximize savings and earn credits by feeding excess solar energy back into the utility grid." },
      { icon: "🔋", title: "Off-Grid Solutions", desc: "Independent power systems with high-capacity battery storage for remote locations and 24/7 backup." },
      { icon: "🔄", title: "Hybrid Solar Power", desc: "The best of both worlds — grid-connected efficiency with the security of battery storage." },
      { icon: "🏠", title: "Residential Installation", desc: "Custom rooftop solar setups designed to slash your monthly electricity bills by up to 90%." },
      { icon: "🏛️", title: "Commercial & Industrial", desc: "Large-scale solar plants for factories, malls, and offices to reduce operational costs and carbon footprint." },
      { icon: "🛠️", title: "Maintenance & AMC", desc: "Routine cleaning, performance monitoring, and rapid repair services to ensure maximum efficiency." }
    ],
    benefits: [
      "Zero-carbon footprint and eco-friendly energy",
      "Huge savings on high commercial tariffs",
      "Government subsidies and tax incentives available",
      "High-durability panels with 25-year performance warranty",
      "Smart monitoring via mobile app integration"
    ],
    stats: [
      { label: "Systems Installed", value: "250+" },
      { label: "CO2 Reduction", value: "1500 Tons" },
      { label: "Electricity Savings", value: "₹2 Cr+" },
      { label: "Happy Clients", value: "100%" }
    ],
    ctaTitle: "Go Solar Today",
    ctaText: "Calculate your potential savings and get a custom solar quote for your property.",
    ctaButtonText: "Get Solar Quote",
    seoTitle: "Solar Rooftop Installation Services India | On-Grid & Off-Grid Master G",
    seoDescription: "Switch to clean energy with the best solar rooftop installation in India. We offer on-grid, off-grid, and hybrid solar systems for residential and commercial properties with expert maintenance.",
    keywords: ["solar panel installation India", "rooftop solar for home", "commercial solar company", "best solar EPC India", "off-grid solar battery", "solar maintenance services"]
  },
  travel: {
    slug: "travel",
    title: "Tours & Travel",
    icon: "✈️",
    tagline: "Discover the unseen landscapes and cultural heritage with curated travel experiences.",
    highlights: [
      { icon: "🚐", title: "Luxury Transport Booking", desc: "Wide range of AC Buses, Taxis, and Luxury Travellers for group family trips and corporate tours." },
      { icon: "🏔️", title: "Himalayan Expeditions", desc: "Exclusive packages for Himachal Pradesh, Uttarakhand, Kashmir, and the rugged terrains of Ladakh." },
      { icon: "🕌", title: "North India Heritage", desc: "Cultural tours covering the Golden Triangle, Rajasthan's forts, and the spiritual ghats of Varanasi." },
      { icon: "🗺️", title: "Customized Itineraries", desc: "Tailor-made solo, family, or honeymoon trips designed around your preferences and budget." },
      { icon: "🏨", title: "Hotel & Resort Stays", desc: "Handpicked boutique hotels and luxury resorts at the most competitive rates." },
      { icon: "🧗", title: "Adventure & Trekking", desc: "Guided treks, camping expeditions, and river rafting packages in the heart of the mountains." }
    ],
    benefits: [
      "Verified local guides with deep regional knowledge",
      "24/7 roadside assistance and travel support",
      "All-inclusive packages (Stay + Food + Transport)",
      "Strict safety and hygiene protocols",
      "Flexible modification and cancellation policies"
    ],
    heroImage: "/images/travel-hero.png",
    ctaTitle: "Start Your Journey",
    ctaText: "The world is calling. Where would you like to go next? Let us handle the planning.",
    ctaButtonText: "Book Your Trip",
    seoTitle: "North India Tour Packages | Manali Leh Ladakh Travel Agency Master G",
    seoDescription: "Explore the best of North India with our curated tour packages. Luxury travellers, group buses, and family trips to Himachal, Uttarakhand, and Kashmir. Book your adventure now.",
    keywords: ["North India travel agency", "Shimla Manali tour packages", "Leh Ladakh trip booking", "Kashmir luxury tour", "luxury tempo traveller rental", "inbound tourism India"]
  },
  renovation: {
    slug: "renovation",
    title: "Home Renovation",
    icon: "🔨",
    tagline: "Breathe new life into your spaces with expert design and premium craftsmanship.",
    highlights: [
      { icon: "🎨", title: "Interior & Exterior Design", desc: "Modern aesthetic overhauls, 3D visualization, and structural modifications for a fresh look." },
      { icon: "🖌️", title: "Painting & Waterproofing", desc: "Premium texture paints and advanced chemical waterproofing to protect your home for years." },
      { icon: "🪵", title: "Designer Flooring", desc: "Installation of Italian marble, hardwood, anti-skid tiles, and luxury vinyl flooring." },
      { icon: "👩‍🍳", title: "Modular Kitchens", desc: "Space-saving, ergonomic kitchen designs with soft-close cabinetry and premium hobs." },
      { icon: "⚡", title: "Electrical & Plumbing", desc: "Complete concealed wiring, luxury lighting fixtures, and high-pressure plumbing systems." },
      { icon: "🏘️", title: "Structural Repairs", desc: "Fixing wall cracks, dampness treatment, and structural strengthening of old buildings." }
    ],
    comparisons: [
      {
        label: "Living Room Transformation",
        before: "/images/reno_before.png",
        after: "/images/reno_after.png"
      }
    ],
    ctaTitle: "Revitalize Your Home",
    ctaText: "Get an expert virtual consultation and a detailed estimate for your dream project.",
    ctaButtonText: "Get Estimate",
    seoTitle: "Home & Office Renovation Services India | Interior Designers Master G",
    seoDescription: "Premium home renovation and interior design services. Expert contractors for modular kitchens, waterproof painting, luxury flooring, and electrical/plumbing repairs.",
    keywords: ["home renovation contractors India", "top interior designers", "modular kitchen designs", "house painting services", "waterproofing solutions", "office renovation services"]
  },
  scrap: {
    slug: "scrap",
    title: "Scrap & Metal Services",
    icon: "♻️",
    tagline: "Sustainable waste management and precision engineering for industrial growth.",
    highlights: [
      { icon: "🏭", title: "Industrial Scrap", desc: "Bulk collection of factory waste, heavy machinery, and metal surplus with prompt payments." },
      { icon: "💻", title: "Digital E-Waste", desc: "Responsible disposal and data destruction for IT equipment, servers, and mobile devices." },
      { icon: "🚗", title: "Vehicle Dismantling", desc: "Certified car and bike scrapping with legal RTO documentation and best scrap value." },
      { icon: "❄️", title: "Domestic Appliances", desc: "Hassle-free pickup for old ACs, Fridges, Washing Machines, and other electronics." },
      { icon: "🏗️", title: "Metal Fabrication", desc: "High-end SS, MS, Aluminium, and Brass works for construction and industrial parts." },
      { icon: "💥", title: "Laser Cutting & Bending", desc: "State-of-the-art CNC laser cutting and bending for precision metal components." }
    ],
    specialFeature: "🚚 Seamless Doorstep Pickup: We weigh, we pay, and we pickup instantly!",
    stats: [
      { label: "Waste Recycled", value: "10K Tons" },
      { label: "Metals Processed", value: "5K Tons" },
      { label: "E-waste Saved", value: "2K Units" }
    ],
    ctaTitle: "Recycle & Earn",
    ctaText: "Turn your waste into wealth while contributing to a greener planet. Schedule a pickup now.",
    ctaButtonText: "Schedule Pickup",
    seoTitle: "Industrial Scrap & E-waste Recycling India | Metal Fabrication Master G",
    seoDescription: "Professional scrap management services. We specialize in industrial scrap collection, certified e-waste recycling, vehicle scrapping, and precision metal fabrication works.",
    keywords: ["industrial scrap buyers", "e-waste recycling India", "vehicle scrap policy certificate", "bulk metal collection", "SS MS fabrication works", "CNC laser cutting services"]
  },
  "business-legal": {
    slug: "business-legal",
    title: "Business & Legal",
    icon: "⚖️",
    tagline: "Simplify your business journey with expert legal and registration consultancy.",
    highlights: [
      { icon: "📋", title: "Company Registration", desc: "Fast-track incorporation of Private Ltd, LLP, One Person Company (OPC), and Section 8 firms." },
      { icon: "🏛️", title: "MSME & Firm Reg", desc: "UDYAM registration, partnership deeds, and GST registration for small and medium businesses." },
      { icon: "🚀", title: "Startup India & FSSAI", desc: "DPIIT recognition, FSSAI (Food Safety) licenses, and Import-Export Code (IEC) registration." },
      { icon: "📑", title: "Taxation & Compliance", desc: "GST filing, Income Tax planning, and annual ROC compliances for businesses of all sizes." },
      { icon: "⚖️", title: "Legal Consultancy", desc: "Contract drafting, trademark registration, and civil/corporate legal advice from senior consultants." },
      { icon: "🛡️", title: "Intellectual Property", desc: "Protect your brand with Trademark, Copyright, and Patent filing services." }
    ],
    steps: [
      { title: "Consultation", desc: "Initial discussion to understand your business structure and requirements." },
      { title: "Document Collection", desc: "Secure gathering of necessary KyC and ownership documents." },
      { title: "Application Filing", desc: "Our experts file the official applications with relevant government portals." },
      { title: "Approval Tracking", desc: "Real-time monitoring and coordination with authorities for quick approval." },
      { title: "Final Certification", desc: "Delivery of your digital and physical certificates to your doorstep." }
    ],
    ctaTitle: "Launch Your Business",
    ctaText: "Don't let paperwork slow you down. Start your business the right way with expert support.",
    ctaButtonText: "Start My Business",
    seoTitle: "Private Ltd Company Registration India | Legal & GST Consultant Master G",
    seoDescription: "Business registration and legal consultancy services. Fast-track Pvt Ltd company incorporation, LLP registration, FSSAI license, Startup India help, and GST/Income Tax filing.",
    keywords: ["Pvt Ltd company registration", "LLP formation India", "MSME startup registration", "FSSAI food license help", "GST filing services", "trademark registration India"]
  },
  advertising: {
    slug: "advertising",
    title: "Advertising & Marketing",
    icon: "📢",
    tagline: "Strategic brand building and high-impact media campaigns for maximum reach.",
    highlights: [
      { icon: "🏛️", title: "Offline Advertising", desc: "Premium Printing, Hoardings, Flex, and Static Outdoor media in high-traffic city zones." },
      { icon: "🚀", title: "Digital Marketing", desc: "Result-driven SEO, Google Ads (PPC), and Performance Marketing to scale your online presence." },
      { icon: "🚌", title: "Transit Media", desc: "High-impact advertising on Buses, Auto-rickshaws, and other public transport networks." },
      { icon: "⭐", title: "Brand Promotion", desc: "Strategic events, product launches, and BTL activities to drive brand engagement." },
      { icon: "📱", title: "Social Media Handling", desc: "Expert management of Instagram, FB, and LinkedIn to build a loyal community." },
      { icon: "🎥", title: "Content Creation", desc: "Professional photography, video ads, and creative copywriting for your marketing needs." }
    ],
    stats: [
      { label: "Campaigns Run", value: "800+" },
      { label: "Monthly Reach", value: "5M+" },
      { label: "ROI Average", value: "3.5x" },
      { label: "Cities Active", value: "25+" }
    ],
    ctaTitle: "Dominate Your Market",
    ctaText: "Let's create a campaign that doesn't just look good, but delivers real business growth.",
    ctaButtonText: "Grow Your Business",
    seoTitle: "Best Advertising Agency India | Hoarding & Digital Marketing Master G",
    seoDescription: "Boost your brand with the best advertising and marketing services in India. We offer hoarding ads, transit media, result-driven SEO/SMO, and strategic digital campaigns.",
    keywords: ["advertising agency India", "hoarding ads company", "transit media advertising", "best SEO SMO services", "social media handling", "brand promotion India"]
  },
  property: {
    slug: "property",
    title: "Property Excellence",
    icon: "🏠",
    tagline: "Your premier destination for residential luxury and commercial investments.",
    highlights: [
      { icon: "🔑", title: "Residential Sales", desc: "Exclusive portfolio of Luxury Flats, Independent Houses, and residential plots in prime sectors." },
      { icon: "🏢", title: "Commercial Space", desc: "High-ROI Retail Shops, Office Spaces, and Industrial Land for your business expansion." },
      { icon: "🏠", title: "Rental & Leasing", desc: "End-to-end management for tenants and owners, ensuring fair deals and verified backgrounds." },
      { icon: "🛏️", title: "Dedicated PG/Rooms", desc: "Quality Room rentals and PG collaborations for students and working professionals (Girls/Boys)." },
      { icon: "📐", title: "Property Valuation", desc: "Professional market analysis and valuation reports for informed investment decisions." },
      { icon: "📜", title: "Legal Verification", desc: "Title deeds check, RERA compliance, and secondary market due diligence services." }
    ],
    listings: [
      { 
        title: "Modern 3BHK Luxury Flat", 
        type: "Residential / Sale", 
        price: "₹1.4 Cr", 
        location: "Premium City Center",
        image: "/images/prop_flat.png"
      },
      { 
        title: "Prime Corner Retail Shop", 
        type: "Commercial / Rent", 
        price: "₹55,000/mo", 
        location: "Business Hub Plaza",
        image: "/images/prop_shop.png"
      }
    ],
    ctaTitle: "Find Your Perfect Space",
    ctaText: "Browse our handpicked listings or list your property with us to reach serious buyers today.",
    ctaButtonText: "Find Property",
    seoTitle: "Best Property Consultancy & Real Estate Services India | Master G",
    seoDescription: "Expet property consulting for buying, selling, and renting luxury flats, commercial shops, and PG accommodations. Your trusted partner for prime real estate investments.",
    keywords: ["real estate consultancy", "property for sale India", "commercial shop for rent", "luxury 3BHK flats", "PG for girls and boys", "property investment legal help"]
  }
};
