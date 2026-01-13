import React from "react";
import Piggy from "../assets/piggy.svg"
import KingPiggy from "../assets/kingpiggy.svg"

const Dates = () => {
  return (
    <div className="relative flex justify-center pt-8 items-center gap-[20px] md:gap-[40px] font-angrybirds">
      {/* Start Date - Hexagonal card */}
      <div className="relative glass-card p-6 md:p-10 rounded-3xl neon-border group hover:scale-105 transition-transform duration-300">
        <div className="absolute -top-3 -left-3 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/40 transition-all"></div>
        <p className="text-[60px] md:text-[100px] font-bold tracking-tighter text-cyan-300" style={{
          textShadow: '0 4px 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.6)'
        }}>30</p>
        <p className="text-[16px] md:text-[32px] text-cyan-200 mt-2 font-semibold">JAN 2026</p>
        <img src={Piggy} alt="piggy" className="absolute w-8 md:w-12 -top-4 -right-4 rotate-12 animate-float drop-shadow-2xl"/>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      {/* Connector */}
      <div className="relative">
        <div className="text-[60px] md:text-[100px] text-purple-300" style={{
          textShadow: '0 4px 20px rgba(147, 51, 234, 0.8)'
        }}>→</div>
        <div className="absolute inset-0 bg-purple-500/30 blur-2xl animate-pulse"></div>
      </div>
      
      {/* End Date - Hexagonal card */}
      <div className="relative glass-card p-6 md:p-10 rounded-3xl neon-border group hover:scale-105 transition-transform duration-300">
        <div className="absolute -top-3 -right-3 w-16 h-16 bg-pink-500/20 rounded-full blur-xl group-hover:bg-pink-500/40 transition-all"></div>
        <p className="text-[60px] md:text-[100px] font-bold tracking-tighter text-pink-300" style={{
          textShadow: '0 4px 20px rgba(255, 0, 110, 0.8), 0 0 40px rgba(255, 0, 110, 0.6)'
        }}>31</p>
        <p className="text-[16px] md:text-[32px] text-pink-200 mt-2 font-semibold">JAN 2026</p>
        <img src={KingPiggy} alt="kingpiggy" className="absolute w-8 md:w-12 -top-4 -right-4 rotate-[-12deg] animate-bounce-slow drop-shadow-2xl"/>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export default Dates;
