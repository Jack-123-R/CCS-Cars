
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QuickContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll contact you within 24 hours to schedule your service.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Car?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get a free quote and schedule your service today. Our team is ready to make your car shine like never before.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us Now</h3>
                  <a href="tel:555-123-7446" className="text-blue-200 hover:text-white transition-colors">
                    (555) 123-SHINE
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:info@ccscarshine.com" className="text-blue-200 hover:text-white transition-colors">
                    info@ccscarshine.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Our Facility</h3>
                  <p className="text-blue-200">1234 Shine Street, Metro City, ST 12345</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Same-Day Service Available</h3>
              <p className="text-blue-200">
                Need your car detailed today? Call us before 2 PM for same-day service availability.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </div>
              
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
              />
              
              <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interior-deep-clean">Interior Deep Clean</SelectItem>
                  <SelectItem value="paint-correction">Paint Correction & Ceramic Coating</SelectItem>
                  <SelectItem value="premium-wash">Premium Wash & Wax</SelectItem>
                  <SelectItem value="mobile-detailing">Mobile Detailing</SelectItem>
                  <SelectItem value="full-detail">Full Detail Package</SelectItem>
                  <SelectItem value="consultation">Free Consultation</SelectItem>
                </SelectContent>
              </Select>
              
              <Textarea
                placeholder="Tell us about your vehicle and what you'd like done..."
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={4}
              />
              
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600">
                Get My Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
