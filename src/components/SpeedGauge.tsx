import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpeedGaugeProps {
  state: "idle" | "testing" | "complete";
  value: number;
  onStart: () => void;
}

export const SpeedGauge: React.FC<SpeedGaugeProps> = ({ state, value, onStart }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (state === "testing") {
      const maxRotation = (value / 100) * 180; 
      setRotation(maxRotation);
    } else {
      setRotation(0);
    }
  }, [value, state]);

  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-blue-950 via-blue-900 to-transparent opacity-40 animate-pulse" />
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 13 }).map((_, i) => {
          const angle = i * 18 + 162; 
          return (
            <div
              key={i}
              className="absolute text-white text-sm font-semibold"
              style={{
                left: "48%",
                top: "47%",
                transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`, 
              }}
            >
              {i * 10}
            </div>
          );
        })}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-4 origin-bottom transition-colors duration-500 ${
              rotation >= i * 4.5 - 110 ? "bg-cyan-200/70" : "bg-white/10"
            }`}
            style={{
              left: "50%",
              bottom: "50%",
              transform: `rotate(${i * 4.5 - 110}deg) translateY(-230px)`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {state === "idle" ? (
          <motion.button
            key="start"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={onStart}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-2xl mt-64 bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white px-8 py-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              شروع تست
            </div>
          </motion.button>
        ) : (
          <motion.div
            key="value"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-end"
          >
            <div className="text-6xl font-semibold text-white mb-10 drop-shadow-lg">
              {value.toFixed(1)}
            </div>
            <div className="text-lg mb-10 text-cyan-400">مگابیت بر ثانیه</div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute left-1/2 bottom-1/2 w-1 h-48 bg-gradient-to-t from-cyan-500 to-blue-500 origin-bottom rounded-full"
        style={{
          filter: "drop-shadow(0 0 20px #22d3ee)",
        }}
        animate={{ rotate: rotation }}
        transition={{ type: "spring", stiffness: 50 }}
      />
    </div>
  );
};
