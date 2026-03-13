import { motion } from "motion/react";
import { Star } from "lucide-react";
import Section, { SectionHeader } from "../Section";
import { testimonials } from "../../data";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-slate-50/50">
      <SectionHeader 
        centered 
        title="Trusted by Visionaries" 
        subtitle="Join the ranks of business owners who have transformed their digital presence."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bento-card !p-10"
          >
            <div className="flex gap-1 text-brand-primary mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-10 italic">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img 
                src={t.image} 
                alt={t.name} 
                className="w-14 h-14 rounded-2xl object-cover" 
                loading="lazy"
                referrerPolicy="no-referrer" 
              />
              <div>
                <h4 className="font-bold text-brand-dark">{t.name}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
