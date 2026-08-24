
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LearningJourney from "@/components/home/LearningJourney";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import StudentProjects from "@/components/home/StudentProjects";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";


export default function Home() {
  return (
    <>
 
       <Hero />
       <WhyChooseUs />
       <LearningJourney/>
       <FeaturedCourses/>
       <StudentProjects/>
       <Testimonials/>
       <Contact/>

    
    </>
  );
}