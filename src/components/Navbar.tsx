import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from '/logo0.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#120A07] text-[#FFD180] py-3 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* ✅ Updated Logo */}
         <Link to="/" className="flex items-center space-x-4">
  <img
    src={logo}
    alt="Terranox Logo"
    className="h-16 w-auto object-contain" // ⬅️ Increased height (was h-12)
  />
  <div className="leading-tight font-[Poppins]"> {/* Apply custom font */}
    <h1 className="text-xl font-extrabold tracking-wider text-[#FFD180]">
      TERRANOX
    </h1>
    <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#f6c979] font-semibold italic">
      Estates
    </p>
  </div>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center text-[#F6C979] space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/') ? 'text-[#F6C979]' : 'hover:text-amber-300'}`}>
              Home
            </Link>
<div>
  <Link
    to="/about-company"
    className={`flex items-center space-x-1 transition-colors ${
      isActive('/about-company') ? 'text-[#FFD180]' : 'hover:text-[#FFD183]'
    }`}
  >
    <span>About Company</span>
  </Link>
</div>

            <div className="relative">
  <button
    onClick={() => setShowProjectsDropdown((prev) => !prev)}
    className={`flex items-center space-x-1 transition-colors ${
      isActive('/projects') ? 'text-[#FFD180]' : 'hover:text-[#FFD183]'
    }`}
  >
    <span>Projects</span>
    <ChevronDown className="w-4 h-4" />
  </button>

  {showProjectsDropdown && (
    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
      <Link
        to="/projects?type=SCO"
        onClick={() => setShowProjectsDropdown(false)}
        className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300"
      >
        SCO
      </Link>
      <Link
        to="/projects?type=Commercial"
        onClick={() => setShowProjectsDropdown(false)}
        className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300"
      >
        Commercial
      </Link>
      <Link
        to="/projects?type=Residential"
        onClick={() => setShowProjectsDropdown(false)}
        className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300"
      >
        Residential
      </Link>
    </div>
  )}
</div>


            <Link to="/career" className={`transition-colors ${isActive('/career') ? 'text-[#FFD180]' : 'hover:text-[#FFD183]'}`}>
              Career
            </Link>

            <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-[#FFD180]' : 'hover:text-[#FFD180]'}`}>
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
              className="bg-[#FFD180]  text-black px-6 py-2 rounded-full hover:bg-[#fde68a] transition-all duration-300 transform hover:scale-105"
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
             <Link to="/" onClick={() => setIsMenuOpen(false)} className={isActive('/') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>Home</Link>

<Link to="/about-company" onClick={() => setIsMenuOpen(false)} className={isActive('/about-company') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>About Company</Link>

<Link to="/projects" onClick={() => setIsMenuOpen(false)} className={isActive('/projects') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>Projects</Link>

<Link to="/career" onClick={() => setIsMenuOpen(false)} className={isActive('/career') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>Career</Link>

<Link to="/contact" onClick={() => setIsMenuOpen(false)} className={isActive('/contact') ? 'text-orange-400' : 'hover:text-orange-300 transition-colors'}>Contact Us</Link>

              <div className="flex items-center space-x-2 pt-2">
                <Phone className="w-4 h-4 text-[#facc15]" />
                <span className="text-sm text-[#facc15]">+919354442533</span>
              </div>

              {/* Mobile CTA */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
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
