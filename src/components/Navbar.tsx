import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from '/logo.jpeg';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#130a06] text-[#facc15] py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-24 h-auto" />
            </div>
            <div>
              <div className="text-yellow-500 font-bold text-xl">TERRANOX</div>
              <div className="text-l text-gray-000 -mt-1">Estates</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/') ? 'text-amber-400' : 'hover:text-amber-300'}`}>
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button className={`flex items-center space-x-1 transition-colors ${isActive('/about-company') ? 'text-orange-400' : 'hover:text-orange-300'}`}>
                <span>About Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showAboutDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2">
                  <Link to="/about-company" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300">About Estatex</Link>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300">Our Mission & Vision</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300">Why Choose Us</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300">Certificates & Awards</a>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setShowProjectsDropdown(true)}
              onMouseLeave={() => setShowProjectsDropdown(false)}
            >
              <button className={`flex items-center space-x-1 transition-colors ${isActive('/projects') ? 'text-orange-400' : 'hover:text-orange-300'}`}>
                <span>Projects</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showProjectsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2">
                  <Link to="/projects?type=SCO" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300">SCO</Link>
                  <Link to="/projects?type=Commercial" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300">Commercial</Link>
                  <Link to="/projects?type=Residential" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300">Residential</Link>
                </div>
              )}
            </div>

            <Link to="/career" className={`transition-colors ${isActive('/career') ? 'text-orange-400' : 'hover:text-orange-300'}`}>
              Career
            </Link>

            <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-orange-400' : 'hover:text-orange-300'}`}>
              Contact Us
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-orange-400" />
              <span className="text-sm">+919354442533</span>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#facc15] text-black px-6 py-2 rounded-full hover:bg-[#fde68a] transition-all duration-300 transform hover:scale-105"
            >
              Enquiry Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#facc15] bg-[#130a06]">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className={isActive('/') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>Home</Link>
              <Link to="/about-company" className={isActive('/about-company') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>About Company</Link>
              <Link to="/projects" className={isActive('/projects') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>Projects</Link>
              <Link to="/career" className={isActive('/career') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>Career</Link>
              <Link to="/contact" className={isActive('/contact') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>Contact Us</Link>

              <div className="flex items-center space-x-2 pt-2">
                <Phone className="w-4 h-4 text-[#facc15]" />
                <span className="text-sm text-[#facc15]">+919354442533</span>
              </div>

              {/* Mobile CTA */}
              <button
                onClick={() => {
                  setIsMenuOpen(false); // close menu after click
                  navigate('/contact');
                }}
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full w-fit"
              >
                Enquiry Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
