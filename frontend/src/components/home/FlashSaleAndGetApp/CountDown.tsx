import { useState, useEffect } from "react";

const CountDown = () => {
  const initialCountdown = (1 * 24 + 12) * 60 * 60; // 1 day and 12 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialCountdown);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Update the count down every 1 second
    const intervalId = setInterval(() => {
      // Decrease the time left by 1 second
      setTimeLeft(prevTime => prevTime - 1);

      // If the count down is finished, clear the interval and set as expired
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setIsExpired(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  if (isExpired) return <div className="font-bold">EXPIRED</div>;

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mb-6">
      <div className="grid grid-cols-4 gap-3 font-bold">
        <div className="flex flex-col items-center bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-3 hover:bg-white/20 transition-all duration-300">
          <span className="text-xl md:text-3xl text-red mb-2 drop-shadow-lg">{days}</span>
          <span className="text-xs xl:text-sm text-white/90 uppercase tracking-wide">days</span>
        </div>
        <div className="flex flex-col items-center bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-3 hover:bg-white/20 transition-all duration-300">
          <span className="text-xl md:text-3xl text-blue mb-2 drop-shadow-lg">{hours}</span>
          <span className="text-xs xl:text-sm text-white/90 uppercase tracking-wide">hours</span>
        </div>
        <div className="flex flex-col items-center bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-3 hover:bg-white/20 transition-all duration-300">
          <span className="text-xl md:text-3xl text-green mb-2 drop-shadow-lg">{minutes}</span>
          <span className="text-xs xl:text-sm text-white/90 uppercase tracking-wide">mins</span>
        </div>
        <div className="flex flex-col items-center bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-3 hover:bg-white/20 transition-all duration-300">
          <span className="text-xl md:text-3xl text-pink mb-2 drop-shadow-lg">{seconds}</span>
          <span className="text-xs xl:text-sm text-white/90 uppercase tracking-wide">secs</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
