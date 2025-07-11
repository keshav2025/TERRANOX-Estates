import React from 'react';
import { Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Terranox Estates LLP</h2>
          <p className="text-lg text-gray-600">Leading Real Estate Consultants in India</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Terranox Office"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6 text-gray-700 max-w-2xl mx-auto lg:mx-0">
            <p>
              <strong>Terranox Estates</strong> is more than just a real estate firm — we're your strategic partners in property success.
              Based in Noida, India, our core services span residential and commercial sales, asset management, leasing, and advisory.
            </p>
            <p>
              We specialize in premium developments like office towers, luxury villas, serviced apartments, and affordable housing — each
              tailored to match your unique goals.
            </p>
            <p>
              Whether you're buying, selling, or leasing, we offer trusted guidance, seamless transactions, and unmatched market expertise to
              help you make smart investment decisions.
            </p>

            {/* Icon Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Channel Partner Advantage</h4>
                  <p className="text-sm text-gray-600">
                    Get exclusive access to top-tier residential and commercial properties via our strategic developer partnerships in Gurgaon.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Reputation Built on Trust</h4>
                  <p className="text-sm text-gray-600">
                    We are known for transparency, reliability, and smooth closure of high-value real estate transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
