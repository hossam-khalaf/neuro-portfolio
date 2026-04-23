import { sanityFetch } from "@/sanity/lib/live";
import PublicationCards from "./PublicationCards";
import type { Publication } from "@/lib/types";

const PUBLICATIONS_QUERY = `*[_type == "publication"] | order(publicationDate desc) {
  _id, title, publicationDate, journal, abstract, paperUrl
}`;

export default async function PublicationList() {
  const { data } = await sanityFetch({ query: PUBLICATIONS_QUERY });
  const publications = (data ?? []) as Publication[];

  return (
    <section id="publications" className="bg-[#010120] py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono uppercase text-xs tracking-[0.15em] text-[#bdbbff] mb-3">
            RESEARCH OUTPUT
          </p>
          <h2
            className="inline-block bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-300 text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Selected Publications
          </h2>
          <p className="mt-4" style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
            Peer-reviewed contributions to neuroscience.
          </p>
        </div>

        <PublicationCards publications={publications} />
      </div>
    </section>
  );
}
