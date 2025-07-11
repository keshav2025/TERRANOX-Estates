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
    <section className="   relative h-screen flex items-center justify-center overflow-hidden">
      {/* 🔁 Background Video */}
     
   <video
  className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.7] contrast-[1.2] saturate-[1.2]"
  src="https://videos.pexels.com/video-files/5057526/5057526-uhd_2560_1440_25fps.mp4" //https://videos.pexels.com/video-files/5057526/5057526-uhd_2560_1440_25fps.mp4
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-hidden="true"
></video>
{/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#000000cc] via-[#00000088] to-[#FFD70033] mix-blend-overlay"></div>

  {/* Vignette */}
  {/* <div className="absolute inset-0 z-20 bg-black opacity-20 pointer-events-none"></div> */} 


      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-[#0000ff]/5 z-10"></div>

      {/* 🔤 Content */}
      <div className="max-w-4xl mx-auto bg-white/30 border border-white/20 rounded-2xl px-4 py-6 md:p-6 shadow-2xl z-20 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4  text-center">
        <span className="block text-xl sm:text-2xl text-[#e2b653]">Terranox Estates</span>

          Rooted in Trust, Growing With You.
        </h1>

        {/* 🔍 Search Bar */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl mt-6 w-full">
          {/* Tabs */}
          <div className="flex justify-center space-x-4 sm:space-x-8 border-b border-gray-200 mb-6 text-sm sm:text-base">
            {['Residential', 'Commercial', 'SCO'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 font-semibold focus:outline-none transition-colors ${
                  activeTab === tab ? 'text-black border-b-2 border-yellow-400' : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-4 sm:flex-row items-stretch sm:items-center">
            {/* Title Input */}
            <div className="flex-1 w-full">
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search by project name, location..."
                  className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-600"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') triggerSearch();
                  }}
                />
              </div>
            </div>

            {/* Disabled City Input */}
           {/* City Dropdown Input */}
<div className="flex-1 w-full">
  <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
    <span className="text-gray-400 mr-2">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Z" />
      </svg>
    </span>

    <select
      className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-600"
      defaultValue=""
    >
      <option value="" disabled>Select City</option>
      <option value="Noida">Noida</option>
      <option value="Delhi">Delhi</option>
      <option value="Gurgaon">Gurgaon</option>
    </select>
  </div>
</div>

          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-6">
            <button
              className="flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-yellow-500 transition-colors"
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
