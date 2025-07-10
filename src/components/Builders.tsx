import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';




const Builders = () => {
  const navigate = useNavigate();
  const builders = [
    {
      name: 'Godrej',
      location: 'Sector 79, Gurgaon',
      properties: '1 Properties',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/640px-Godrej_Logo.svg.png',
    },
    {
      name: 'Omaxe',
      location: 'Fridabad',
      properties: '2 Properties',
      logo: 'https://pbs.twimg.com/profile_images/1433664487056453676/xYDOgVUI_400x400.jpg'
    },
    {
      name: 'M3M India',
      location: 'Gurugram',
      properties: '45 Properties',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa92xtvm9fvZ9OSvfBZseSHVnd5GE2UkLqL0QxHKlKezKPMhk8QIZcnuOsXXzd7L33csQ&usqp=CAU'
    },
    {
      name: 'Elan India',
      location: 'Gurugram',
      properties: '8 Properties',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HEdryw3pWxRaDHrnhYa-Bx4_Uo2J2YuRbQ&s'
    },
    {
      name: 'Smart World',
      location: 'Gurgaon',
      properties: '2 Properties',
      logo: 'https://assets.about.me/background/users/o/n/e/onedxp_1683204927_095.jpg'
    },
    {
      name: 'Emaar India',
      location: 'Gurugram',
      properties: '7 Properties',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQE95cMMIkc-9g/company-logo_200_200/B56ZU70.SkHQBY-/0/1740465498969/emaarindia_logo?e=2147483647&v=beta&t=dTvevIag1ZcDq8Sn3MKXSSgPf8LkO8WXcl4M8Vnhb4c'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Builders
            </h2>
            <p className="text-gray-600">Making your money make money</p>
          </div>
          <a href='/projects' className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors font-medium">
            <span>See All Builders</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Builder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builders.map((builder) => (
            <div
              key={builder.name}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              <div className="px-4 pt-4">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {builder.properties}
                </span>
              </div>

              {/* Logo */}
              <div className="h-40 flex items-center justify-center px-6 mt-2">
               <img
  src={builder.logo}
  alt={`${builder.name} logo`}
  className="max-h-24 w-auto object-contain"
/>

              </div>

              {/* Details */}
              <div className="p-6 pt-4">
                <h3 className="text-lg font-semibold text-gray-900">{builder.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{builder.location}</p>

                <button
  onClick={() => navigate('/projects')}
  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2 group"
>
  <span>View Listings</span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="md:hidden mt-8 text-center">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors mx-auto font-medium">
            <span>See All Builders</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Builders;
