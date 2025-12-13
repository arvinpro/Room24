import HeroSection from "./components/HeroSection";
import DiscoverSection from "./components/DiscoverSection";
import FrequentlyAQ from "./components/FrequentlyAQ";
import Testimonials from "./components/Testimonials";
import AppFeature from "./components/AppFeature";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      <AppFeature />
      <Testimonials />
      <FrequentlyAQ />
    </div>
  );
}
