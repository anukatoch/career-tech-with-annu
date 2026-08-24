import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import WhyCareerTech from "@/components/about/WhyCareerTech";
import StudentJourney from "@/components/about/StudentJourney";
import AboutCTA from "@/components/about/AboutCTA";
export const metadata = {
  title: "About Career Tech | Learn & Build Your Career",
  description:
    "Learn about Career Tech, our mission, vision and practical approach to Full Stack Development, UI/UX and modern technology training.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <WhyCareerTech />
      <StudentJourney />
      <AboutCTA />
    </>
  );
}