"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const Ratings: React.FC = () => {
  return (
    <div className="bg-gray-50 py-6">
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        <img src="/rating/clutch.svg" alt="Rating 1" className="h-16 mx-8" />
        <img
          src="/rating/designrush.svg"
          alt="Rating 2"
          className="h-16 mx-8"
        />
        <img src="/rating/goodfirms.svg" alt="Rating 3" className="h-16 mx-8" />
        <img src="/rating/google.svg" alt="Rating 4" className="h-16 mx-8" />
        <img
          src="/rating/trustpilot.svg"
          alt="Rating 5"
          className="h-16 mx-8"
        />
      </Marquee>
    </div>
  );
};

export default Ratings;
