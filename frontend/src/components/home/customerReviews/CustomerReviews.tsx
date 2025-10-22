import React, { useState, useEffect } from "react";
import { IconButton, Avatar, Rating } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Title from "@/components/common/componentTitle/Title";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  product: string;
  location: string;
}

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample customer reviews data
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      review: "Super fast delivery! The gaming laptop I ordered exceeded my expectations. The customer service was outstanding and they helped me choose the perfect specs for my needs.",
      product: "Gaming Laptop RTX 4070",
      location: "New York, USA"
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      review: "Best tech store ever! I've been shopping here for years and they never disappoint. Great prices, authentic products, and excellent warranty service. Highly recommended!",
      product: "Mechanical Keyboard",
      location: "California, USA"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 4,
      review: "Outstanding experience from start to finish. The PC building service was professional and they delivered exactly what I wanted. The performance is incredible!",
      product: "Custom Gaming PC",
      location: "Texas, USA"
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "https://i.pravatar.cc/150?img=7",
      rating: 5,
      review: "Exceptional quality and value! The headphones I bought have amazing sound quality and the build feels premium. Shipping was quick and packaging was perfect.",
      product: "Wireless Gaming Headset",
      location: "Florida, USA"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      review: "Fantastic service and top-notch products! The team was very helpful in recommending the right components for my budget. Everything works flawlessly!",
      product: "Graphics Card RTX 4060",
      location: "Oregon, USA"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, reviews.length]);

  const goToPrevious = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
      setIsTransitioning(false);
    }, 150); // Small delay for smoother transition
    
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToNext = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
      setIsTransitioning(false);
    }, 150); // Small delay for smoother transition
    
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
    
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  return (
    <div className="w-full mb-16 bg-gradient-to-br from-input to-white py-16">
      <div className="container px-4">
        <Title
          title="Customer Reviews"
          subTitle="What Our Satisfied Customers Say About Us"
        />
        
        {/* Main Review Slider Container */}
        <div className="relative max-w-6xl mx-auto h-[500px] flex items-center">
          {/* Slider with partial previews */}
          <div className="flex items-center justify-center gap-4 overflow-hidden w-full">
            
            {/* Previous Review (Half visible) */}
            <div className={`hidden lg:block w-1/4 opacity-50 transform scale-90 transition-all duration-700 ease-in-out ${
              isTransitioning ? 'opacity-20 scale-75' : 'opacity-50 scale-90'
            }`}>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-700 ease-in-out flex flex-col h-full max-h-[400px]">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar
                    src={reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].avatar}
                    alt={reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].name}
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      border: "2px solid #3B82F6",
                      transition: "all 0.7s ease-in-out"
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-black transition-all duration-700 truncate">
                      {reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].name}
                    </h4>
                    <Rating
                      value={reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].rating}
                      readOnly
                      size="small"
                      sx={{ 
                        "& .MuiRating-iconFilled": { color: "#F4B618" },
                        transition: "all 0.7s ease-in-out"
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-gray text-sm line-clamp-4 transition-all duration-700">
                    &ldquo;{reviews[currentIndex === 0 ? reviews.length - 1 : currentIndex - 1].review}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Current Review (Main) */}
            <div className={`w-full lg:w-1/2 transform transition-all duration-700 ease-in-out ${
              isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden transform transition-all duration-700 ease-in-out h-full max-h-[450px] flex flex-col">
                {/* Quote Icon */}
                <div className={`absolute top-4 right-4 opacity-10 transition-all duration-700 ${
                  isTransitioning ? 'opacity-5' : 'opacity-10'
                }`}>
                  <FormatQuoteIcon sx={{ fontSize: "80px", color: "#3B82F6" }} />
                </div>
                
                {/* Review Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    <Avatar
                      src={reviews[currentIndex].avatar}
                      alt={reviews[currentIndex].name}
                      sx={{ 
                        width: 80, 
                        height: 80,
                        border: "4px solid #3B82F6",
                        transition: "all 0.7s ease-in-out"
                      }}
                    />
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-xl font-bold text-black mb-1 transition-all duration-700">
                        {reviews[currentIndex].name}
                      </h3>
                      <p className="text-gray text-sm mb-2 transition-all duration-700">
                        {reviews[currentIndex].location}
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Rating
                          value={reviews[currentIndex].rating}
                          readOnly
                          sx={{
                            "& .MuiRating-iconFilled": {
                              color: "#F4B618",
                            },
                            transition: "all 0.7s ease-in-out"
                          }}
                        />
                        <span className="text-gray text-sm transition-all duration-700">
                          ({reviews[currentIndex].rating}.0)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center min-h-0">
                    <blockquote className="text-gray text-lg leading-relaxed mb-6 italic transition-all duration-700 flex-1 flex items-center overflow-hidden">
                      <span className="line-clamp-6">&ldquo;{reviews[currentIndex].review}&rdquo;</span>
                    </blockquote>

                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full inline-block transition-all duration-700 self-start">
                      <span className="text-sm font-medium">
                        Purchased: {reviews[currentIndex].product}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Review (Half visible) */}
            <div className={`hidden lg:block w-1/4 opacity-50 transform scale-90 transition-all duration-700 ease-in-out ${
              isTransitioning ? 'opacity-20 scale-75' : 'opacity-50 scale-90'
            }`}>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-700 ease-in-out flex flex-col h-full max-h-[400px]">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar
                    src={reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].avatar}
                    alt={reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].name}
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      border: "2px solid #3B82F6",
                      transition: "all 0.7s ease-in-out"
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-black transition-all duration-700 truncate">
                      {reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].name}
                    </h4>
                    <Rating
                      value={reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].rating}
                      readOnly
                      size="small"
                      sx={{ 
                        "& .MuiRating-iconFilled": { color: "#F4B618" },
                        transition: "all 0.7s ease-in-out"
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-gray text-sm line-clamp-4 transition-all duration-700">
                    &ldquo;{reviews[currentIndex === reviews.length - 1 ? 0 : currentIndex + 1].review}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

        
          <IconButton
            onClick={goToPrevious}
            disabled={isTransitioning}
            sx={{
              position: "absolute",
              left: { xs: "10px", lg: "-20px" },
              top: "50%",
              transform: "translateY(-50%)",
              background: isTransitioning ? "#9CA3AF !important" : "#3B82F6 !important", 
              color: "white",
              "&:hover": {
                background: isTransitioning ? "#9CA3AF !important" : "linear-gradient(135deg, #1E40AF, #2563EB) !important",
                transform: "translateY(-50%) scale(1.15)",
              },
              "&:active": {
                transform: "translateY(-50%) scale(0.95)",
              },
              "&:disabled": {
                background: "#9CA3AF !important",
                color: "#ffffff",
                opacity: 0.6,
              },
              transition: "all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)",
              boxShadow: isTransitioning ? "0 2px 8px rgba(156, 163, 175, 0.3)" : "0 4px 15px rgba(59, 130, 246, 0.3)",
              zIndex: 10,
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={goToNext}
            disabled={isTransitioning}
            sx={{
              position: "absolute",
              right: { xs: "10px", lg: "-20px" },
              top: "50%",
              transform: "translateY(-50%)",
              background: isTransitioning ? "#9CA3AF !important" : "#3B82F6 !important", 
              color: "white",
              "&:hover": {
                background: isTransitioning ? "#9CA3AF !important" : "linear-gradient(135deg, #1E40AF, #2563EB) !important",
                transform: "translateY(-50%) scale(1.15)",
              },
              "&:active": {
                transform: "translateY(-50%) scale(0.95)",
              },
              "&:disabled": {
                background: "#9CA3AF !important",
                color: "#ffffff",
                opacity: 0.6,
              },
              transition: "all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)",
              boxShadow: isTransitioning ? "0 2px 8px rgba(156, 163, 175, 0.3)" : "0 4px 15px rgba(59, 130, 246, 0.3)",
              zIndex: 10,
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </div>

        {/* Pagination Dots with Enhanced Transitions */}
        <div className="flex justify-center mt-8 gap-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`relative rounded-full transition-all duration-500 ease-in-out transform ${
                index === currentIndex
                  ? "w-8 h-3 bg-primary scale-110 shadow-lg" 
                  : "w-3 h-3 bg-light-gray hover:bg-gray hover:scale-110"
              } ${isTransitioning ? "opacity-50" : "opacity-100"}`}
              style={{
                background: index === currentIndex 
                  ? "linear-gradient(135deg, #3B82F6, #2563EB)" 
                  : undefined
              }}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <p className="text-gray text-xs">
            {isAutoPlaying ? "Auto-playing" : "Manual control"} • 
            {currentIndex + 1} of {reviews.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;