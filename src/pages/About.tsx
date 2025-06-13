
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Award, Users, Target, Heart, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Carlos Rodriguez",
      role: "Master Detailer & Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      bio: "Founded CCS Car Shine Hub in 2003 with 20+ years of automotive detailing expertise. Certified in advanced paint correction and ceramic coating applications.",
      specialties: ["Paint Correction", "Ceramic Coatings", "Business Operations"]
    },
    {
      name: "Maria Santos",
      role: "Interior Specialist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80",
      bio: "15 years of experience specializing in interior restoration. Expert in leather conditioning, fabric protection, and odor elimination.",
      specialties: ["Leather Restoration", "Fabric Cleaning", "Odor Removal"]
    },
    {
      name: "Jake Thompson",
      role: "Paint Correction Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      bio: "Certified paint correction specialist with expertise in swirl removal, scratch repair, and high-end vehicle restoration.",
      specialties: ["Swirl Removal", "Scratch Repair", "Polish Application"]
    },
    {
      name: "Lisa Chen",
      role: "Customer Experience Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      bio: "Ensures every customer receives exceptional service from initial consultation through final delivery. 10+ years in customer service excellence.",
      specialties: ["Customer Relations", "Quality Assurance", "Service Coordination"]
    }
  ];

  const timeline = [
    { year: "2003", event: "Carlos Rodriguez starts CCS Car Shine Hub in his garage" },
    { year: "2005", event: "First commercial location opens in Metro City" },
    { year: "2008", event: "Introduces ceramic coating services to the region" },
    { year: "2012", event: "Expands to current 5,000 sq ft facility" },
    { year: "2015", event: "Launches mobile detailing services" },
    { year: "2018", event: "Becomes certified dealer for premium coating brands" },
    { year: "2020", event: "Implements contactless service options" },
    { year: "2024", event: "Celebrates 50,000th vehicle detailed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Two Decades of Making Cars Shine</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From a small garage to Metro City's premier auto detailing facility, 
              our journey has been driven by passion, precision, and an unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In 2003, Carlos Rodriguez had a vision: to create a car detailing service that treated 
                every vehicle like a prized possession. Starting with just a passion for automotive care 
                and a small garage, Carlos began transforming cars one at a time, building a reputation 
                for meticulous attention to detail and uncompromising quality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a one-man operation has grown into a team of certified professionals 
                operating from a state-of-the-art 5,000 square foot facility. We've detailed over 
                50,000 vehicles, from daily drivers to exotic supercars, always maintaining the same 
                level of care and precision that built our reputation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, CCS Car Shine Hub stands as Metro City's premier automotive detailing destination, 
                combining traditional craftsmanship with cutting-edge technology to deliver results that 
                consistently exceed our customers' expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=80" 
                alt="Our facility exterior"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=400&q=80" 
                alt="Professional detailing in progress"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core mission and values that have remained constant 
              throughout our 20+ year journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To transform every vehicle that enters our facility into a masterpiece that exceeds 
                  our customers' expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We pursue perfection in every detail, using premium products and proven techniques 
                  to deliver superior results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honest communication, transparent pricing, and ethical business practices guide 
                  every interaction with our customers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  We're proud to serve Metro City and actively participate in community events 
                  and charitable initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience and passion for 
              automotive excellence to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-900">Specialties:</p>
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here are the key milestones that 
              have shaped CCS Car Shine Hub.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-900"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg ml-12 md:ml-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="h-5 w-5 text-blue-900" />
                        <span className="text-2xl font-bold text-blue-900">{item.year}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-900 border-4 border-white rounded-full shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Community */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Certifications & Awards</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span>Certified Gyeon Ceramic Coating Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span>International Detailing Association Member</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span>Better Business Bureau A+ Rating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span>Metro City Business Excellence Award 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span>Professional Paint Correction Certification</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Community Involvement</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-900 mt-1" />
                  <div>
                    <p className="font-semibold">Annual Car Show Sponsor</p>
                    <p className="text-gray-600">Supporting local automotive enthusiasts since 2010</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <p className="font-semibold">Charity Vehicle Details</p>
                    <p className="text-gray-600">Free services for veterans and families in need</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Local High School Partnership</p>
                    <p className="text-gray-600">Training programs for automotive students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the CCS Difference</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to see why thousands of customers trust us with their vehicles? 
            Join our family of satisfied customers today.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link to="/contact">Book Your Service Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
