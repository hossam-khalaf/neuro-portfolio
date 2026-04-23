import { Terminal, Microscope } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    icon: Terminal,
    title: "Bioinformatics",
    skills: ["R/RStudio", "Seurat", "CellChat", "Harmony", "Python", "scRNA-seq Analysis", "Transcriptomic Profiling"],
  },
  {
    icon: Microscope,
    title: "Experimental",
    skills: ["qPCR", "ELISA", "Immunohistochemistry", "Flow Cytometry", "Cell Culture", "Animal Handling", "Behavioral Assays (Y-maze)"],
  },
];

export default function TechnicalArsenal() {
  return (
    <section id="skills" className="border-t border-[#d8d8d8] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="The dual advantage of computational and experimental expertise."
          centered
          className="mb-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(({ icon: Icon, title, skills }) => (
            <div
              key={title}
              className="border border-[#080808] p-8 hover:-translate-y-1 transition-transform duration-150"
              style={{ borderRadius: "1px", boxShadow: "4px 4px 0px 0px #080808" }}
            >
              <div className="mb-5 p-3 border border-[#d8d8d8] inline-flex" style={{ borderRadius: "1px" }}>
                <Icon size={22} className="text-[#0f766e]" />
              </div>
              <h3
                style={{ fontSize: "24px", fontWeight: 600, lineHeight: 1.3, marginBottom: "20px" }}
                className="text-[#080808]"
              >
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#d8d8d8] px-3 py-1"
                    style={{ fontSize: "14px", fontWeight: 500, color: "#363636", borderRadius: "1px" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
