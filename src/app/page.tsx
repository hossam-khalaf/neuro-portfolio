import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResearchFocus from "@/components/ResearchFocus";
import SkillGrid from "@/components/SkillGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PublicationList from "@/components/PublicationList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010120]">
      <Navbar />
      <main>
        <HeroSection />
        <ResearchFocus />
        <SkillGrid />
        <ExperienceTimeline />
        <PublicationList />
      </main>
      <Footer />
    </div>
  );
}
