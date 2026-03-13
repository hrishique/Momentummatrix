import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Section, { SectionHeader } from "../Section";
import { portfolio } from "../../data";

export default function Portfolio() {
  return (
    <Section id="portfolio" className="bg-slate-50/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title="Selected Case Studies" 
            subtitle="Explore how we've helped businesses across various industries achieve digital excellence."
            className="mb-0"
          />
        </motion.div>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold text-brand-dark hover:bg-slate-50 transition-all flex items-center gap-2 w-fit"
        >
          View All Projects <ArrowUpRight size={18} />
        </motion.button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {portfolio.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden mb-8 aspect-[16/10] shadow-2xl shadow-slate-200/50">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="flex gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-white text-lg font-medium leading-relaxed">
                  {item.result}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-4">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-1">{item.title}</h3>
                <p className="text-slate-500 font-medium">{item.industry}</p>
              </div>
              <motion.div 
                whileHover={{ x: 5, y: -5 }}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all duration-300"
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
