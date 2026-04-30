"use client";

import { motion } from "framer-motion";
import { Terminal, Microscope } from "lucide-react";
import { EASE } from "@/lib/animation";

interface Skill {
  _id: string;
  name: string;
  category: "Bioinformatics" | "Experimental";
}

const categories = [
  { key: "Bioinformatics", Icon: Terminal },
  { key: "Experimental", Icon: Microscope },
] as const;

export default function SkillGridClient({ skills }: { skills: Skill[] }) {
  const grouped = {
    Bioinformatics: skills.filter((s) => s.category === "Bioinformatics"),
    Experimental: skills.filter((s) => s.category === "Experimental"),
  };

  return (
    <section id="skills" className="bg-[#f4e9db] py-28 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <p className="font-mono uppercase text-xs tracking-[0.15em] text-[#146ef5] mb-3">
            EXPERTISE
          </p>
          <h2
            className="text-[#1d1d1f]"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Technical Arsenal
          </h2>
          <p className="mt-4 text-[#666]" style={{ fontSize: "18px", lineHeight: 1.5 }}>
            The dual advantage of computational and experimental expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(({ key, Icon }, colIdx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: colIdx * 0.1, ease: EASE }}
              className="rounded-3xl p-8 bg-[#010120]"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-md bg-[#146ef5]/15 flex items-center justify-center">
                  <Icon size={18} className="text-[#146ef5]" />
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "white", letterSpacing: "-0.01em" }}>
                  {key}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {grouped[key].map((skill, i) => (
                  <motion.span
                    key={skill._id}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: i * 0.04 }}
                    className="border border-white/15 rounded-full px-4 py-1.5 hover:border-indigo-400/60 hover:bg-indigo-500/10 transition-colors duration-200 cursor-default"
                    style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
