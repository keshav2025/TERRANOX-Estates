import React, { lazy, Suspense } from "react";
import HeroNew from '../components/HeroNew';
import PropertyTypes from '../components/PropertyTypes';
import TrendingLocations from '../components/TrendingLocations';
import About from '../components/About';
import Builders from '../components/Builders';
import PopularProperties from '../components/PopularProperties';
import ProjectsSection from '../components/ProjectsSection';

const Home = () => {
  return (
    <>
      <HeroNew />
      <PropertyTypes />
      <TrendingLocations />
      <About />
      <Builders />
      <PopularProperties />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection />
      </Suspense>
    </>
  );
};

export default Home;