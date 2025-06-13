
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import InstagramSection from '@/components/home/InstagramSection';
import Testimonials from '@/components/home/Testimonials';
import QuickContact from '@/components/home/QuickContact';
import AboutSummary from '@/components/home/AboutSummary';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <AboutSummary />
      <InstagramSection />
      <Testimonials />
      <QuickContact />
    </div>
  );
};

export default Index;
