import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-input">
      <div className="mb-16 w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-8 py-8 md:py-12 container px-4">
        
        <div className="text-center md:text-left">
          <h4 className="text-black text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            Subscribe Now & Get{" "}
            <span className="text-primary font-bold">25% Off</span>{" "}
            your first purchase!
          </h4>
          <p className="text-gray text-sm md:text-base">
            Join our newsletter for exclusive deals and updates
          </p>
        </div>

        <div className="w-full md:w-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 md:w-80 p-3 rounded-lg border border-gray/30 focus:outline-none focus:border-primary transition-colors duration-200"
          />
          <button className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
