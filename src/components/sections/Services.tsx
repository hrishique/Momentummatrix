import { motion } from "motion/react";
import Section, { SectionHeader } from "../Section";
import { bentoServices } from "../../data";

export default function Services() {
  return (
    <Section id="services" className="bg-slate-50/50">
      <SectionHeader 
        centered 
        title="Engineered for Performance" 
        subtitle="Our approach combines cutting-edge technology with conversion-focused design to give you an unfair advantage."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {bentoServices.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`bento-card ${service.className} flex flex-col justify-between`}
          >
            <div>
              <motion.div 
                whileHover={{ rotate: 12 }}
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
            </div>
            {service.image && (
              <div className="mt-4 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
