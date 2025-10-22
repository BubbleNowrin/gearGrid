import React from "react";
import banner from "@/assets/get-app/get-app-bg.png";
import CountDown from "./CountDown";
import BuyNowBtn from "@/components/common/buttons/BuyNowBtn";

const FlashSale = () => {
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
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue/20 via-primary/10 to-secondary/20 backdrop-blur-sm"></div>
      
      {/* Content container with glassmorphism effect */}
      <div className="relative z-10 w-[94%] md:w-4/5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6 md:p-8">
        <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full border border-white/30 shadow-lg inline-block">
          <p className="uppercase font-bold text-white text-sm px-4 py-2">
            ⚡ Flash Sale
          </p>
        </div>
        
        <div className="mt-6">
          <CountDown />
        </div>
        
        <h2 className="text-2xl xl:text-4xl mb-5 font-bold text-white drop-shadow-lg">
          Quick-Fire Flash Sale
        </h2>
        
        <p className="mb-6 font-medium text-sm xl:text-base text-white/90 leading-relaxed">
          Get ready for lightning-fast savings! Our Quick-Fire Flash Sale is
          here for a limited time. Don&apos;t miss out on incredible deals.
        </p>
        
        <div className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105">
          <BuyNowBtn title="Shop Now!" background="transparent" color="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
