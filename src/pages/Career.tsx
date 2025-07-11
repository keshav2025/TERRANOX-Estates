import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp, Building } from 'lucide-react';

const Career = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Sales Associate',
      location: 'Noida',
      contact: '+917984897775',
      email: 'admin@terranoxestates.com',
      company: 'Terranox Estates',
      description: 'We are looking for a dynamic Sales Associate to join our team. The ideal candidate should have excellent communication skills and a passion for real estate.',
      requirements: [
        "Bachelor's degree in any field",
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
      title: 'Manager',
      location: 'Sector 126, Noida',
      contact: '+91-9354442533',
      email: 'terranoxestates@gmail.com',
      company: 'Terranox Estates',
      description: 'We are seeking an experienced Manager to lead and oversee marketing and sales activities for our real estate projects. This role requires strategic thinking, team leadership, and strong execution.',
      requirements: [
        'MBA in Marketing or related field',
        '3-5 years of experience in real estate sales or marketing',
        'Proven leadership and organizational skills',
        'Strong analytical and creative thinking abilities',
        'Proficiency in CRM and digital marketing tools'
      ],
      responsibilities: [
        'Develop and implement marketing and sales strategies',
        'Lead and manage the sales team effectively',
        'Monitor market trends and adjust plans accordingly',
        'Manage client relations and ensure high customer satisfaction',
        'Track KPIs, performance, and ROI of campaigns'
      ]
    },
    {
      id: 3,
      title: 'Associate Director',
      location: 'Noida',
      contact: '+91-9354442533',
      email: 'admin@terranoxestates.com',
      company: 'Terranox Estates',
      description: 'Terranox Estates is hiring an Associate Director to lead strategic business development, oversee operations, and support organizational growth.',
      requirements: [
        'Master’s degree in Business Administration or relevant field',
        '7+ years of experience in real estate or corporate strategy',
        'Excellent leadership and decision-making skills',
        'Strong business acumen and client management experience',
        'Ability to drive results through cross-functional collaboration'
      ],
      responsibilities: [
        'Oversee strategic planning and execution',
        'Build and maintain key stakeholder relationships',
        'Identify new business opportunities and partnerships',
        'Lead performance reviews and operational planning',
        'Ensure organizational alignment with company goals'
      ]
    },
    {
      id: 4,
      title: 'Assistant Manager',
      location: 'Noida',
      contact: '+917984897775',
      email: 'admin@terranoxestates.com',
      company: 'Terranox Estates',
      description: 'We are looking for a proactive Assistant Manager to support sales and operations, ensuring smooth coordination across departments.',
      requirements: [
        'Bachelor’s degree (MBA preferred)',
        '2-4 years of experience in real estate or business operations',
        'Strong communication and organizational skills',
        'Basic knowledge of real estate industry',
        'Team-oriented mindset with a problem-solving attitude'
      ],
      responsibilities: [
        'Assist in planning and managing daily operations',
        'Support the sales and client servicing team',
        'Coordinate with internal departments for smooth workflow',
        'Track project timelines and ensure timely updates',
        'Prepare reports and assist in performance reviews'
      ]
    },
    {
      id: 5,
      title: 'Sales Coordinator',
      location: 'Noida',
      contact: '+917984897775',
      email: 'admin@terranoxestates.com',
      company: 'Terranox Estates',
      description: 'We are hiring a Sales Coordinator to provide administrative support to the sales team and manage client follow-ups.',
      requirements: [
        "Bachelor's degree in Business, Marketing, or a related field",
        '1-2 years of experience in sales support or coordination',
        'Proficiency in MS Office and CRM tools',
        'Strong communication and time-management skills',
        'Detail-oriented with the ability to multitask'
      ],
      responsibilities: [
        'Coordinate with clients and schedule meetings for the sales team',
        'Maintain and update CRM records',
        'Track sales leads and follow up on client inquiries',
        'Assist in preparing sales proposals and documents',
        'Support reporting and administrative tasks'
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
              Explore exciting career opportunities with Terranox estates
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
  <div className="flex items-center">
    <MapPin className="w-4 h-4 mr-2" />
    <span><strong>Location:</strong> {job.location}</span>
  </div>
  <div className="flex items-center">
    <Mail className="w-4 h-4 mr-2" />
    <span><strong>Email:</strong> {job.email}</span>
  </div>
  <div className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 mr-2 fill-blue-600"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.3h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7c0-1.7 0-4-2.5-4s-2.9 1.9-2.9 3.9V24h-5V8z" />
    </svg>
    <a
      href="https://www.linkedin.com/in/terranox-estate-668671371/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      LinkedIn
    </a>
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
                      
                      <div className="flex flex-wrap gap-4 pt-4">
  <a href={`mailto:${job.email}`}>
    <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
      <Mail className="w-4 h-4" />
      <span>Email</span>
    </button>
  </a>

  <a
    href="https://www.linkedin.com/in/terranox-estate-668671371/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-[#0077B5] text-white px-5 py-2 rounded-lg hover:bg-[#005983] transition-colors flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.3h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7c0-1.7 0-4-2.5-4s-2.9 1.9-2.9 3.9V24h-5V8z" />
      </svg>
      <span>LinkedIn</span>
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
              Why Join Terranox estates?
            </h2>
            <p className="text-gray-600">
              Build your career with India's leading real estates company
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