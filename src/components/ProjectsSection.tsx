import React from 'react';

const projects = [
  {
    title: 'Elan Empire...',
    developer: 'Elan India',
    location: 'Sector 66, Gurugram',
    price: '1.1 Cr* Onwards',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'Elan Paradise...',
    developer: 'Elan India',
    location: 'Sector 50, Gurugram',
    price: '2.19 Cr* Onwards',
    image: 'https://images.pexels.com/photos/15059576/pexels-photo-15059576.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'Elan The Mark...',
    developer: 'Elan India',
    location: 'Sector 106, Gurugram',
    price: '1 Cr*',
    image: 'https://images.pexels.com/photos/32937258/pexels-photo-32937258.jpeg',
    status: 'New Launch',
  },
  {
    title: 'Elan Miracle...',
    developer: 'Elan India',
    location: 'Sector 84, Gurugram',
    price: '55 Lakh* Onwards',
    image: ' https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'Elan Epic...',
    developer: 'Elan India',
    location: 'Sector 70, Gurugram',
    price: '1.80 Cr* Onwards',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'Elan Mercado...',
    developer: 'Elan India',
    location: 'NH-8, Sector-80, Gurugram',
    price: '75.0 Lac',
    image: ' https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'Elan Town Centre...',
    developer: 'Elan India',
    location: 'Sector 67, Gurugram',
    price: '31.0 Lac',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    status: 'Completed',
  },
  {
    title: 'M3M Paragon 57...',
    developer: 'M3M India',
    location: 'Sector 57, Gurugram',
    price: '1.2 Cr* Onwards',
    image: ' https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg',
    status: 'New Launch',
  },
  {
    title: 'M3M Capital Walk...',
    developer: 'M3M India',
    location: 'Sector 113, Gurugram',
    price: '2.5 Cr* Onwards',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'M3M Broadway...',
    developer: 'M3M India',
    location: 'Sector 71, Gurugram',
    price: '1.7 Cr* Onwards',
    image: ' https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg',
    status: 'Completed',
  },
  {
    title: 'M3M Corner Walk...',
    developer: 'M3M India',
    location: 'Sector 74, Gurugram',
    price: '1.3 Cr* Onwards',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'M3M Prive 73...',
    developer: 'M3M India',
    location: 'Sector 73, Gurugram',
    price: '1.1 Cr* Onwards',
    image: ' https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'M3M Urbana...',
    developer: 'M3M India',
    location: 'Sector 67, Gurugram',
    price: '1.6 Cr* Onwards',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    status: 'Completed',
  },
  {
    title: 'M3M Skywalk...',
    developer: 'M3M India',
    location: 'Sector 74, Gurugram',
    price: '1.9 Cr* Onwards',
    image: ' https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg',
    status: 'New Launch',
  },
  {
    title: 'M3M Atrium...',
    developer: 'M3M India',
    location: 'Sector 67, Gurugram',
    price: '1.4 Cr* Onwards',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'DLF Capital Greens',
    developer: 'DLF',
    location: 'Karampura, Delhi',
    price: '2.5 Cr* Onwards',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'New Launch',
  },
  {
    title: 'ATS Knightsbridge',
    developer: 'ATS',
    location: 'Sector 124, Noida',
    price: '7.5 Cr* Onwards',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    status: 'Under Construction',
  },
  {
    title: 'Godrej Meridien',
    developer: 'Godrej Properties',
    location: 'Sector 106, Gurgaon',
    price: '1.8 Cr* Onwards',
    image: 'https://images.pexels.com/photos/3937730/pexels-photo-3937730.jpeg',
    status: 'Completed',
  },
];

const statusColors: Record<string, string> = {
  'Under Construction': 'bg-yellow-400 text-yellow-900',
  'New Launch': 'bg-blue-400 text-blue-900',
  'Completed': 'bg-green-400 text-green-900',
};

interface ProjectsSectionProps {
  searchQuery?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ searchQuery = '' }) => {
  if (!searchQuery) return null;
  const filteredProjects = projects.filter(project => {
    const q = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.developer.toLowerCase().includes(q) ||
      project.location.toLowerCase().includes(q)
    );
  });
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status] || 'bg-gray-300 text-gray-800'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2 truncate">By {project.developer}</p>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span>{project.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">{project.price}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
                    <span>View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 