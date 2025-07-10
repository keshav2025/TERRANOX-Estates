import React, { useState } from 'react';
import { MapPin, Filter } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get('search')?.toLowerCase() || '';
  const typeQuery = params.get('type') || '';
  const [sortOption, setSortOption] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Godrej Riverine',
      developer: 'Godrej Properties Ltd',
      location: 'Noida',
      price: '₹9.6 Cr',
      priceValue: 96000000,
      status: 'New Launch',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Godrej Majesty',
      developer: 'Godrej Properties Ltd',
      location: 'Noida',
      price: 'Price on Request',
      priceValue: 0,
      status: 'Under Construction',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/3937730/pexels-photo-3937730.jpeg'
    },
    {
      id: 4,
      title: 'M3M The Cullinan',
      developer: 'M3M India',
      location: 'Noida',
      price: '₹2.43 Cr Onwards',
      priceValue: 24300000,
      status: 'Upcoming',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg'
    },
    {
      id: 5,
      title: 'Sobha International City',
      developer: 'Sobha Ltd',
      location: 'Gurgaon',
      price: '₹2.43 Cr Onwards',
      priceValue: 24300000,
      status: 'Upcoming',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg'
    },
    {
      id: 6,
      title: 'Eldeco Centre',
      developer: 'Eldeco Pvt Ltd',
      location: 'Gurgaon',
      price: '₹2.43 Cr Onwards',
      priceValue: 24300000,
      status: 'Upcoming',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: 'Ace Capitol',
      developer: 'Ace Group',
      location: 'Gurgaon',
      price: '₹2.43 Cr Onwards',
      priceValue: 24300000,
      status: 'Under Construction',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/409842/pexels-photo-409842.jpeg'
    },
    {
      id: 8,
      title: 'Elan Miracle',
      developer: 'Elan Group',
      location: 'Gurgaon',
      price: '₹2.43 Cr Onwards',
      priceValue: 24300000,
      status: 'Under Construction',
      category: 'SCO',
      image: 'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg'
    },
    {
      id: 9,
      title: 'Elan The Mark',
      developer: 'Elan Group',
      location: 'Gurgaon',
      price: '₹2.43 Cr Onwards',
      priceValue: 24300000,
      status: 'Under Construction',
      category: 'SCO',
      image: 'https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg'
    },
    {
      id: 10,
      title: 'Elan Paradise',
      developer: 'Elan Group',
      location: 'Gurgaon',
      price: '₹2.43 Cr Onwards',
      priceValue: 24300000,
      status: 'Under Construction',
      category: 'SCO',
      image: 'https://images.pexels.com/photos/932328/pexels-photo-932328.jpeg'
    },
    {
      id: 11,
      title: 'Elan Empire',
      developer: 'Elan Group',
      location: 'Gurgaon',
      price: '₹2.43 Cr Onwards',
      priceValue: 24300000,
      status: 'Under Construction',
      category: 'SCO',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg'
    }
  ];

  const filteredByType = typeQuery
    ? projects.filter(p => p.category.toLowerCase() === typeQuery.toLowerCase())
    : projects;

  const filteredProjects = searchQuery
    ? filteredByType.filter(project =>
        project.title.toLowerCase().includes(searchQuery) ||
        project.developer.toLowerCase().includes(searchQuery) ||
        project.location.toLowerCase().includes(searchQuery)
      )
    : filteredByType;

  // Sort projects based on selected option
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortOption) {
      case 'Price: Low to High':
        return a.priceValue - b.priceValue;
      case 'Price: High to Low':
        return b.priceValue - a.priceValue;
      case 'Newest First':
        // Assuming newer projects have higher IDs
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative text-white text-4xl font-bold z-10">
          {typeQuery ? `${typeQuery} Projects` : `All Projects`}
        </h1>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {typeQuery ? `${typeQuery} Projects` : 'All Projects'}
              </h2>
              <p className="text-gray-600">
                {sortedProjects.length} properties found
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select 
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest First">Newest First</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'New Launch'
                        ? 'bg-yellow-400 text-yellow-900'
                        : 'bg-blue-400 text-blue-900'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">By {project.developer}</p>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">{project.price}</span>
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/917984897775?text=${encodeURIComponent(
                          `Hello, I'm interested in "${project.title}" by ${project.developer}, located at ${project.location}. Please share more details.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        WhatsApp
                      </a>
                      <a
                        href="tel:+917984897775"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;