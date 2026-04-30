"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animation";

interface ExperienceItem {
  _id: string;
  role: string;
  institution: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

interface EducationItem {
  _id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function DatePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] text-white bg-[#146ef5]/80 rounded-full px-2 py-0.5 uppercase tracking-wide shrink-0 mt-0.5 whitespace-nowrap">
      {children}
    </span>
  );
}

function TimelineColumn({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono uppercase text-xs tracking-[0.15em] text-[#146ef5] mb-6">{label}</p>
      <div className="relative pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10" />
        {children}
      </div>
    </div>
  );
}

function TimelineNode({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover="hovered"
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      className="relative mb-5 last:mb-0 group"
    >
      <motion.div
        variants={{ hovered: { scale: 1.3, y: -2 } }}
        transition={{ duration: 0.2 }}
        className="absolute -left-8 top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#146ef5] z-10"
      />
      <motion.div
        variants={{ hovered: { y: -4 } }}
        transition={{ duration: 0.2 }}
        className="bg-white/80 backdrop-blur-md border border-black/5 rounded-3xl p-6"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceTimelineClient({
  experiences,
  educations,
}: {
  experiences: ExperienceItem[];
  educations: EducationItem[];
}) {
  return (
    <section id="experience" className="bg-[#f4e9db] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <p className="font-mono uppercase text-xs tracking-[0.15em] text-[#146ef5] mb-3">
            BACKGROUND
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
            Experience &amp; Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <TimelineColumn label="EXPERIENCE">
            {experiences.map((item, i) => (
              <TimelineNode key={item._id} delay={i * 0.07}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3
                    className="group-hover:text-[#146ef5] transition-colors duration-150"
                    style={{ fontSize: "15px", fontWeight: 600, color: "#1d1d1f", lineHeight: 1.35 }}
                  >
                    {item.role}
                  </h3>
                  <DatePill>
                    {formatDate(item.startDate)} – {item.endDate ? formatDate(item.endDate) : "Present"}
                  </DatePill>
                </div>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#146ef5", marginBottom: item.description ? "8px" : 0 }}>
                  {item.institution}
                </p>
                {item.description && (
                  <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#666" }}>
                    {item.description}
                  </p>
                )}
              </TimelineNode>
            ))}
          </TimelineColumn>

          <TimelineColumn label="EDUCATION">
            {educations.map((item, i) => (
              <TimelineNode key={item._id} delay={i * 0.07}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3
                    className="group-hover:text-[#146ef5] transition-colors duration-150"
                    style={{ fontSize: "15px", fontWeight: 600, color: "#1d1d1f", lineHeight: 1.35 }}
                  >
                    {item.degree}
                  </h3>
                  <DatePill>
                    {item.startYear} – {item.endYear}
                  </DatePill>
                </div>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#146ef5" }}>
                  {item.institution}
                </p>
              </TimelineNode>
            ))}
          </TimelineColumn>
        </div>
      </div>
    </section>
  );
}
