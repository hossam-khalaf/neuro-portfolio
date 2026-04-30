"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { EASE } from "@/lib/animation";
import type { Publication } from "@/lib/types";

export default function PublicationCards({ publications }: { publications: Publication[] }) {
  if (publications.length === 0) {
    return (
      <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)" }}>No publications found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {publications.map((pub, i) => {
        const year = pub.publicationDate
          ? new Date(pub.publicationDate).getFullYear()
          : null;

        const card = (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -4,
              boxShadow: "0 0 0 1.5px rgba(167,139,250,0.45), 0 12px 40px rgba(167,139,250,0.12)",
              transition: { duration: 0.2 },
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            className="bg-white/10 border border-white/20 rounded-lg p-6 flex flex-col gap-4 h-full"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
          >
            <div className="flex items-center justify-between">
              <BookOpen size={18} className="text-[#bdbbff]" />
              {year && (
                <span className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-xs font-bold tracking-wider border border-indigo-500/30">
                  {year}
                </span>
              )}
            </div>

            <h3 style={{ fontSize: "15px", fontWeight: 600, lineHeight: 1.45, color: "white" }}>
              {pub.title}
            </h3>

            {pub.abstract && (
              <p
                className="flex-1 line-clamp-3"
                style={{ fontSize: "13px", lineHeight: 1.65, color: "rgba(255,255,255,0.85)" }}
              >
                {pub.abstract}
              </p>
            )}

            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#bdbbff" }}>
                {pub.journal}
              </span>
              {pub.paperUrl && (
                <ArrowUpRight size={15} className="text-white/80 shrink-0" />
              )}
            </div>
          </motion.div>
        );

        if (pub.paperUrl) {
          return (
            <a
              key={pub._id}
              href={pub.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {card}
            </a>
          );
        }

        return <div key={pub._id}>{card}</div>;
      })}
    </div>
  );
}
