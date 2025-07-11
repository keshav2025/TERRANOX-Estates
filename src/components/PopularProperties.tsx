import React from 'react';

const properties = [
  {
    title: 'Godrej Riverine',
    developer: 'Godrej Properties Ltd',
    location: 'Noida',
    price: 'Price on Request',
    image: 'https://images.pexels.com/photos/1092063/pexels-photo-1092063.jpeg',
    featured: true,
    status: 'Under Construction',
  },
  {
    title: 'M3M The Cullinan',
    developer: 'M3M',
    location: 'Noida',
    price: 'Price on Request',
    image: 'https://images.pexels.com/photos/932328/pexels-photo-932328.jpeg',
    featured: true,
    status: 'Under Construction',
  },
  {
    title: 'Godrej Majesty',
    developer: 'Godrej Properties Ltd',
    location: 'Noida',
    price: 'Price on Request',
    image: 'https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg',
    featured: true,
    status: 'Under Construction',
  },
  {
    title: 'M3M The Line',
    developer: 'M3M',
    location: 'Noida',
    price: 'Price on Request',
    image: 'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg',
    featured: true,
    status: 'Under Construction',
  },
  {
    title: 'Sobha',
    developer: 'Sobha Ltd',
    location: 'Noida',
    price: 'Price on Request',
    image: 'https://images.pexels.com/photos/36366/pexels-photo.jpg',
    featured: true,
    status: 'Upcoming ',
  },
  {
    title: 'M3M',
    developer: 'M3M',
    location: 'Noida',
    price: 'Price on Request',
    image: 'https://images.pexels.com/photos/973226/pexels-photo-973226.jpeg',
    featured: true,
    status: 'Upcoming',
  },
  {
    title: 'Eldeco',
    developer: 'Eldeco Pvt Ltd',
    location: 'Noida',
    price: 'Price on Request',
    image: 'https://images.pexels.com/photos/164394/pexels-photo-164394.jpeg',
    featured: true,
    status: 'Upcoming',
  }
];

const PopularProperties: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              Discover Popular Properties
            </h2>
            <p className="text-gray-600 text-lg">Making your money make money</p>
          </div>
          <a
            href="#"
            className="text-black font-semibold flex items-center space-x-1 hover:text-yellow-500 transition-colors"
          >
            <span>See All Properties</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        <div className="mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6">
            {properties.map((property, idx) => (
              <div
                key={idx}
                className="min-w-[340px] max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex-shrink-0 relative"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex space-x-2 z-10">
                    {property.featured && (
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                        FEATURED
                      </span>
                    )}
                    <span className={`bg-black text-white text-xs font-semibold px-3 py-1 rounded-full`}>{property.status}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{property.title}</h3>
                  <p className="text-gray-500 text-sm mb-1 truncate">By {property.developer}</p>
                  <p className="text-gray-500 text-sm mb-2 truncate">{property.location}</p>
                  <p className="text-black text-base font-bold">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProperties; 