import React from 'react';
import { Shield, Users, Award, Target, Eye, Heart } from 'lucide-react';

const AboutCompany = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Company</h1>
          <p className="text-xl">Real Estate with The world's investors</p>
        </div>
      </section>

      {/* About Estatex Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business meeting"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Estatex
              </h2>
              
              <p className="text-gray-700 leading-relaxed">
  At Terranox Estate, we redefine real estate with a client-first approach. Headquartered in Noida, we offer a full spectrum of services including sales, leasing, asset management, and strategic real estate advisory for both commercial and residential segments.
</p>

<p className="text-gray-700 leading-relaxed">
  Whether it’s retail spaces, office suites, or luxury residences like villas and penthouses — we provide tailor-made property solutions backed by deep market knowledge and strong industry networks.
</p>

<p className="text-gray-700 leading-relaxed">
  With over 5 years of proven expertise, we pride ourselves on delivering smooth, result-driven real estate transactions — helping clients navigate challenges with transparency, trust, and long-term value creation.
</p>

            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional real estate services that exceed client expectations while maintaining the highest standards of integrity, professionalism, and innovation in every transaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Eye className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred real estate partner in India, known for our expertise, reliability, and commitment to helping clients achieve their property dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600">What makes us different from others</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Partner</h3>
              <p className="text-gray-600">
                With over 5 years of experience, we have built a reputation as a trusted partner in real estate transactions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experienced professionals provides personalized service and expert guidance throughout your journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric</h3>
              <p className="text-gray-600">
                We prioritize our clients' needs and work tirelessly to ensure their satisfaction and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificates & Awards
            </h2>
            <p className="text-gray-600">Recognition of our excellence in real estate services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence Award</h3>
                <p className="text-gray-600 text-sm">Recognition for outstanding service in real estate</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;