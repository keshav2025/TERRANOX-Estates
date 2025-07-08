import React from 'react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "+917984897775";
  const message = "Hello, I'm interested in one of the properties listed on your website. Could you please share more details, pricing, and availability? Thank you.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition-transform duration-300 hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp"
        className="h-6 w-6"
      />
    </button>
  );
};

export default WhatsAppButton;
