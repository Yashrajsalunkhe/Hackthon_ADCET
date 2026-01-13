import React from 'react';
import texture from "../assets/statement_texture.svg";
import Joshps from "../assets/logo/Joshps";

const StatementCard = () => {
  return (
    <div
      className="w-[20rem] md:w-full max-w-[40rem] h-auto relative group"
      style={{
        borderRadius: "24px",
        padding: '3px',
        background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.5), rgba(138, 43, 226, 0.5))',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
        e.currentTarget.style.boxShadow = '0 25px 50px rgba(255, 20, 147, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        className="w-full h-full p-8 relative overflow-hidden"
        style={{
          borderRadius: "21px",
          background: `linear-gradient(135deg, rgba(216, 0, 38, 0.9), rgba(138, 43, 226, 0.8)), url(${texture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Holographic scanlines */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-[2px] bg-white absolute top-1/4 animate-pulse"></div>
          <div className="w-full h-[2px] bg-white absolute top-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-full h-[2px] bg-white absolute top-3/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className='flex flex-col justify-between gap-[24px] relative z-10'>
          <div className="glass-card flex rounded-2xl p-[1.5rem] items-center w-[12rem] mx-auto shadow-2xl border-2 border-white/20">
            <Joshps />
          </div>

          <div className='flex items-center text-left font-tthoves text-[18px] md:text-[20px] leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/10'>
            Create an AI-powered app that analyzes live phone calls for scams, alerts users in real-time, and adapts to new scam patterns. Focus on privacy, security, and ease of use.
          </div>

          <a
            href="https://drive.google.com/drive/folders/14YfJYuevx8ajQKmoF7UdfEva3UaAMw2S?dmr=1&ec=wgc-drive-hero-goto"
            download="AI_Scam_Prevention_Whitepaper.pdf"
            className='text-left text-[18px] md:text-[20px] font-bold px-6 py-3 rounded-xl inline-block glass-card border-2 border-cyan-400/40 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50'
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}

export default StatementCard;
