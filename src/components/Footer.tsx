import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const contactInfo = [
  { icon: Mail, label: "heba.galaa@gmail.com", href: "mailto:heba.galaa@gmail.com" },
  { icon: Phone, label: "+46(0)73667826", href: "tel:+46073667826" },
  { icon: MapPin, label: "Karolinska Institutet, Stockholm, Sweden", href: null },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#010120] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "white",
              marginBottom: "12px",
            }}
          >
            Let&apos;s Connect
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.65, color: "rgba(255,255,255,0.45)", marginBottom: "28px", maxWidth: "360px" }}>
            Open to discussing research collaborations, presenting my findings, and exploring
            opportunities post-defense.
          </p>

          <ul className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-[#bdbbff]" />
                </div>
                {href ? (
                  <a
                    href={href}
                    style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)" }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                ) : (
                  <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono uppercase text-xs tracking-[0.15em] text-[#bdbbff] mb-6">
            ACADEMIC &amp; SOCIAL PROFILES
          </p>
          <SocialLinks />
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.25)" }}>
          © 2026 Heba Ali. All rights reserved.
        </span>
        <a
          href="https://hossamkhalaf.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono uppercase text-[10px] tracking-[0.15em] hover:text-white/50 transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Made by Hossam Khalaf
        </a>
      </div>
    </footer>
  );
}
