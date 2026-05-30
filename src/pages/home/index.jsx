import { HomeLayout } from "@/layouts/home-layout";
import { HeroSection } from "@/pages/home/components/hero-section";
import { CommunitySection } from "@/pages/home/components/community-section";
import { MainGoalSection } from "@/pages/home/components/main-goal-section";
import { BenefitsSection } from "@/pages/home/components/benefits-section";
import { DoctorsSection } from "@/pages/home/components/doctors-section";
import { AdditionalFeaturesSection } from "@/pages/home/components/additional-features-section";

export default function HomePage() {
  return (
    <HomeLayout>
      <HeroSection />
      <CommunitySection />
      <MainGoalSection />
      <BenefitsSection />
      <DoctorsSection />
      <AdditionalFeaturesSection />
    </HomeLayout>
  );
}
