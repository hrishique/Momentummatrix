import { motion } from "motion/react";
import { Zap, Smartphone, LineChart } from "lucide-react";
import Section from "../Section";

export default function Analysis() {
  return (
    <Section id="analysis">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-600 text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          Sharp Market Analysis
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-brand-dark mb-8"
        >
          Why 90% of Agency Sites <span className="text-gradient">Underperform.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 leading-relaxed"
        >
          We conducted a deep audit of 200+ competitor sites. The results were shocking: slow load times, generic templates, and zero conversion strategy.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "The Speed Gap",
            stat: "4.2s",
            label: "Avg. Competitor Load Time",
            desc: "Most sites lose 40% of traffic before the first paint. Our sites load in under 0.8s.",
            icon: <Zap className="text-amber-500" />
          },
          {
            title: "Mobile Friction",
            stat: "65%",
            label: "Mobile Bounce Rate",
            desc: "Competitors use 'responsive' hacks. We build mobile-first architectures that feel like native apps.",
            icon: <Smartphone className="text-blue-500" />
          },
          {
            title: "Conversion Void",
            stat: "1.2%",
            label: "Avg. Conversion Rate",
            desc: "Pretty sites don't sell. Our data-driven psychology frameworks achieve 4-8% conversion on average.",
            icon: <LineChart className="text-emerald-500" />
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-slate-900">{item.stat}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{item.label}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
