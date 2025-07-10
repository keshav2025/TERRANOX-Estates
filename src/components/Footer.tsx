import React from 'react';
import { Phone, Mail, Link , Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import logo from '/logo1.webp'; 

const Footer = () => {
  return (
    <footer className="bg-[#120A07] text-[#facc15] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
    {/* Company Info */}
<div className="lg:col-span-1">
  <div className="flex items-center space-x-4 mb-4">
  <img src={logo} alt="Logo" loading="lazy" className="w-12 h-12 rounded-md" />

    <span className="text-[#FFD180] font-bold text-xl">TERRANOX Estates</span>
  </div>

  <p className="text-gray-300 text-sm leading-relaxed mb-6">
    With a collective experience of more than 5 years in the trade, we would be considered perfectly capable to overcome all obstacles in the process of bringing a Real Estate transaction to a smooth closure. <br />

  </p>

  <div className="space-y-3">
    <div>
      <h4 className="text-white font-semibold mb-2">Talk Free Customer Care</h4>
      <div className="flex items-center space-x-2">
        <Phone className="w-4 h-4 text-orange-400" />
        <span className="text-sm">+91 93544 42533</span>
        
      </div>
      <div className="flex items-center space-x-2">
      <Phone className="w-4 h-4 text-orange-400" />
      <span className="text-sm">+91 7984897775</span>
      </div>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-2">Contact by Email</h4>
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4 text-orange-400" />
        <span className="text-sm">terranoxestates@gmail.com</span>
      </div>
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4 text-orange-400" />
        <span className="text-sm">admin@terranoxestates.com</span>
      </div>
    </div>
  </div>

  <div className="mt-6">
    <h4 className="text-white font-semibold mb-4">Follow us on social media</h4>
    <div className="flex space-x-4">
     
      <a href='https://www.instagram.com/terranox_estates?igsh=MTEzcDhjeHptZTl5Zw=='><Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" /></a>
      <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
      <a href="https://www.linkedin.com/in/terranox-estate-668671371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
        <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
      </a>
     
    </div>
  </div>
</div>

          
          {/* Trending Projects */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Trending Projects</h3>
            <ul className="space-y-3">
              <li><a href="/projects?type=SCO" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">M3M The Cullinan</a></li>
              <li><a href="/projects?type=SCO" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">M3M The Line</a></li>
              <li><a href="projects?type=Commercial" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Trump Towers 1.0</a></li>
              <li><a href="projects?type=Commercial" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Trump Tower Noida</a></li>
              <li><a href="projects?type=Commercial" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">JACOB AND CO. Residences</a></li>
              <li><a href="/projects?type=Commercial" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Godrej Riverine             </a></li>
              <li><a href="/projects?type=Commercial" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Elie Saab Residencies</a></li>
        
            </ul>
          </div>
          
        
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Home</a></li>
              <li><a href="/about-company" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">About Company</a></li>
             

              <li><a href="/projects?type=SCO" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Builders</a></li>
           
              <li><a href="/career" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">News And Media</a></li>
              <li><a href="/career" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">FAQs</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Location</h3>
            <ul className="space-y-3">
             
              <li><a href="/projects?type=SCO" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Noida</a></li>
              <li><a href="/projects?type=Commercial" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Faridabad</a></li>
              <li><a href="/projects?type=SCO" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">New Delhi</a></li>
              <li><a href="/projects?type=Commercial" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Gurgaon</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © Terranox estate- All rights reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
  {[
    { label: 'Privacy Policy', hint: 'Real estate website privacy rules' },
    { label: 'Copyright Policy', hint: 'Real estate content ownership' },
    { label: 'Terms & Conditions', hint: 'Real estate service terms' }
  ].map((item, idx) => (
    <div className="relative group" key={idx}>
      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
        {item.label}
      </a>
      <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
        {item.hint}
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;