import React, { useState } from 'react';
import { Search, MapPin, Settings } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Residential');

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/5087055/pexels-photo-5087055.jpeg")'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Terranox estate: Smart Living. Smarter Investments.
        </h1>
        
        {/* Search Form */}
        <div className="bg-white rounded-xl p-6 shadow-2xl max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['Residential', 'Commercial', 'SCO'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter an Title, address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-gray-900"
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-gray-900">
                <option>All Cities</option>
                <option>Gurgaon</option>
                <option>Noida</option>
                <option>Faridabad</option>
                <option>New Delhi</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <button className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Settings className="w-5 h-5" />
                <span>Advanced</span>
              </button>
            </div>
            
            <div className="md:col-span-2">
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;