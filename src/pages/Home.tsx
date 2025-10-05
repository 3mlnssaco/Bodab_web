import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/features-section";
import { XRPLSection } from "@/components/xrpl-section";
import { RewardsSection } from "@/components/rewards-section";
import { PartnersSection } from "@/components/partners-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <XRPLSection />
      <RewardsSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
