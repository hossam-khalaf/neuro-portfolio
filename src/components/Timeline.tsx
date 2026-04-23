import SectionHeading from "./SectionHeading";

const experience = [
  {
    title: "PhD Candidate in Neuroscience",
    period: "Mar 2022 – Present",
    institution: "Karolinska Institutet · Stockholm",
    description:
      "Investigating estrogen receptor-mediated neuroprotection in Alzheimer's disease using the AppNL-G-F mouse model. Integrating scRNA-seq with behavioral and histological data.",
  },
  {
    title: "Research Exchange Scholar",
    period: "Aug 2021 – Jan 2022",
    institution: "University of Texas at Austin · USA",
    description:
      "Conducted research in biomedical engineering integrating experimental and analytical methodologies.",
  },
  {
    title: "Assistant Lecturer (Biochem)",
    period: "Nov 2014 – Present",
    institution: "Assiut University · Egypt",
    description:
      "Taught undergraduate courses in biochemistry. Performed molecular assays (ELISA, PCR) and supervised students in lab techniques.",
  },
  {
    title: "Biochemist",
    period: "Mar 2018 – May 2019",
    institution: "El-Salama IVF Center · Egypt",
    description:
      "Performed semen analysis, cryopreservation, and assisted reproductive techniques including IUI.",
  },
];

const education = [
  {
    title: "PhD in Neuroscience",
    period: "2022 – Present",
    institution: "Karolinska Institutet, Sweden",
    description:
      "Research focused on estrogen receptor signaling and sex-specific mechanisms in Alzheimer's disease.",
  },
  {
    title: "M.Sc. in Biochemistry",
    period: "2015 – 2019",
    institution: "Assiut University, Egypt",
    description:
      "Thesis: Molecular and biochemical mechanisms of natural flavonoids in induced model of colorectal cancer.",
  },
  {
    title: "B.V.Sc. (Excellent with Honor)",
    period: "2009 – 2014",
    institution: "Assiut University, Egypt",
    description: "Foundational studies in veterinary medical sciences.",
  },
];

type TimelineItem = { title: string; period: string; institution: string; description: string };

function TimelineColumn({ heading, items }: { heading: string; items: TimelineItem[] }) {
  return (
    <div>
      <div className="flex items-center gap-5 mb-8">
        <h2
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600, lineHeight: 1.04, whiteSpace: "nowrap" }}
          className="text-[#080808]"
        >
          {heading}
        </h2>
        <div className="flex-1 h-px bg-[#0f766e]" />
      </div>

      <div className="relative pl-6">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[#d8d8d8]" />
        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div key={item.title} className="relative">
              <div
                className="absolute -left-6 top-3 w-3 h-3 rounded-full border-2 border-[#0f766e] bg-[#f4e9db]"
                style={{ transform: "translateX(-50%)" }}
              />
              <div
                className="border border-[#d8d8d8] p-5 hover:-translate-y-0.5 transition-transform duration-150"
                style={{ borderRadius: "1px", boxShadow: "3px 3px 0px 0px #d8d8d8" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#080808" }}>{item.title}</h3>
                  <span
                    style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "1px", color: "#64748b" }}
                    className="uppercase shrink-0"
                  >
                    {item.period}
                  </span>
                </div>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#0f766e", marginBottom: "8px" }}>
                  {item.institution}
                </p>
                <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.6, color: "#363636" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="border-t border-[#d8d8d8] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <TimelineColumn heading="Experience" items={experience} />
          <TimelineColumn heading="Education" items={education} />
        </div>
      </div>
    </section>
  );
}
