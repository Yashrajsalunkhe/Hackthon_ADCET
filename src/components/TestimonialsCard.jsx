import React from 'react';
import PinkGrid from "../assets/Pink_Grid.svg";
import Spark from "../assets/Spark.svg";

const TestimonialsCard = ({ content, name, collegeName }) => {
  return (
    <div 
      className="w-[95%] md:w-[100%] max-w-[440px] h-auto min-h-[505px] flex items-center justify-center mx-auto px-4 py-6 relative group"
      style={{
        borderRadius: '20px',
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.4) 0%, rgba(147, 51, 234, 0.4) 50%, rgba(255, 0, 110, 0.4) 100%)',
        padding: '3px',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div
        className="flex items-center justify-center w-full h-full relative overflow-hidden"
        style={{
          borderRadius: '17px', 
          background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(20, 2, 30, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/30 animate-pulse"></div>
        </div>
        
        <img
          src={PinkGrid}
          alt="Pink Grid"
          className="absolute inset-0 w-full h-full object-cover rounded-[10px] pointer-events-none opacity-10"
        />
        <img
          src={PinkGrid}
          alt="Pink Grid"
          className="absolute inset-0 w-full h-full object-cover rounded-[10px] pointer-events-none"
        />
        
        <div className="flex flex-col gap-6 sm:gap-[32px] relative z-10 w-full p-4 sm:p-[2rem]">
          <div className="w-full">
            <img 
              src={Spark} 
              alt="Spark" 
              className="max-w-[100px] sm:max-w-none"
            />
          </div>
          
          <div className="text-base sm:text-[20px] text-left text-white">
            {content}
          </div>
          <div className='flex flex-col gap-2'>

          <div className="text-xl sm:text-[24px] font-angrybirds text-left text-cyan-300 font-bold" style={{
            textShadow: '0 2px 8px rgba(0, 212, 255, 0.6)'
          }}>
            {name}
          </div>
          <div className="text-xl sm:text-[18px] font-angrybirds text-left text-purple-300">
            {collegeName}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;