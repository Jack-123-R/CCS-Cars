
import { useEffect, lazy, Suspense } from 'react';
import Hero from '@/components/home/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import LazySection from '@/components/LazySection';

// Lazy load heavy components with better chunking
const ServicesOverview = lazy(() => import('@/components/home/ServicesOverview'));
const WhyChooseUs = lazy(() => import('@/components/home/WhyChooseUs'));
const AboutSummary = lazy(() => import('@/components/home/AboutSummary'));
const GalleryShowcase = lazy(() => import('@/components/home/GalleryShowcase'));
const InstagramSection = lazy(() => import('@/components/home/InstagramSection'));
const Testimonials = lazy(() => import('@/components/home/Testimonials'));
const QuickContact = lazy(() => import('@/components/home/QuickContact'));

// Lightweight loading component
const SectionLoader = () => (
  <div className="h-64 bg-gray-50 animate-pulse flex items-center justify-center mx-4 rounded-lg">
    <div className="w-6 h-6 border-2 border-gray-300 border-t-red-500 rounded-full animate-spin" />
  </div>
);

const Index = () => {
  useEffect(() => {
    // Optimize scrolling performance
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80';
    document.head.appendChild(preloadLink);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      if (preloadLink.parentNode) {
        preloadLink.parentNode.removeChild(preloadLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section id="home">
        <Hero />
      </section>
      
      <section id="services">
        <LazySection threshold={0.2}>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <ServicesOverview />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="why-choose-us">
        <LazySection threshold={0.2}>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <WhyChooseUs />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="about">
        <LazySection threshold={0.2}>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <AboutSummary />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="gallery">
        <LazySection threshold={0.2}>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <GalleryShowcase />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="instagram">
        <LazySection threshold={0.2}>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <InstagramSection />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="testimonials">
        <LazySection threshold={0.2}>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>
          </AnimatedSection>
        </LazySection>
      </section>
      
      <section id="contact">
        <LazySection threshold={0.2}>
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
