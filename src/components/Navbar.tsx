import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:rotate-12 transition-transform duration-300">
              <Rocket size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-dark">
              Momentum<span className="text-brand-primary">atrixx</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/5 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[120px] rounded-full" />
            </div>

            {/* Header in Mobile Menu */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                  <Rocket size={18} />
                </div>
                <span className="text-lg font-bold tracking-tight text-brand-dark">
                  Momentum<span className="text-brand-primary">atrixx</span>
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 py-12">
              <motion.div 
                className="space-y-6"
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
                      show: { opacity: 1, x: 0, filter: "blur(0px)" }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-6 py-2"
                    >
                      <span className="text-xs font-bold text-brand-primary/40 group-hover:text-brand-primary transition-colors">
                        0{navLinks.indexOf(link) + 1}
                      </span>
                      <span className="text-4xl font-bold text-brand-dark group-hover:text-brand-primary transition-all duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-16"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between w-full bg-brand-dark text-white p-6 rounded-2xl font-bold text-xl shadow-2xl shadow-slate-900/20 group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                    <ArrowRight size={24} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/0 via-brand-primary/10 to-brand-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </a>
              </motion.div>
            </div>

            {/* Footer in Mobile Menu */}
            <div className="px-8 py-10 border-t border-slate-100 flex justify-between items-center">
              <div className="flex gap-4">
                {['TW', 'LI', 'IG'].map(social => (
                  <span key={social} className="text-xs font-bold text-slate-400 hover:text-brand-primary cursor-pointer transition-colors">
                    {social}
                  </span>
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                Momentumatrixx © 2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
