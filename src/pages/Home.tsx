import React, { lazy, Suspense ,useState , useEffect } from "react";
import HeroNew from '../components/HeroNew';
import PropertyTypes from '../components/PropertyTypes';
import TrendingLocations from '../components/TrendingLocations';
import About from '../components/About';
// import Builders from '../components/Builders';
import PopularProperties from '../components/PopularProperties';
import ProjectsSection from '../components/ProjectsSection';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setShowPopup(true);
//   }, 20000); // 20 seconds

//   return () => clearTimeout(timer);
// }, []);
  return (
    <>
    {/* {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
      >
        ×
      </button>
      <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full border px-4 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)} */}

      <HeroNew />
      <PropertyTypes />
      <TrendingLocations />
      <About />
      {/* <Builders /> */}
      <PopularProperties />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection />
      </Suspense>
    </>
  );
};

export default Home;