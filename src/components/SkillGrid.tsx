import { sanityFetch } from "@/sanity/lib/live";
import SkillGridClient from "./SkillGridClient";

interface Skill {
  _id: string;
  name: string;
  category: "Bioinformatics" | "Experimental";
}

const SKILLS_QUERY = `*[_type == "skill"] | order(name asc) { _id, name, category }`;

export default async function SkillGrid() {
  const { data } = await sanityFetch({ query: SKILLS_QUERY });
  const skills = (data ?? []) as Skill[];

  return <SkillGridClient skills={skills} />;
}
