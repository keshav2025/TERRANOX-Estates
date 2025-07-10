import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp, Building } from 'lucide-react';

const Career = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Sales Executive',
      location: 'Gurugram',
      contact: '+917984897775',
      email: 'admin@terranoxestates.com',
      company: 'Terranox estate',
      description: 'We are looking for a dynamic Sales Executive to join our team. The ideal candidate should have excellent communication skills and a passion for real estate.',
      requirements: [
        'Bachelor\'s degree in any field',
        '1-3 years of experience in sales',
        'Excellent communication skills',
        'Knowledge of real estate market preferred',
        'Ability to work in a team environment'
      ],
      responsibilities: [
        'Generate leads and convert them into sales',
        'Maintain relationships with clients',
        'Conduct property visits with potential buyers',
        'Achieve monthly sales targets',
        'Prepare sales reports and documentation'
      ]
    },
    {
      id: 2,
      title: 'Marketing Manager',
      location: 'Sector 126 ,Nodia',
      contact: '+91-9354442533',
      email: 'terranoxestates@gmail.com',
      company: 'Terranox estate',
      description: 'We are seeking an experienced Marketing Manager to develop and execute marketing strategies for our real estate projects.',
      requirements: [
        'MBA in Marketing or related field',
        '3-5 years of marketing experience',
        'Experience in real estate marketing preferred',
        'Strong analytical and creative skills',
        'Proficiency in digital marketing tools'
      ],
      responsibilities: [
        'Develop comprehensive marketing strategies',
        'Manage digital marketing campaigns',
        'Coordinate with sales team for lead generation',
        'Analyze market trends and competitor activities',
        'Manage marketing budget and ROI tracking'
      ]
    }
  ];

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

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
        
        {/* About Company Dropdown */}
     
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Career</h1>
          <p className="text-xl">Join our team and build your future with us</p>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-gray-600">
              Explore exciting career opportunities with Terranox estate
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleJobExpansion(job.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building className="w-5 h-5 text-orange-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span><strong>Location:</strong> {job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          <span><strong>Contact Number:</strong> {job.contact}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          <span><strong>Email Id:</strong> {job.email}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-600"><strong>Company:</strong> {job.company}</p>
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      {expandedJob === job.id ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                
                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                    <div className="pt-6 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Description:</h4>
                        <p className="text-gray-700">{job.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        
                      <a href="tel:+919354442533">
  <button className="border bg-green-400 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
    Call Now +91 93544 42533
  </button>
</a>

                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Terranox estate?
            </h2>
            <p className="text-gray-600">
              Build your career with India's leading real estate company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">
                Advance your career with comprehensive training programs and clear growth paths.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Benefits</h3>
              <p className="text-gray-600">
                Enjoy competitive salaries, performance bonuses, and comprehensive benefits package.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dynamic Environment</h3>
              <p className="text-gray-600">
                Work in a fast-paced, innovative environment with industry-leading professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;