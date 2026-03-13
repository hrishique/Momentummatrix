import { motion } from "motion/react";
import { Phone, Rocket } from "lucide-react";
import Section from "../Section";

export default function CTA() {
  return (
    <Section id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-brand-dark rounded-[3rem] p-10 md:p-24 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 blur-[120px] rounded-full animate-blob animation-delay-4000" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold text-white mb-8 max-w-4xl leading-tight"
          >
            Ready to <span className="text-brand-primary">Accelerate</span> Your Growth?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl"
          >
            Book a free 30-minute strategy call. We'll audit your current site and show you exactly how to double your leads.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a 
              href="https://wa.me/+918853299951"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-primary text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-violet-600 transition-all shadow-2xl shadow-violet-500/40 inline-flex items-center justify-center"
            >
              Book Free Consultation
            </motion.a>
            <motion.a 
              href="https://wa.me/+918853299951"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <Phone size={24} /> WhatsApp Us
            </motion.a>
          </div>
          <p className="mt-8 text-slate-500 text-sm font-medium">
            No commitment required. Just pure value.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
