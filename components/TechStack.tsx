"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const TechStack: React.FC = () => {
  return (
    <div className="bg-white py-6">
      <Marquee gradient={false} speed={80} pauseOnHover={true}>
        <img
          src="/techStack/angularJs.svg"
          alt="techStack 1"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/flutter.svg"
          alt="techStack 2"
          className="h-16 mx-8"
        />
        <img src="/techStack/go.png" alt="techStack 3" className="h-16 mx-8" />
        <img
          src="/techStack/kotlin.svg"
          alt="techStack 4"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/laravel.png"
          alt="techStack 5"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/magento.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/mern.png"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/mongoDb.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/mySql.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/nextJs.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/nodeJs.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img src="/techStack/php.svg" alt="techStack 3" className="h-16 mx-8" />
        <img
          src="/techStack/postgreSql.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/react.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/swift.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/vite.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/wordpress.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img src="/techStack/xml.svg" alt="techStack 3" className="h-16 mx-8" />
        <img
          src="/techStack/python.png"
          alt="techStack 3"
          className="h-16 mx-8"
        />
      </Marquee>
    </div>
  );
};

export default TechStack;
