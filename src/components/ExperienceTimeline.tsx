"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
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

const EXP_QUERY = `*[_type == "experience"] | order(startDate desc) {
  _id, role, institution, startDate, endDate, description
}`;

const EDU_QUERY = `*[_type == "education"] | order(startYear desc) {
  _id, degree, institution, startYear, endYear
}`;

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

function Skeleton() {
  return (
    <div className="flex flex-col gap-6 pl-6 border-l-2 border-slate-100">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-28 rounded-lg bg-slate-100 animate-pulse" />
      ))}
    </div>
  );
}

function TimelineColumn({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono uppercase text-xs tracking-[0.15em] text-[#146ef5] mb-6">{label}</p>
      <div className="relative pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
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
      {/* Timeline dot — animates on hover via variant propagation */}
      <motion.div
        variants={{ hovered: { scale: 1.3, y: -2 } }}
        transition={{ duration: 0.2 }}
        className="absolute -left-8 top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#146ef5] z-10"
      />
      {/* Card — lifts on hover via variant propagation */}
      <motion.div
        variants={{ hovered: { y: -4 } }}
        transition={{ duration: 0.2 }}
        className="bg-white border border-slate-200 rounded-lg p-5"
        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [educations, setEducations] = useState<EducationItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const opts = { signal: controller.signal };
    Promise.all([
      client.fetch(EXP_QUERY, {}, opts),
      client.fetch(EDU_QUERY, {}, opts),
    ])
      .then(([exp, edu]) => { setExperiences(exp); setEducations(edu); setLoaded(true); })
      .catch((err) => { if (err.name !== "AbortError") setLoaded(true); });
    return () => controller.abort();
  }, []);

  return (
    <section id="experience" className="bg-white py-28 border-t border-slate-100">
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
            className="inline-block bg-gradient-to-r from-slate-900 via-slate-700 to-indigo-800 text-transparent bg-clip-text"
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
            {!loaded ? (
              <Skeleton />
            ) : (
              experiences.map((item, i) => (
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
              ))
            )}
          </TimelineColumn>

          <TimelineColumn label="EDUCATION">
            {!loaded ? (
              <Skeleton />
            ) : (
              educations.map((item, i) => (
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
              ))
            )}
          </TimelineColumn>
        </div>
      </div>
    </section>
  );
}
