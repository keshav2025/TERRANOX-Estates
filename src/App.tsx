import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import AboutCompany from './pages/AboutCompany';
import Projects from './pages/Projects';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';
import Builders from './components/Builders'; // <- import this if route needed

function App() {
  return (
    <Router>
      <div className=" bg-white text-black dark:bg-[#0f0f0f] dark:text-white   overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/builders" element={<Builders />} /> {/* Optional route */}
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
