
import { useEffect, lazy, Suspense } from 'react';
import Hero from '@/components/home/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import LazySection from '@/components/LazySection';

// Lazy load heavy components
const ServicesOverview = lazy(() => import('@/components/home/ServicesOverview'));
const WhyChooseUs = lazy(() => import('@/components/home/WhyChooseUs'));
const InstagramSection = lazy(() => import('@/components/home/InstagramSection'));
const Testimonials = lazy(() => import('@/components/home/Testimonials'));
const QuickContact = lazy(() => import('@/components/home/QuickContact'));
const AboutSummary = lazy(() => import('@/components/home/AboutSummary'));
const GalleryShowcase = lazy(() => import('@/components/home/GalleryShowcase'));

// Loading component
const SectionLoader = () => (
  <div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />
);

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
        <LazySection>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <ServicesOverview />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="why-choose-us">
        <LazySection>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <WhyChooseUs />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="about">
        <LazySection>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <AboutSummary />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="gallery">
        <LazySection>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <GalleryShowcase />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="instagram">
        <LazySection>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <InstagramSection />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="testimonials">
        <LazySection>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="contact">
        <LazySection>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <QuickContact />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
    </div>
  );
};

export default Index;
