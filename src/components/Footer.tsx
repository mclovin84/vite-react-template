import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About SAA', href: '#about' },
    { name: 'Find Meetings', href: '#meetings' },
    { name: 'Literature', href: '#literature' },
    { name: 'Newcomers', href: '#newcomers' },
    { name: 'Sponsorship', href: '#sponsorship' },
  ];

  const resources = [
    { name: 'The Twelve Steps', href: '#steps' },
    { name: 'The Twelve Traditions', href: '#traditions' },
    { name: 'Recovery Tools', href: '#tools' },
    { name: 'Meeting Formats', href: '#formats' },
    { name: 'Service Opportunities', href: '#service' },
  ];

  const support = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Accessibility', href: '#accessibility' },
    { name: 'Site Map', href: '#sitemap' },
  ];

  return (
    <footer id="contact" className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#2B5F2F] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="text-white font-bold text-xl">
                SAA Recovery
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A fellowship of recovery supporting individuals on their journey 
              towards sexual sobriety and healthy living.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} />
                <span>info@saa-recovery.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} />
                <span>National Office</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    {link.name}
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    {resource.name}
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    {item.name}
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Sex Addicts Anonymous. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              SAA is a spiritual program based on the principles and traditions of Alcoholics Anonymous.
              The only requirement for membership is a desire to stop addictive sexual behavior.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;