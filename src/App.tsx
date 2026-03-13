import React, { Suspense, lazy, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  ArrowRight, 
  Rocket,
  Phone
} from "lucide-react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import { stats } from "./data";

// Lazy load sections below the fold
const Services = lazy(() => import("./components/sections/Services"));
const Analysis = lazy(() => import("./components/sections/Analysis"));
const Comparison = lazy(() => import("./components/sections/Comparison"));
const Portfolio = lazy(() => import("./components/sections/Portfolio"));
const Process = lazy(() => import("./components/sections/Process"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const CTA = lazy(() => import("./components/sections/CTA"));

// Loading fallback
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { label: "Websites Built", value: "50+" },
    { label: "Industries Served", value: "25+" },
    { label: "Visitors Generated", value: "100k+" },
  ];

  return (
    <div className="min-h-screen selection:bg-violet-200 selection:text-violet-900">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <CustomCursor />
      <Navbar />

      {/* Hero Section - Enhanced for Mobile First */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        {/* Interactive Mouse Glow (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full"
            animate={{
              x: "var(--mouse-x)",
              y: "var(--mouse-y)",
            }}
            style={{
              left: "-400px",
              top: "-400px",
            } as any}
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-violet-500/10 blur-[120px] rounded-full animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-500/10 blur-[120px] rounded-full animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-indigo-500/10 blur-[120px] rounded-full animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              The Future of Web Development
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="text-4xl md:text-7xl lg:text-8xl font-bold text-brand-dark leading-[1.1] mb-8 max-w-5xl"
            >
              Websites That <span className="text-gradient">Dominate</span> Your Market.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2, 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="text-lg md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed"
            >
              We don't just build websites. We build high-performance digital assets that turn visitors into loyal customers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4, 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.4)"
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Free Strategy <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={{ translateX: ["100%", "-100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "rgba(248, 250, 252, 1)",
                  borderColor: "rgba(124, 58, 237, 0.3)"
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="bg-white text-brand-dark border border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center"
              >
                View Our Work
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-5xl mx-auto perspective-1000"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-white/20 animate-float">
              <img 
                src="https://picsum.photos/seed/agency-hero-v2/1200/750" 
                alt="Momentumatrixx Dashboard" 
                className="w-full h-auto"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-violet-500/20 blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-fuchsia-500/20 blur-[100px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-3xl md:text-5xl font-bold text-brand-dark mb-2">{stat.value}</p>
                <p className="text-slate-500 font-medium uppercase tracking-widest text-[10px] md:text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<SectionLoader />}>
        <Services />
        <Analysis />
        <Comparison />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
      </Suspense>

      {/* Footer - Modern & Clean */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-brand-dark rounded-2xl flex items-center justify-center text-white">
                  <Rocket size={28} />
                </div>
                <span className="text-3xl font-bold tracking-tight text-brand-dark">
                  Momentum<span className="text-brand-primary">atrixx</span>
                </span>
              </div>
              <p className="text-slate-500 text-lg max-w-md leading-relaxed mb-10">
                The next generation of web development. We combine high-end design with conversion-focused engineering to scale your business.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="px-5 py-2 rounded-xl bg-slate-50 text-slate-600 font-bold text-sm hover:bg-brand-dark hover:text-white transition-all">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-lg mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Services', 'Portfolio', 'Process', 'Testimonials'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-brand-primary transition-colors font-medium">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-lg mb-8">Contact</h4>
              <ul className="space-y-6">
                <li className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:hello@momentumatrixx.com" className="text-brand-dark font-bold hover:text-brand-primary transition-colors">hello@momentumatrixx.com</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</span>
                  <a href="tel:+15551234567" className="text-brand-dark font-bold hover:text-brand-primary transition-colors">+1 (555) 123-4567</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Momentumatrixx. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-dark transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp - Enhanced */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-emerald-500 text-white rounded-2xl shadow-2xl shadow-emerald-500/40 flex items-center justify-center z-50 cursor-pointer"
      >
        <Phone size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
