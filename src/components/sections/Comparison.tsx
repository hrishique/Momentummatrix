import { motion } from "motion/react";
import { CheckCircle2, X, Trophy, ShieldCheck, Users, Zap } from "lucide-react";
import Section, { SectionHeader } from "../Section";
import { comparison } from "../../data";

export default function Comparison() {
  return (
    <Section id="comparison">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            title="The Momentumatrixx Edge" 
            subtitle="We analyzed the top 50 development agencies to see where they fail. We built our process to fill those gaps."
          />
          <div className="space-y-4">
            {comparison.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50"
              >
                <span className="font-medium text-slate-700">{item.feature}</span>
                <div className="flex items-center gap-2">
                  {typeof item.us === 'boolean' ? (
                    item.us ? <CheckCircle2 className="text-emerald-500" size={20} /> : <X className="text-red-500" size={20} />
                  ) : (
                    <span className="text-xs font-bold px-2 py-1 bg-violet-100 text-violet-600 rounded-md uppercase">{item.us}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bento-card bg-brand-dark text-white p-12">
            <Trophy className="text-brand-primary mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-6">Why We Win</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Most agencies focus on "pretty" websites. We focus on business outcomes. Our websites are built with a deep understanding of user psychology and search engine algorithms.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-200">
                <ShieldCheck className="text-brand-primary" size={20} />
                Proprietary Conversion Framework
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Users className="text-brand-primary" size={20} />
                User-Centric Design Philosophy
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Zap className="text-brand-primary" size={20} />
                Ultra-Fast Performance (95+ Lighthouse Score)
              </li>
            </ul>
          </div>
          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl -z-10 rounded-[3rem] animate-pulse" />
        </motion.div>
      </div>
    </Section>
  );
}
