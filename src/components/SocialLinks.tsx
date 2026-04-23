import { sanityFetch } from "@/sanity/lib/live";
import { ExternalLink, GitFork, BookOpen, Activity, Link2, University, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  _id: string;
  platformName: string;
  url: string;
}

const SOCIAL_QUERY = `*[_type == "socialLink"] | order(platformName asc) { _id, platformName, url }`;

const iconMap: Record<string, LucideIcon> = {
  linkedin: ExternalLink,
  github: GitFork,
  "google scholar": BookOpen,
  researchgate: Activity,
  orcid: Link2,
  "ki staff": University,
};

function getPlatformIcon(name: string): LucideIcon {
  return iconMap[name.toLowerCase()] ?? Globe;
}

export default async function SocialLinks() {
  const { data } = await sanityFetch({ query: SOCIAL_QUERY });
  const links = (data ?? []) as SocialLink[];

  if (links.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3">
      {links.map((link) => {
        const Icon = getPlatformIcon(link.platformName);
        return (
          <a
            key={link._id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <Icon size={16} className="text-[#bdbbff]" />
            <span style={{ fontSize: "15px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
              {link.platformName}
            </span>
          </a>
        );
      })}
    </div>
  );
}
