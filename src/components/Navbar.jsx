import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Navigate from "../assets/link.svg";
import Sidebar from "./Sidebar"; // Import Sidebar component

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  const handleBrochureClick = () => {
    window.open("https://drive.google.com/file/d/1QfAPDxhfOkAoZRe2Rwb6sa8gNhvMrnEk/view?usp=drive_link", "_blank");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full relative z-50">
      <nav className="flex justify-between items-center py-6 px-8 lg:py-8 lg:px-[120px]">
        {/* Logo with unique frame */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl group-hover:blur-2xl transition-all"></div>
          <a className="relative block p-3 glass-card rounded-xl border-2 border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110">
            <img src={Logo} alt="logo" className="drop-shadow-2xl relative z-10" />
            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full"></div>
          </a>
        </div>
        
        <div className="flex gap-4 items-center">
          <button
            className="relative flex items-center gap-3 px-6 py-3 rounded-xl group overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(147, 51, 234, 0.2))',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(147, 51, 234, 0.4)',
              boxShadow: '0 4px 20px rgba(147, 51, 234, 0.3)',
            }}
            onClick={toggleSidebar}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.6)';
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.4)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(147, 51, 234, 0.3)';
            }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            <p className="text-white font-bold text-lg tracking-wider relative z-10">MENU</p>
            <img src={Navigate} alt="menu" className="group-hover:rotate-90 transition-transform duration-500 filter drop-shadow-lg relative z-10" />
            
            {/* Corner indicators */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
          </button>
        </div>
      </nav>

      {isSidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}
    </header>
  );
};

export default Navbar;
