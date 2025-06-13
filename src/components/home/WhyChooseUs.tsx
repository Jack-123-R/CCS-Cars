
import { Shield, Award, Users, Clock, Wrench, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Two decades of perfecting our craft and delivering exceptional results."
    },
    {
      icon: Shield,
      title: "Fully Insured & Bonded",
      description: "Complete protection for your vehicle with comprehensive insurance coverage."
    },
    {
      icon: Users,
      title: "Certified Professionals",
      description: "Our team holds industry certifications and undergoes continuous training."
    },
    {
      icon: Clock,
      title: "Convenient Scheduling",
      description: "Flexible appointment times including evenings and weekends."
    },
    {
      icon: Wrench,
      title: "Premium Products",
      description: "We use only the highest quality professional-grade products and equipment."
    },
    {
      icon: Star,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee or we'll make it right, no questions asked."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose CCS Car Shine Hub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another car wash. We're passionate professionals dedicated to 
            transforming your vehicle with meticulous attention to detail and unmatched service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">50,000+ Satisfied Customers</h3>
          <p className="text-lg mb-6 text-blue-100">
            Join thousands of car owners who trust us with their vehicles. See why we're Metro City's #1 choice for professional auto detailing.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div>
              <p className="text-3xl font-bold text-yellow-400">4.9/5</p>
              <p className="text-sm text-blue-200">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">500+</p>
              <p className="text-sm text-blue-200">Google Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">20+</p>
              <p className="text-sm text-blue-200">Years in Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
