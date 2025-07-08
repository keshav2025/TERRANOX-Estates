import React, { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_tyam5zh',       // replace with your service ID
          'template_dqsfh0x',      // replace with your template ID
          form.current,
          'XNwA5YRmJpJJTsGlg'        // replace with your public key
        )
        .then(
          (result) => {
            alert('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            alert('Something went wrong, please try again.');
          }
        );
    }
  }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        </div>
      </section>

      {/* Visit Office Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Office
            </h2>
            <p className="text-gray-600">
              Real Estate with The world's investors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Corporate Office */}
            <div className="text-center">
              <div className="bg-gray-100 p-8 rounded-xl mb-6">
                <Building className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Office</h3>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="text-gray-600">terranoxestates@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="text-gray-600">
                      Sector 16, Noida, Uttar Pardesh
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="text-gray-600">+91-9354442533</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Branch Office */}
            <div className="text-center">
              <div className="bg-gray-100 p-8 rounded-xl mb-6">
                <Building className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Branch Office</h3>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="text-gray-600">admin@terranoxestates.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="text-gray-600">
                       Sector 16, Noida, Uttar Pardesh
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="text-gray-600">+91-9354442533</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600">
                Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                       type="text"
                       id="firstName"
                       name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                       type="email"
                       id="email"
                       name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                       type="tel"
                       id="phone"
                       name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
      name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <div className="text-center">
                <button
        type="submit"
        className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium"
      >
        Send Message
      </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Find Us On Map
      </h2>
      <p className="text-gray-600">
        Visit our office locations
      </p>
    </div>

    <div className="rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Terranox Location - Sector 16 Noida"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.345978377142!2d77.31435749999999!3d28.5800481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55699e6c621%3A0xdee65cb4e0118e6c!2sSector%2016%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1655786397761!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactUs;