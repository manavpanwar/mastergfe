export interface Highlight {
  icon: string;
  title: string;
  desc: string;
  image?: string;
  objectPosition?: string;
  priority?: boolean;
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
  heroObjectPosition?: string;
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
    heroImage: "/images/education_hero.png",
    heroObjectPosition: "center 80%",
    highlights: [
      { icon: "🏫", title: "School & College Admissions", desc: "Expert guidance for KG-12, UG, and PG admissions in top-tier institutions nationwide.", image: "/images/screen.png" },
      { icon: "👨‍🏫", title: "Elite Tutoring & Coaching", desc: "Personalized home and online tutoring for core subjects, competitive exams, and language proficiency.", image: "/images/tutoring.png" },
      { icon: "💼", title: "Staff & Career Panel", desc: "Connecting schools and colleges with top-tier educators, professors, and administrative professionals.", image: "/images/career.png", objectPosition: "center 70%" },
      { icon: "🧘", title: "Yoga & Fitness Training", desc: "Certified gym trainers and yoga instructors for personal coaching and institutional health programs.", image: "/images/yoga.png" },
      { icon: "🔬", title: "Skill Development", desc: "Vocational training and skill-based workshops to bridge the gap between academia and industry.", image: "/images/skill dev.png" },
      { icon: "🌍", title: "Study Abroad Support", desc: "End-to-end assistance for international admissions, visa processing, and pre-departure orientation.", image: "/images/abroad.png" }
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
    heroImage: "/images/solar_hero.png",
    highlights: [
      { icon: "🔌", title: "On-Grid Systems", desc: "Maximize savings and earn credits by feeding excess solar energy back into the utility grid.", image: "/images/ongridsolar.jpeg", priority: true },
      { icon: "🔋", title: "Off-Grid Solutions", desc: "Independent power systems with high-capacity battery storage for remote locations and 24/7 backup.", image: "/images/offgridsolar.png" },
      { icon: "🔄", title: "Hybrid Solar Power", desc: "The best of both worlds — grid-connected efficiency with the security of battery storage.", image: "/images/hybridsolar.jpeg" },
      { icon: "🏠", title: "Residential Installation", desc: "Custom rooftop solar setups designed to slash your monthly electricity bills by up to 90%.", image: "/images/residsolar.jpeg" },
      { icon: "🏛️", title: "Commercial & Industrial", desc: "Large-scale solar plants for factories, malls, and offices to reduce operational costs and carbon footprint.", image: "/images/commsolar.jpeg" },
      { icon: "🛠️", title: "Maintenance & AMC", desc: "Routine cleaning, performance monitoring, and rapid repair services to ensure maximum efficiency.", image: "/images/maintsolar.jpeg" }
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
      { icon: "🚐", title: "Bus / Taxi / Traveller Booking", desc: "Wide range of AC Buses, Taxis, and Luxury Travellers for group family trips and corporate tours.", image: "/images/travellertravel.jpeg", priority: true },
      { icon: "🇮🇳", title: "All India Tour Packages", desc: "Curated experiences across the diverse landscapes of India, from coastal retreats to cultural hubs.", image: "/images/allindtravel.jpeg" },
      { icon: "🏛️", title: "North Indian Tour Packages", desc: "Explore the heritage and scenic beauty of North India with our expert-guided itineraries.", image: "/images/northindiatravel.jpeg" },
      { icon: "🙏", title: "Tirath Dham / 4 Dham", desc: "Spiritual journeys to the sacred 4 Dhams and various religious sites across India with full logistical support.", image: "/images/4dhamtravel.jpeg" },
      { icon: "🏔️", title: "Himachal & Uttarakhand", desc: "Breathtaking mountain escapes, hill station tours, and adventure packages in the heart of the Himalayas.", image: "/images/himachaltravel.jpeg" },
      { icon: "❄️", title: "J&K and Ladakh", desc: "Exclusive tours to the paradise of Kashmir and the rugged, majestic terrains of Leh and Ladakh.", image: "/images/j&ktravel.jpeg" }
    ],
    benefits: [
      "Verified local guides with deep regional knowledge",
      "24/7 roadside assistance and travel support",
      "All-inclusive packages (Stay + Food + Transport)",
      "Strict safety and hygiene protocols",
      "Flexible modification and cancellation policies"
    ],
    heroImage: "/images/travel_hero.png",
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
    heroImage: "/images/renovation_hero.png",
    highlights: [
      { icon: "🎨", title: "Interior & Exterior Design", desc: "Modern aesthetic overhauls, 3D visualization, and structural modifications for a fresh look.", image: "/images/intandextrenovation.jpeg", priority: true },
      { icon: "🖌️", title: "Painting & Waterproofing", desc: "Premium texture paints and advanced chemical waterproofing to protect your home for years.", image: "/images/paintrenovation.jpeg" },
      { icon: "🪵", title: "Designer Flooring", desc: "Installation of Italian marble, hardwood, anti-skid tiles, and luxury vinyl flooring.", image: "/images/desghinfloorrenovation.jpeg" },
      { icon: "👩‍🍳", title: "Modular Kitchens", desc: "Space-saving, ergonomic kitchen designs with soft-close cabinetry and premium hobs.", image: "/images/kitchenrenovation.jpeg" },
      { icon: "⚡", title: "Electrical & Plumbing", desc: "Complete concealed wiring, luxury lighting fixtures, and high-pressure plumbing systems.", image: "/images/electricandplumrenovation.jpeg" },
      { icon: "🏘️", title: "Structural Repairs", desc: "Fixing wall cracks, dampness treatment, and structural strengthening of old buildings.", image: "/images/structurerenovation.jpeg" }
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
    title: "Eco-Friendly Scrap management",
    icon: "♻️",
    tagline: "Professional Doorstep Scrap Collection & Industrial Waste Management.",
    heroImage: "/images/scrap_hero.png",
    highlights: [
      {
        title: "Paper & Cardboard",
        icon: "📰",
        desc: "Newspapers, Office A3/A4 documents, Books, and Cardboard boxes.",
        image: "/images/cardboardscrap.jpeg",
        priority: true
      },
      {
        title: "Metals & Alloys",
        icon: "🏗️",
        desc: "Iron, Copper, Aluminum, Brass, Steel, and Heavy industrial scrap.",
        image: "/images/metalscrap.jpeg"
      },
      {
        title: "Home Appliances",
        icon: "🧺",
        desc: "Washing Machines (Auto/Semi), Fridges, ACs, Geysers, and Gym equipment.",
        image: "/images/largeappscrap.jpeg"
      },
      {
        title: "IT & E-Waste",
        icon: "💻",
        desc: "Laptops, CPUs, Printers, Monitors, LCD/LED TVs, and used Batteries.",
        image: "/images/itscrap.jpeg"
      },
      {
        title: "Small Appliances",
        icon: "🔌",
        desc: "Microwaves, Fans, Grinders, Vacuum cleaners, and Routers/Modems.",
        image: "/images/smallappscrap.jpeg"
      },
      {
        title: "Vehicle Scrap",
        icon: "🚗",
        desc: "Official handling and best scrap value for Bikes, Scooters, and Cars.",
        image: "/images/vehichlescrap.jpeg"
      }
    ],
    benefits: [
      "Accurate Digital Weighing (Digital Scale)",
      "Trained & Verified Pick-up Crew (Verified Staff)",
      "Instant Payment via UPI or Cash",
      "Formal Documentation for Businesses",
      "Competitive Market Prices",
      "Eco-Friendly Sustainable Recycling"
    ],
    steps: [
      { title: "Schedule Pickup", desc: "Select a convenient date and time via phone or WhatsApp." },
      { title: "Doorstep Collection", desc: "Our trained professional crew arrives with digital weighing scales." },
      { title: "Instant Payment", desc: "Get paid instantly via UPI or Cash before our vehicle leaves." }
    ],
    stats: [
      { label: "Scrap Processed", value: "250+ Tons" },
      { label: "Happy Households", value: "10K+" },
      { label: "Industrial Clients", value: "500+" },
      { label: "Environment Saved", value: "Verified" }
    ],
    ctaTitle: "Best Value for your Scrap",
    ctaText: "Join thousands of green heroes making a difference. Schedule your first pickup today.",
    ctaButtonText: "Schedule My Pickup",
    seoTitle: "Best Scrap Dealer in Delhi NCR | Doorstep Pickup - Master G",
    seoDescription: "Sell your household and industrial scrap online with Master G. We offer the best rates for Paper, Metal, E-Waste, and Appliances with instant payment and digital weighing.",
    keywords: ["scrap dealer delhi", "sell scrap online", "e-waste recycling", "metal scrap rates", "doorstep scrap pickup", "industrial waste management", "ScrapUncle alternative"]
  },
  "business-legal": {
    slug: "business-legal",
    title: "Business & Legal",
    icon: "⚖️",
    tagline: "Simplify your business journey with expert legal and registration consultancy.",
    heroImage: "/images/business_legal_hero.png",
    highlights: [
      { icon: "📑", title: "Taxation & Registration", desc: "Expert guidance for GST, Income Tax registration, and comprehensive taxation planning.", image: "/images/taxbuiss&leg.jpeg", priority: true },
      { icon: "🏢", title: "Company Registration", desc: "Hassle-free incorporation for Private Ltd, Public Ltd, and One Person Company (OPC) structures.", image: "/images/companybuis&legal.jpeg" },
      { icon: "📝", title: "Firm / MSME / LLP", desc: "Official registration for partnership firms, MSME (UDYAM), and Limited Liability Partnerships.", image: "/images/msmebuis&legal.jpeg" },
      { icon: "🚀", title: "Startup India / FSSAI", desc: "Specialized licensing for startups (DPIIT recognition) and FSSAI food safety certifications.", image: "/images/startupbuiss&legal.jpeg" },
      { icon: "⚖️", title: "Investment & Legal", desc: "Senior legal consultancy for business investments, contract drafting, and corporate compliance.", image: "/images/investmentbuiss&legal.jpeg" }
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
    heroImage: "/images/advertising_hero.png",
    highlights: [
      { icon: "🚌", title: "Transit Media Advertising", desc: "Auto, Bus, Metro, and Train branding for massive urban reach.", image: "/images/transitad.jpeg", priority: true },
      { icon: "🏗️", title: "Outdoor Media", desc: "Hoardings, Glow Boards, and Bus Shelter placements in prime city locations.", image: "/images/outdoorad.jpeg" },
      { icon: "🚶", title: "Human Advertising / BTL", desc: "Direct engagement via Human Billboards, Pamphlet distribution, and Canopy promotions.", image: "/images/humanad.jpeg" },
      { icon: "🏙️", title: "Society / RWA Gate", desc: "Hyper-local branding within premium residential complexes and gated communities." },
      { icon: "📻", title: "Radio Advertising", desc: "Prime-time jingles and RJ mentions across top FM stations for maximum recall.", image: "/images/radioad.jpeg" },
      { icon: "📰", title: "Newspaper Advertising", desc: "Full-page ads, inserts, and classifieds in leading national and regional dailies.", image: "/images/newsppad.jpeg" },
      { icon: "🖨️", title: "Printing Services", desc: "High-quality corporate brochures, visiting cards, and promotional merchandise.", image: "/images/printingad.jpeg" },
      { icon: "🖼️", title: "Flex Printing", desc: "Large-format vinyl banners, event backdrops, and environmental branding.", image: "/images/flexad.jpeg" },
      { icon: "🛠️", title: "Manufacturing / Promo Assets", desc: "Custom production of canopies, standees, and promotional event hardware.", image: "/images/standad.jpeg" },
      { icon: "🚀", title: "Digital Marketing", desc: "Data-driven SEO, Google Ads, Meta Ads, and Brand Strategy dominance.", image: "/images/digitalad.jpeg" }
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
    seoTitle: "Advertising & Digital Marketing Services | Premium Ad Agency India",
    seoDescription: "Unlock exponential growth with Master G Consultancy's full-service advertising agency. From Transit Media and Outdoor Ads to high-impact Digital Marketing and BTL promotions.",
    keywords: ["advertising agency Delhi NCR", "transit media advertising", "outdoor media India", "digital marketing services", "BTL promotions", "printing services", "brand strategy", "lead generation India"]
  },
  property: {
    slug: "property",
    title: "Property Excellence",
    icon: "🏠",
    tagline: "Your trusted partner for buying, selling, and leasing premium real estate.",
    heroImage: "/images/property_hero.png",
    highlights: [
      { icon: "🔑", title: "Residential Sales", desc: "Exclusive portfolio of Luxury Flats, Independent Houses, and residential plots in prime sectors.", image: "/images/resiprop.jpeg", priority: true },
      { icon: "🏢", title: "Commercial Space", desc: "High-ROI Retail Shops, Office Spaces, and Industrial Land for your business expansion.", image: "/images/commprop.jpeg" },
      { icon: "🏠", title: "Rental & Leasing", desc: "End-to-end management for tenants and owners, ensuring fair deals and verified backgrounds.", image: "/images/rentalprop.jpeg" },
      { icon: "🛏️", title: "Dedicated PG/Rooms", desc: "Quality Room rentals and PG collaborations for students and working professionals (Girls/Boys).", image: "/images/pgprop.jpeg" },
      { icon: "📐", title: "Property Valuation", desc: "Professional market analysis and valuation reports for informed investment decisions.", image: "/images/valuationprop.jpeg" },
      { icon: "📜", title: "Legal Verification", desc: "Title deeds check, RERA compliance, and secondary market due diligence services.", image: "/images/legalprop.jpeg" }
    ],
    ctaTitle: "Find Your Perfect Space",
    ctaText: "Browse our handpicked listings or list your property with us to reach serious buyers today.",
    ctaButtonText: "Find Property",
    seoTitle: "Best Property Consultancy & Real Estate Services India | Master G",
    seoDescription: "Expet property consulting for buying, selling, and renting luxury flats, commercial shops, and PG accommodations. Your trusted partner for prime real estate investments.",
    keywords: ["real estate consultancy", "property for sale India", "commercial shop for rent", "luxury 3BHK flats", "PG for girls and boys", "property investment legal help"]
  }
};
