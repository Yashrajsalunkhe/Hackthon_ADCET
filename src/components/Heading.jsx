import React from "react";

import Piggy from "../assets/piggy.svg";

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 relative">
      {/* Main heading with unique split design */}
      <div className="relative flex flex-col items-center">
        <div className="font-supercell text-[70px] md:text-[150px] leading-[90%] relative z-10" style={{
          background: 'linear-gradient(135deg, #00d4ff 0%, #00f2fe 25%, #9333ea 50%, #d946ef 75%, #ff006e 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 4px 20px rgba(147, 51, 234, 0.8)) drop-shadow(0 0 40px rgba(0, 212, 255, 0.6))',
        }}>
          INNERVE
        </div>
        <div className="font-supercell text-[90px] md:text-[190px] leading-[90%] -mt-4 md:-mt-8 relative z-10" style={{
          background: 'linear-gradient(135deg, #00d4ff 0%, #00f2fe 25%, #9333ea 50%, #d946ef 75%, #ff006e 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 4px 20px rgba(147, 51, 234, 0.8)) drop-shadow(0 0 40px rgba(0, 212, 255, 0.6))',
        }}>
          10
          <img
            src={Piggy}
            alt="piggy"
            className="absolute w-6 md:w-12 -top-2 md:top-8 right-[-15%] rotate-12 animate-float drop-shadow-2xl"
          />
        </div>
        {/* Holographic effect lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-3/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {/* Redesigned subtitle with unique styling */}
      <div className="relative">
        <p className="font-angrybirds text-[16px] md:text-[28px] text-center px-6 py-3 glass-card neon-border rounded-2xl text-white font-bold tracking-wide" style={{
          textShadow: '0 2px 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(147, 51, 234, 0.6)'
        }}>
          <span className="text-cyan-300">INDIA&apos;S LARGEST</span> STUDENT DRIVEN HACKATHON
        </p>
      </div>
    </div>
  );
};

export default Heading;
