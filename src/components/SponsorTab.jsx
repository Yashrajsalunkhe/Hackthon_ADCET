import React from 'react';
import PropTypes from 'prop-types';

const SponsorTab = ({ heading, images, piggyNumber }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-[7.23rem]">
      {/* Heading */}
      <h3 className="text-[2rem] md:text-[2.5rem] font-angrybirds mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-xl animate-pulse"></div>
        <span className="relative z-10">{heading}</span>
      </h3>

      {/* Images in grid layout */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-12 justify centre justify-items-center items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[10rem] md:w-[23rem] h-[5.25rem] border-8 border-[#734F1F] transform -skew-x-12 flex items-center justify-center"
          >
            <div className="flex items-center justify-center bg-white border-4 border-[#FFC102] transform -skew-x-10 h-full w-full">
              <div className="flex items-center justify-center w-[80%] h-[50%] transform skew-x-12">
                {image} {/* The image appears straight */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SponsorTab.propTypes = {
  heading: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.node).isRequired,
  piggyNumber: PropTypes.number.isRequired,
};

export default SponsorTab;
