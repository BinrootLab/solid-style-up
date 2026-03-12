import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CostCalculatorPreview from "@/components/CostCalculatorPreview";
import CTASection from "@/components/CTASection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CostCalculatorPreview />
      <CTASection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
