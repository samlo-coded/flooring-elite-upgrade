
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="section-padding bg-brand-gray">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team today. We're here to help with all your flooring needs.
            </p>
          </div>
        </div>
        
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-navy mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-brand-blue mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Phone</h3>
                      <p className="text-gray-600">02476 675 488</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-brand-blue mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Email</h3>
                      <p className="text-gray-600">info@midlandsflooring.co.uk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-brand-blue mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Address</h3>
                      <p className="text-gray-600">
                        Midlands Region<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-brand-blue mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-gray p-8 rounded-lg">
                <h3 className="font-heading text-2xl font-bold text-brand-navy mb-6">
                  Send us a message
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to get started? Fill out our quote form for a detailed estimate tailored to your project.
                </p>
                <a
                  href="/quote"
                  className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg hover:bg-brand-navy transition-colors font-medium"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
