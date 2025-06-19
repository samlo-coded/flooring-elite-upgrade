import React, { useState } from 'react';
import { Menu, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gradient-brand text-white py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Phone size={16} className="mr-2" />
              <span>02476 675 488</span>
            </div>
            <div className="hidden md:flex items-center text-sm">
              <Mail size={16} className="mr-2" />
              <span>info@midlandsflooring.co.uk</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} className="hover:text-brand-lightblue transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} className="hover:text-brand-lightblue transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={18} className="hover:text-brand-lightblue transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} className="hover:text-brand-lightblue transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/b32260d9-1bf0-4958-9536-f9ff16d1ad4b.png"
                alt="Midlands Flooring Ltd Logo"
                className="h-10 mr-2"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-brand-navy hover:text-brand-blue transition-colors">Home</Link>
            <Link to="/services" className="font-medium text-brand-navy hover:text-brand-blue transition-colors">Services</Link>
            <Link to="/projects" className="font-medium text-brand-navy hover:text-brand-blue transition-colors">Projects</Link>
            <Link to="/about" className="font-medium text-brand-navy hover:text-brand-blue transition-colors">About Us</Link>
            <Link to="/contact" className="font-medium text-brand-navy hover:text-brand-blue transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Button className="btn-primary">Get a Quote</Button>
          </div>

          <button className="md:hidden text-brand-navy" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute w-full z-50">
          <div className="container-custom flex flex-col space-y-4">
            <Link to="/" className="font-medium text-brand-navy hover:text-brand-blue transition-colors py-2 border-b border-gray-100">Home</Link>
            <Link to="/services" className="font-medium text-brand-navy hover:text-brand-blue transition-colors py-2 border-b border-gray-100">Services</Link>
            <Link to="/projects" className="font-medium text-brand-navy hover:text-brand-blue transition-colors py-2 border-b border-gray-100">Projects</Link>
            <Link to="/about" className="font-medium text-brand-navy hover:text-brand-blue transition-colors py-2 border-b border-gray-100">About Us</Link>
            <Link to="/contact" className="font-medium text-brand-navy hover:text-brand-blue transition-colors py-2 border-b border-gray-100">Contact</Link>
            <Button className="btn-primary w-full mt-4">Get a Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
