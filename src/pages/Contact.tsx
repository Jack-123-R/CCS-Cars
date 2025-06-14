
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleColor: '',
    vehicleMileage: '',
    serviceInterest: '',
    serviceLocation: '',
    preferredDate: '',
    preferredTime: '',
    budgetRange: '',
    specialRequests: '',
    hearAboutUs: ''
  });
  
  const { toast } = useToast();

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/94ufcdfk7TtFSomw8', '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 2 hours to discuss your service needs and schedule your appointment.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      vehicleYear: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleColor: '',
      vehicleMileage: '',
      serviceInterest: '',
      serviceLocation: '',
      preferredDate: '',
      preferredTime: '',
      budgetRange: '',
      specialRequests: '',
      hearAboutUs: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Interior Deep Clean",
    "Premium Interior Protection", 
    "Premium Wash & Wax",
    "Paint Correction & Ceramic Coating",
    "Engine Bay Detailing",
    "Headlight Restoration",
    "Paint Protection Film",
    "Mobile Detailing Service",
    "Complete Detail Package",
    "Free Consultation"
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM", 
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM"
  ];

  const budgetRanges = [
    "Under $100",
    "$100 - $200",
    "$200 - $400", 
    "$400 - $600",
    "$600 - $800",
    "$800 - $1,000",
    "$1,000+"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Ready to Transform Your Car?</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get your free quote and schedule your service today. Multiple contact methods available 
              for your convenience, including same-day and emergency services.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Detailed Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                      />
                      <Input
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input
                        placeholder="Year *"
                        value={formData.vehicleYear}
                        onChange={(e) => handleChange('vehicleYear', e.target.value)}
                        required
                      />
                      <Input
                        placeholder="Make *"
                        value={formData.vehicleMake}
                        onChange={(e) => handleChange('vehicleMake', e.target.value)}
                        required
                      />
                      <Input
                        placeholder="Model *"
                        value={formData.vehicleModel}
                        onChange={(e) => handleChange('vehicleModel', e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <Input
                        placeholder="Color"
                        value={formData.vehicleColor}
                        onChange={(e) => handleChange('vehicleColor', e.target.value)}
                      />
                      <Input
                        placeholder="Mileage"
                        value={formData.vehicleMileage}
                        onChange={(e) => handleChange('vehicleMileage', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Service Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select value={formData.serviceInterest} onValueChange={(value) => handleChange('serviceInterest', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Service Interest *" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      <Select value={formData.serviceLocation} onValueChange={(value) => handleChange('serviceLocation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Service Location *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="facility">Our Facility</SelectItem>
                          <SelectItem value="mobile">Mobile Service (Your Location)</SelectItem>
                          <SelectItem value="either">Either Option Works</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Scheduling</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="date"
                        placeholder="Preferred Date"
                        value={formData.preferredDate}
                        onChange={(e) => handleChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      
                      <Select value={formData.preferredTime} onValueChange={(value) => handleChange('preferredTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Preferred Time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Budget and Additional Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select value={formData.budgetRange} onValueChange={(value) => handleChange('budgetRange', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Budget Range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      <Select value={formData.hearAboutUs} onValueChange={(value) => handleChange('hearAboutUs', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How did you hear about us?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="referral">Friend/Family Referral</SelectItem>
                          <SelectItem value="repeat">Returning Customer</SelectItem>
                          <SelectItem value="advertising">Advertisement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Textarea
                      placeholder="Special Requests or Notes (stains to address, specific concerns, etc.)"
                      value={formData.specialRequests}
                      onChange={(e) => handleChange('specialRequests', e.target.value)}
                      rows={4}
                      className="mt-4"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600">
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call Us Now</h4>
                      <a href="tel:7893821502" className="text-blue-600 hover:text-blue-700 font-medium">
                        7893821502
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alternative Number</h4>
                      <a href="tel:9866335522" className="text-blue-600 hover:text-blue-700 font-medium">
                        9866335522
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visit Our Facility</h4>
                      <div 
                        className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={handleLocationClick}
                        title="Click to open in Google Maps"
                      >
                        <p>A57 Tarakarama Nagar</p>
                        <p>Film Nagar, Hyderabad</p>
                        <p>Sindh 500033</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">Extended hours available by appointment</p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Service */}
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Same-Day Service
                </h3>
                <p className="mb-4">
                  Need your car detailed today? Call us before 2 PM for same-day service availability.
                </p>
                <Button asChild variant="outline" className="border-white text-orange-600 hover:bg-white">
                  <a href="tel:7893821502">Call for Rush Service</a>
                </Button>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We provide mobile detailing services within a 25-mile radius of Hyderabad.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Service Area:</strong> Hyderabad and surrounding communities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept cash, all major credit cards, and mobile payments including Apple Pay and Google Pay.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer package deals?</h3>
                <p className="text-gray-600">Yes! We offer several package deals that combine multiple services at discounted rates. Ask about our monthly maintenance packages.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How far in advance should I book?</h3>
                <p className="text-gray-600">We recommend booking 3-7 days in advance, especially for weekend appointments. Same-day service is available based on availability.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-600">We require 24-hour notice for cancellations. Same-day cancellations may incur a fee. We're happy to reschedule when needed.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
