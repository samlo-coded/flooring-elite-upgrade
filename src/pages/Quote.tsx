
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Quote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="section-padding bg-brand-gray">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you with a detailed quote for your flooring project.
            </p>
          </div>
        </div>
        
        <section className="section-padding bg-white">
          <div className="container-custom max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-brand-navy font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-brand-navy font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-brand-navy font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmEmail" className="text-brand-navy font-medium">
                    Confirm Email Address *
                  </Label>
                  <Input
                    id="confirmEmail"
                    name="confirmEmail"
                    type="email"
                    value={formData.confirmEmail}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="Confirm your email address"
                  />
                </div>
              </div>

              {/* Phone Section */}
              <div>
                <Label htmlFor="phone" className="text-brand-navy font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Section */}
              <div>
                <Label htmlFor="message" className="text-brand-navy font-medium">
                  Project Description *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 min-h-[120px]"
                  placeholder="Please describe your flooring project, including room size, preferred materials, timeline, and any specific requirements..."
                />
              </div>

              <div className="bg-brand-gray p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">
                  By submitting this form, you agree to be contacted by Midlands Flooring regarding your quote request. We respect your privacy and will never share your information with third parties.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Free, no-obligation quotes</li>
                  <li>• Response within 24 hours</li>
                  <li>• Professional consultation included</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary text-lg py-3"
              >
                Submit Quote Request
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
