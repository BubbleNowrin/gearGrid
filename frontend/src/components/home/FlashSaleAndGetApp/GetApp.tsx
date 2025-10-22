import React from "react";
import Image from "next/image";
import banner from "@/assets/get-app/get-app-bg.png";
import plaStore from "@/assets/get-app/get-app-play-store-link.webp";
import apple from "@/assets/get-app/get-app-apple-link.webp";
import phone from "@/assets/get-app/get-app-phone.webp";
import Link from "next/link";

const GetApp = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner.src})`,
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex items-center justify-center text-white py-12 md:py-16 lg:py-0 overflow-hidden"
    >
      {/* Enhanced Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/15 to-blue/25 backdrop-blur-md"></div>
      
      {/* Main content container - matching Flash Sale padding */}
      <div className="relative z-10 w-[94%] md:w-4/5 bg-white/15 backdrop-blur-lg rounded-2xl border border-white/25 shadow-2xl p-6 md:p-8">
        
        {/* Header badge */}
        <div className="bg-gradient-to-r from-accent/30 to-blue/30 backdrop-blur-sm rounded-full border border-white/40 shadow-lg inline-block">
          <p className="uppercase font-bold text-white text-sm px-4 py-2">
            📱 Get App
          </p>
        </div>
        
        {/* Content in flex layout */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-6">
          
          {/* Left side - Content */}
          <div className="flex-1">
            <h2 className="text-lg xl:text-2xl font-bold text-white drop-shadow-lg mb-2">
              Download Our
            </h2>
            <div className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent text-lg xl:text-2xl font-extrabold mb-4">
              Mobile App
            </div>
            <p className="text-sm xl:text-base text-white/90 font-medium leading-relaxed mb-6">
              Experience seamless shopping with exclusive mobile features and faster checkout!
            </p>
            
            {/* Download buttons */}
            <div className="flex gap-3">
              <Link href={"/"} className="group">
                <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg p-2 transform hover:scale-105 transition-all duration-300">
                  <Image src={plaStore} alt="Play Store App" className="w-24 md:w-28 h-auto rounded-lg" />
                </div>
              </Link>
              <Link href={"/"} className="group">
                <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg p-2 transform hover:scale-105 transition-all duration-300">
                  <Image src={apple} alt="Apple Store App" className="w-24 md:w-28 h-auto rounded-lg" />
                </div>
              </Link>
            </div>
          </div>
          
          {/* Right side - Phone showcase */}
          <div className="flex-shrink-0 relative">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/25 shadow-lg p-3">
              <Image 
                src={phone} 
                alt="Smart Phone Image" 
                className="w-32 md:w-40 h-auto drop-shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
