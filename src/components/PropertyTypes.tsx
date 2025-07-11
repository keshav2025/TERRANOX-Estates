import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PropertyTypes = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the projects section with hash
    navigate('/projects');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Looking to Buy a new property or sell an existing one?
          </h2>
          <p className="text-xl text-gray-600">
            Terranox estates LLP provides an awesome solution!
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {['Residential', 'Commercial', 'SCO'].map((type) => (
            <button
              key={type}
              onClick={handleClick}
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group"
            >
              <span className="text-lg font-medium">{type}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
