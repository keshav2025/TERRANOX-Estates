import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Residential');
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const triggerSearch = () => {
    if (searchValue.trim()) {
      navigate(`/projects?search=${encodeURIComponent(searchValue.trim())}&type=${encodeURIComponent(activeTab)}`);
      setSearchValue('');
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 🔁 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/27740272/12215489_1920_1080_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      
      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* 🔤 Content */}
      <div className="max-w-4xl mx-auto  bg-white/30 border border-white/20 rounded-2xl p-6 shadow-2xl z-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-fade-in">
          <span className="block text-3xl text-yellow-400">Terranox Estates</span>
          Rooted in Trust, Growing With You.
        </h1>

        {/* 🔍 Search Bar */}
        <div className="bg-white/90 rounded-2xl p-6 shadow-2xl mt-10">
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-200 mb-6">
            {['Residential', 'Commercial', 'SCO'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-lg font-semibold focus:outline-none transition-colors ${
                  activeTab === tab ? 'text-black border-b-2 border-yellow-400' : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter a Title, address"
                  className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') triggerSearch();
                  }}
                />
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                <span className="text-gray-400 mr-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="All Cities"
                  className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                  disabled
                />
              </div>
            </div>

            <button className="flex items-center px-4 py-3 bg-transparent text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              Advanced
            </button>

            <button
              className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-yellow-500 transition-colors"
              onClick={triggerSearch}
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
