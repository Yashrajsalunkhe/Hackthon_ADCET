import React from 'react';

const SponsorBox = ({ image}) => {
  return (
    <div>
        <div className="flex justify-center">
            <p  alt="Piggy" className="h-[3rem] w-[3rem]"></p>
        </div>
      
      <div className="relative md:w-[23rem] w-[20rem] h-[6.25rem] group" style={{ perspective: '1000px' }}>
        <div 
          className="w-full h-full glass-card rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 255, 0.95))',
            border: '3px solid transparent',
            backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00d4ff, #9333ea)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          <img className="h-[3rem] w-[10rem] transform skew-x-12" src={image} alt="Sponsor Logo" />
        </div>
      </div>
    </div>
  );
};

// ksxnwkjxbnq
export default SponsorBox;
