import { 
  Layout, 
  Search, 
  Smartphone, 
  Zap, 
  Code2, 
  Rocket 
} from "lucide-react";
import React from "react";

export const stats = [
  { label: "Websites Built", value: "50+" },
  { label: "Industries Served", value: "25+" },
  { label: "Visitors Generated", value: "100k+" },
];

export const bentoServices = [
  {
    title: "UI/UX Design",
    description: "Bespoke interfaces that don't just look good, but feel intuitive.",
    icon: <Layout className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-2 bg-violet-50/50",
    image: "https://picsum.photos/seed/design-bento/600/400"
  },
  {
    title: "SEO Mastery",
    description: "Rank #1 where it matters.",
    icon: <Search className="w-6 h-6" />,
    className: "md:col-span-1 bg-slate-50",
  },
  {
    title: "Mobile First",
    description: "Flawless on every screen.",
    icon: <Smartphone className="w-6 h-6" />,
    className: "md:col-span-1 bg-indigo-50/50",
  },
  {
    title: "Conversion Engine",
    description: "Turning clicks into revenue with data-driven psychology.",
    icon: <Zap className="w-6 h-6" />,
    className: "md:col-span-2 bg-fuchsia-50/30",
  }
];

export const comparison = [
  { feature: "Custom 3D Mockups", us: true, others: false },
  { feature: "Mobile-First Architecture", us: true, others: "Partial" },
  { feature: "SEO Optimization", us: "Advanced", others: "Basic" },
  { feature: "Conversion Strategy", us: true, others: false },
  { feature: "Support & Maintenance", us: "24/7 Priority", others: "Email only" },
];

export const portfolio = [
  {
    title: "Urban Eats",
    industry: "Restaurant",
    result: "300% increase in online reservations.",
    image: "https://picsum.photos/seed/restaurant/800/600",
    tags: ["UI/UX", "Booking System"]
  },
  {
    title: "Skyline Realty",
    industry: "Real Estate",
    result: "50+ high-quality leads in month one.",
    image: "https://picsum.photos/seed/realestate/800/600",
    tags: ["SEO", "Lead Gen"]
  },
  {
    title: "Zenith Coaching",
    industry: "Education",
    result: "Admin work reduced by 40%.",
    image: "https://picsum.photos/seed/coaching/800/600",
    tags: ["Automation", "Web App"]
  },
  {
    title: "HealthFlow Clinic",
    industry: "Healthcare",
    result: "2x more mobile appointments.",
    image: "https://picsum.photos/seed/clinic/800/600",
    tags: ["Mobile First", "HIPAA"]
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Strategy",
    description: "Deep research into your market and competitors.",
    icon: <Search className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Design",
    description: "High-fidelity mockups that bring your vision to life.",
    icon: <Layout className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Build",
    description: "Clean, scalable code using the latest tech stack.",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Scale",
    description: "Launch and continuous optimization for growth.",
    icon: <Rocket className="w-5 h-5" />
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Owner, Urban Eats",
    content: "This agency built our website and we started getting inquiries immediately. The design is stunning and so easy to use.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "Founder, TechStart",
    content: "Professional, fast, and results-oriented. They understood our vision perfectly and delivered a site that exceeds expectations.",
    image: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Elena Rodriguez",
    role: "Director, HealthFlow",
    content: "Our patient bookings have doubled since the new site launched. The mobile optimization was a game-changer for us.",
    image: "https://i.pravatar.cc/150?u=elena",
  },
];
