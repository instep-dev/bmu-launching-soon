import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import VisionMissionSection from "@/app/components/VisionMissionSection";
import PhilosophySection from "@/app/components/PhilosophySection";
import MilestoneSection from "@/app/components/MilestoneSection";
import TeamSection from "@/app/components/TeamSection";
import ContactFormSection from "@/app/components/ContactFormSection";
import ContactInfoSection from "@/app/components/ContactInfoSection";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default function LocalePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <PhilosophySection />
        {/* <MilestoneSection /> */}
        <TeamSection />
        <ContactFormSection />
        <ContactInfoSection />
      </main>
    </>
  );
}
