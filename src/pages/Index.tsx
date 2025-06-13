
import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import InstagramSection from '@/components/home/InstagramSection';
import Testimonials from '@/components/home/Testimonials';
import QuickContact from '@/components/home/QuickContact';
import AboutSummary from '@/components/home/AboutSummary';
import GalleryShowcase from '@/components/home/GalleryShowcase';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section id="home">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
      </section>
      
      <section id="services">
        <AnimatedSection>
          <ServicesOverview />
        </AnimatedSection>
      </section>
      
      <section id="why-choose-us">
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
      </section>
      
      <section id="about">
        <AnimatedSection>
          <AboutSummary />
        </AnimatedSection>
      </section>
      
      <section id="gallery">
        <AnimatedSection>
          <GalleryShowcase />
        </AnimatedSection>
      </section>
      
      <section id="instagram">
        <AnimatedSection>
          <InstagramSection />
        </AnimatedSection>
      </section>
      
      <section id="testimonials">
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
      </section>
      
      <section id="contact">
        <AnimatedSection>
          <QuickContact />
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Index;
