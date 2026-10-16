import { CTASection } from "@/components/common/CTASection";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { ShowcasePreview } from "@/components/home/ShowcasePreview";
import { SimplePowerfulSection } from "@/components/home/SimplePowerfulSection";
import { StarterKitBanner } from "@/components/home/StarterKitBanner";
import { TrustStrip } from "@/components/home/TrustStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <SimplePowerfulSection />
      <StarterKitBanner />
      <FeaturedServices />
      <ShowcasePreview />
      <ProcessPreview />
      <CTASection />
    </>
  );
}
