"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Mail, ChevronRight } from "lucide-react";
import { EASE, fadeUp } from "@/lib/animation";
import avatarImage from "../../public/avatar.jpg";
import ParticleNetwork from "./ParticleNetwork";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#010120] flex items-center overflow-hidden"
    >
      {/* Animated Neuroscience Particle Network */}
      <ParticleNetwork />

      <div className="max-w-6xl mx-auto px-6 py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 bg-[#bdbbff]/10 border border-[#bdbbff]/20 rounded-full px-4 py-1.5 font-mono text-xs text-[#bdbbff] uppercase tracking-[0.12em]">
                <Calendar size={11} />
                PhD Defense: Aug. 27, 2026
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="inline-block bg-gradient-to-r from-pink-200 via-indigo-300 to-blue-300 text-transparent bg-clip-text"
              style={{
                fontSize: "clamp(54px, 7vw, 88px)",
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
              }}
            >
              Heba Ali
            </motion.h1>

            <motion.p
              {...fadeUp(0.18)}
              className="text-indigo-100"
              style={{ fontSize: "22px", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              PhD Candidate in Neuroscience
            </motion.p>

            <motion.div {...fadeUp(0.23)} className="flex items-center gap-2">
              <MapPin size={14} className="text-white/80" />
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)" }}>
                Karolinska Institutet · Stockholm, Sweden
              </span>
            </motion.div>

            <motion.p
              {...fadeUp(0.28)}
              className="text-white"
              style={{ fontSize: "16px", lineHeight: 1.7, maxWidth: "480px", opacity: 0.9 }}
            >
              Neuroscientist and biochemist specializing in neurodegenerative diseases.
              My work bridges experimental molecular biology and computational
              bioinformatics, investigating estrogen receptor-mediated neuroprotection
              in Alzheimer&apos;s disease using single-cell transcriptomics.
            </motion.p>

            <motion.div {...fadeUp(0.36)} className="flex flex-wrap items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-7 py-3.5 transition-colors duration-200"
                style={{ fontSize: "15px" }}
              >
                <Mail size={18} />
                Get in Touch
              </motion.a>
              <motion.a
                href="#publications"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 rounded-lg px-6 py-3 hover:border-white/40 hover:text-white transition-colors duration-200"
                style={{ fontSize: "15px", fontWeight: 500 }}
              >
                View Research
                <ChevronRight size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: avatar with rotating ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center w-72 h-72">
              {/* Soft ambient glow */}
              <div
                className="absolute inset-4 rounded-full blur-3xl"
                style={{ background: "rgba(189,187,255,0.18)" }}
              />

              {/* Rotating conic-gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute w-60 h-60 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(189,187,255,0.9) 0%, rgba(126,181,255,0.9) 25%, transparent 50%, transparent 75%, rgba(189,187,255,0.9) 100%)",
                }}
              />

              {/* Avatar image — inset by 2px to show the ring */}
              <div className="absolute w-[232px] h-[232px] rounded-full overflow-hidden border border-white/10">
                <Image
                  src={avatarImage}
                  alt="Heba Ali"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  priority
                />
              </div>

              {/* Dry Lab badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-1 -right-4 flex items-center gap-2 bg-white/[0.12] backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 cursor-default"
              >
                <span className="font-mono text-sm font-medium text-white/80">&gt;_</span>
                <span className="font-mono text-sm font-medium text-white">Dry Lab</span>
              </motion.div>

              {/* Wet Lab badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-1 -left-4 flex items-center gap-2 bg-white/[0.12] backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 cursor-default"
              >
                <span className="text-base">🔬</span>
                <span className="font-mono text-sm font-medium text-white">Wet Lab</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
