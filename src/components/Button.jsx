import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import btn from "../assets/btn.svg";
import warning_video from "../assets/warning.webm";
import Warning from "../assets/warning-graphic.svg"

const Button = ({ BtnIcon, Label }) => {
  useGSAP(() => {
    gsap.to("#warning-video", {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1",
    });
  }, []);

  return (
    <button
      className="relative flex items-center justify-center gap-[10px] px-10 py-5 text-white group overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(147, 51, 234, 0.4), rgba(79, 70, 229, 0.4))',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(147, 51, 234, 0.5)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(147, 51, 234, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {BtnIcon && <img src={BtnIcon} alt="icon" className="h-[2rem] w-[2rem] relative z-10 drop-shadow-lg" />}
      {Label && <span className="md:text-[28px] text-[20px] font-angrybirds relative z-10 tracking-wider text-white font-bold" style={{
        textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(147, 51, 234, 0.6)'
      }}>{Label}</span>}
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-400 opacity-60"></div>
    </button>
  );
};

export default Button;
