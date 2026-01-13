import React from "react";
import CardWrapper from "./CardWrapper";
import radialfirst from "../../assets/radialtrianglefirst.svg";
import radialsecond from "../../assets/radialtrianglesecond.svg";
import radialthird from "../../assets/radialtrianglethird.svg";
import leftside from "../../assets/leftsidecut.svg";
import rightside from "../../assets/rightsidecut.svg";

import egg3 from "../../assets/Egg3-basket.svg";

import TopCloud from "../../assets/TopCloud.svg";
import BottomCloud from "../../assets/BottomCloud.svg";
import background_texture from "../../assets/prizes_bg.png";

const Cards = () => {
  const cardProps = {
    cardProps: {
      secondPrize: {
        prize: "Second Prize",
        prizeLabel: "SECOND",
        amount: "75K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialsecond, leftside, rightside, egg: egg3 },
      },
      firstPrize: {
        prize: "First Prize",
        prizeLabel: "FIRST",
        amount: "125K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialfirst, leftside, rightside, egg: egg3 },
      },
      thirdPrize: {
        prize: "Third Prize",
        prizeLabel: "THIRD",
        amount: "50K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialthird, leftside, rightside, egg: egg3 },
      },
    },
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center",}}>
        <div>
          <img src={TopCloud} className="w-screen" alt="Top Cloud" />
        </div>

      <div className="w-screen px-2 flex justify-center items-center" style={{ background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.9) 0%, rgba(20, 2, 30, 0.95) 100%)' }}>
        <div
          className="md:w-[97%] w-[100%] relative"
          style={{
            borderRadius: "40px",
            position: "relative",
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(255, 0, 110, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(147, 51, 234, 0.3)',
            boxSizing: "border-box",
            paddingBottom: "60px",
            overflow: "hidden",
            boxShadow: '0 20px 60px rgba(147, 51, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          >
          {/* Animated grid overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${background_texture})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.05,
              zIndex: 1,
            }}
          ></div>
          
          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="relative inline-block pt-10">
              <p className="font-angrybirds text-4xl md:text-6xl px-8 py-4 font-bold text-white" style={{
                textShadow: '0 4px 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(147, 51, 234, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)'
              }}>
                PRIZE POOL OF Rs. 12,00,000+
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"></div>
            </div>
            <div className="flex justify-center gap-8 md:gap-20 pt-14 items-center flex-wrap pb-[60px]" style={{ userSelect: "none" }}>
             
                <CardWrapper {...cardProps.cardProps.firstPrize}style={{ maxWidth: "300px", userSelect: "none" }} />
             
             
                <CardWrapper {...cardProps.cardProps.secondPrize} style={{ maxWidth: "300px", userSelect: "none" }} />
             
             
                <CardWrapper {...cardProps.cardProps.thirdPrize} style={{ maxWidth: "300px", userSelect: "none" }}/>
             
            </div>
          </div>
        </div>
      </div>
        <div>
          <img src={BottomCloud} className="w-screen" alt="Bottom Cloud" />
        </div>
      </div>
    </>
  );
};

export default Cards;
