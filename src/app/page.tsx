import { Banner } from "@/components/banner"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/sections/about-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { JourneySection } from "@/components/sections/journey-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { TravelSection } from "@/components/sections/travel-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <JourneySection />
      <TravelSection />
      <AchievementsSection />
      <BlogSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
