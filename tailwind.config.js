/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        mx: '1390px',
      },
      colors: {
        // Cyber theme colors
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#9333ea',
        'cyber-pink': '#ff006e',
        'cyber-dark': '#0a0e27',
        // Primary gaming colors
        'game-red': '#FF1744',
        'game-yellow': '#FFD600',
        'game-blue': '#2979FF',
        'game-green': '#00E676',
        'game-purple': '#D500F9',
        'game-orange': '#FF6D00',
        // Background colors
        'dark-purple': '#1F0030',
        'darker-purple': '#0E0212',
        'vibrant-purple': '#6A1B9A',
        'neon-pink': '#FF4081',
        // Accent colors
        'bright-cyan': '#00E5FF',
        'electric-lime': '#C6FF00',
        'hot-pink': '#FF1744',
        'sunset-orange': '#FF6E40',
      },
      animation: {
        rotate: 'rotate 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            opacity: '1',
            filter: 'brightness(1) drop-shadow(0 0 10px currentColor)'
          },
          '50%': { 
            opacity: '0.8',
            filter: 'brightness(1.2) drop-shadow(0 0 20px currentColor)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-fire': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'gradient-neon': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      },
      textShadow: {
        'glow': '0 0 10px currentColor, 0 0 20px currentColor',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor',
      },
    },
    fontFamily: {
      angrybirds: ["AngryBirds", "sans-serif"],
      supercell: ["Supercell-Magic", "sans-serif"],
      tthoves: ["TTHoves", "sans-serif"],
      pixellari: ["pixellari", "monospace"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor',
        },
        '.text-shadow-neon': {
          textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px currentColor, 0 0 30px currentColor',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}