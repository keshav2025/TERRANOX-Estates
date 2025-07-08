import React from 'react';
import { ArrowRight } from 'lucide-react';

const TrendingLocations = () => {
  const locations = [
    {
      name: 'Noida',
      properties: '18 Properties',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Faridabad',
      properties: '156',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'New Delhi',
      properties: '89',
      image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Gurgaon',
      properties: '136 Properties',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Trending Locations
            </h2>
            <p className="text-gray-600">
              Browse Locations From a List of Available Cities
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors">
            <span>See All Locations</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-64 ${
                index === 0 || index === 4 ? 'lg:col-span-2' : ''
              }`}
              style={{
                backgroundImage: `url("${location.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${location.gradient} opacity-70`}></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium w-fit">
                  {location.properties}
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">{location.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors mx-auto">
            <span>See All Locations</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingLocations;