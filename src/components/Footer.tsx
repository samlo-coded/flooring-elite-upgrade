
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Facebook, Instagram, Linkedin, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/b32260d9-1bf0-4958-9536-f9ff16d1ad4b.png" 
                alt="Midlands Flooring Ltd Logo" 
                className="h-10 mr-2" 
              />
              <div className="ml-2">
                <span className="font-heading font-bold text-xl text-white">Midlands</span>
                <span className="font-heading font-bold text-xl text-brand-lightblue"> Flooring</span>
                <span className="font-heading text-sm text-white ml-1">Ltd</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing premium flooring solutions for commercial and domestic clients across the Midlands since 2001.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-brand-blue p-2 rounded-full hover:bg-brand-lightblue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-brand-blue p-2 rounded-full hover:bg-brand-lightblue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-brand-blue p-2 rounded-full hover:bg-brand-lightblue transition-colors">
                <X size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-brand-blue p-2 rounded-full hover:bg-brand-lightblue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/commercial" className="text-gray-300 hover:text-white transition-colors">Commercial Flooring</Link>
              </li>
              <li>
                <Link to="/services/domestic" className="text-gray-300 hover:text-white transition-colors">Domestic Flooring</Link>
              </li>
              <li>
                <Link to="/services/carpets" className="text-gray-300 hover:text-white transition-colors">Carpet Installation</Link>
              </li>
              <li>
                <Link to="/services/vinyl" className="text-gray-300 hover:text-white transition-colors">Vinyl Flooring</Link>
              </li>
              <li>
                <Link to="/services/wood" className="text-gray-300 hover:text-white transition-colors">Wooden Flooring</Link>
              </li>
              <li>
                <Link to="/services/safety" className="text-gray-300 hover:text-white transition-colors">Safety Flooring</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-300 hover:text-white transition-colors">Request a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall size={18} className="mr-2 mt-1 text-brand-lightblue" />
                <span>02476 675 488</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-brand-lightblue" />
                <span>info@midlandsflooring.co.uk</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-brand-lightblue" />
                <span>Unit 12, Business Park<br />Coventry, CV1 2PX<br />United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-brand-blue my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Midlands Flooring Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
