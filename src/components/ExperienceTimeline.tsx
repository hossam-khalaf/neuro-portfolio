import { sanityFetch } from "@/sanity/lib/live";
import ExperienceTimelineClient from "./ExperienceTimelineClient";

const EXP_QUERY = `*[_type == "experience"] | order(startDate desc) {
  _id, role, institution, startDate, endDate, description
}`;

const EDU_QUERY = `*[_type == "education"] | order(startYear desc) {
  _id, degree, institution, startYear, endYear
}`;

export default async function ExperienceTimeline() {
  const [expRes, eduRes] = await Promise.all([
    sanityFetch({ query: EXP_QUERY }),
    sanityFetch({ query: EDU_QUERY }),
  ]);

  return (
    <ExperienceTimelineClient
      experiences={expRes.data ?? []}
      educations={eduRes.data ?? []}
    />
  );
}
