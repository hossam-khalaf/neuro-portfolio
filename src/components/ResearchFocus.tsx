"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { inView } from "@/lib/animation";

const interests = [
  "Alzheimer's disease pathology",
  "Estrogen receptor signaling",
  "Single-cell transcriptomics (scRNA-seq)",
  "Neurovascular interactions",
  "Sex-specific disease mechanisms",
];

export default function ResearchFocus() {
  return (
    <section id="research" className="bg-[#f4e9db] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...inView()} className="mb-14">
          <p className="font-mono uppercase text-xs tracking-[0.15em] text-[#146ef5] mb-3">
            ABOUT
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#1d1d1f",
            }}
          >
            Research Focus
          </h2>
          <p className="mt-4" style={{ fontSize: "18px", color: "#666", lineHeight: 1.5 }}>
            Unraveling neurodegeneration through data and biology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div {...inView(0.1)} className="flex flex-col gap-5">
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333" }}>
              My academic career is driven by a commitment to uncovering the molecular
              mechanisms underlying <strong>Alzheimer&apos;s disease</strong>. Operating at
              the intersection of biochemistry and neuroscience, I utilize robust animal
              models to investigate sex-specific disease mechanisms.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333" }}>
              A significant portion of my doctoral research involves high-throughput
              computational biology. By employing{" "}
              <strong>single-cell RNA sequencing (scRNA-seq)</strong> and leveraging
              bioinformatic pipelines, I map complex cellular communication networks to
              translate vast transcriptomic data into actionable biological insights.
            </p>
          </motion.div>

          <motion.div
            {...inView(0.18)}
            whileHover={{ scale: 1.02 }}
            className="bg-white/70 border border-black/5 rounded-3xl p-8"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
          >
            <p className="font-mono uppercase text-xs tracking-[0.15em] text-[#146ef5] mb-6">
              CORE INTERESTS
            </p>
            <ul className="flex flex-col gap-4">
              {interests.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChevronRight size={15} className="text-[#146ef5] mt-0.5 shrink-0" />
                  <span style={{ fontSize: "15px", color: "#333", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
