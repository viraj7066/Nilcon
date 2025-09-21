import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSnippet from "@/components/AboutSnippet";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesPreview from "@/components/ServicesPreview";
import PhilosophyHighlight from "@/components/PhilosophyHighlight";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSnippet />
        <FeaturedProjects />
        <ServicesPreview />
        <PhilosophyHighlight />
        <Testimonials />
        <FAQAccordion />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}