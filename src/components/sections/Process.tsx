import { motion } from "motion/react";
import Section, { SectionHeader } from "../Section";
import { processSteps } from "../../data";

export default function Process() {
  return (
    <Section id="process">
      <SectionHeader 
        centered 
        title="The Momentum Method" 
        subtitle="A streamlined, transparent process designed for speed and quality."
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
        {processSteps.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative group"
          >
            <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-slate-100 -z-10 group-last:hidden" />
            <div className="flex flex-col items-center text-center">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center mb-8 shadow-sm group-hover:shadow-xl group-hover:border-brand-primary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-primary">
                  {item.icon}
                </div>
              </motion.div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">Step {item.step}</span>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed px-4">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
