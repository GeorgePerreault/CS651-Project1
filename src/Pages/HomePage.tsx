import { RetroGrid } from "../components/magicui/retro-grid";
import Navbar from "@/components/ui/Navbar";
import FeatureSection from "@/HomepageComponents/FeaturesSection";
import Hero from "@/HomepageComponents/Hero";
import Footer from "@/HomepageComponents/Footer";

const HomePage = () => {
  return (
    <>
      <RetroGrid />

      <Navbar />

      <Hero />

      <FeatureSection />

      <Footer />
    </>
  );
};

export default HomePage;
