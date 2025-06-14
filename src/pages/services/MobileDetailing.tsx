
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, ArrowRight, Star, MapPin, Smartphone, Home } from 'lucide-react';
import { ServiceHero, ServiceCTA } from "@/components/services/exports";

// Data for packages, included, locations, etc
const included = [
  "Complete mobile setup at your preferred location",
  "Self-contained water and power supply",
  "All equipment and professional products provided",
  "Choice of service levels (wash, detail, or full service)",
  "Eco-friendly water reclamation system",
  "Flexible scheduling including evenings and weekends",
  "Same attention to detail as our facility services",
  "Professional uniformed technicians",
  "Cleanup and restoration of work area",
  "Service area within 25 miles of Metro City"
];

const locations = [
  {
    icon: Home,
    title: "Your Home",
    description: "Driveway, garage, or any suitable location at your residence with easy vehicle access."
  },
  {
    icon: Smartphone,
    title: "Your Office",
    description: "We'll detail your car while you work - perfect for busy professionals and fleet vehicles."
  },
  {
    icon: MapPin,
    title: "Any Location",
    description: "Special events, car shows, or any location within our 25-mile service radius."
  }
];

const servicelevels = [
  {
    name: "Mobile Express",
    price: "₹6,500",
    duration: "1-1.5 hours",
    services: ["Exterior wash", "Vacuum interior", "Window cleaning", "Tire shine"],
    popular: false
  },
  {
    name: "Mobile Complete",
    price: "₹12,500",
    duration: "2-3 hours", 
    services: ["Premium wash & wax", "Interior deep clean", "Wheel detailing", "Dashboard treatment"],
    popular: true
  },
  {
    name: "Mobile Ultimate",
    price: "₹25,000",
    duration: "4-5 hours",
    services: ["Complete detail", "Paint enhancement", "Interior protection", "Engine bay clean"],
    popular: false
  }
];

export default function MobileDetailing() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Mobile Detailing Service"
        subtitle="Professional auto detailing that comes to you. Whether at home, office, or any location, we bring our expertise and equipment directly to your vehicle for ultimate convenience."
        price="Starting at ₹6,500"
        time="2-4 hours"
        guarantee="25-Mile Service Area"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
        imgAlt="Mobile detailing service"
        cta={
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link to="/contact">Book Mobile Service</Link>
          </Button>
        }
        iconType="rupee"
      />

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Come to Your Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional detailing services wherever it's most convenient for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.title} className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <location.icon className="h-12 w-12 text-red-900 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{location.title}</h3>
                  <p className="text-gray-600">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect level of service for your needs and schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicelevels.map((level) => (
              <Card key={level.name} className={`relative ${level.popular ? 'ring-4 ring-orange-500' : ''} bg-white text-gray-900 shadow-xl`}>
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
                  <p className="text-4xl font-bold text-red-900 mb-2">{level.price}</p>
                  <p className="text-gray-600 mb-6">{level.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {level.services.map((service, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${level.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-red-900 hover:bg-red-800'}`}>
                    <Link to="/contact">Book {level.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile Service Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything needed for professional detailing, delivered to your location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-red-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Mobile Detailing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Ultimate Convenience</h4>
                <p className="text-gray-600 text-sm">No need to drive anywhere - we come to you at your preferred time</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Time Saving</h4>
                <p className="text-gray-600 text-sm">Continue with your day while we make your car look amazing</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Same Quality</h4>
                <p className="text-gray-600 text-sm">Identical attention to detail and professional results as our facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve Metro City and surrounding communities within a 25-mile radius.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-red-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">25-Mile Service Radius</h3>
              <p className="text-gray-600 mb-6">
                Serving Metro City and all surrounding communities. If you're unsure whether 
                we service your area, give us a call for confirmation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">Metro City</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">Westfield</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">Eastbrook</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">Northvale</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Additional travel fees may apply for locations over 15 miles from Metro City
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready for Ultimate Convenience?"
        subtitle="Book your mobile detailing service today and experience professional auto care without leaving your home or office."
        actions={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Book Mobile Service</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
              <a href="tel:555-123-7446">Call (555) 123-SHINE</a>
            </Button>
          </div>
        }
      />
    </div>
  );
}
