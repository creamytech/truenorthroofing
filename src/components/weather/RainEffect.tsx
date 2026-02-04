"use client";

import { useEffect, useState, useMemo } from "react";
import { useWeather } from "@/lib/weather-context";

interface RainDrop {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
  size: number;
}

export function RainEffect() {
  const { weather } = useWeather();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show rain if weather indicates rain
    setIsVisible(weather?.isRainy || false);
  }, [weather]);

  // Generate rain drops
  const rainDrops = useMemo(() => {
    if (!isVisible) return [];
    
    const dropCount = weather?.condition === 'thunderstorm' ? 150 : 
                      weather?.condition === 'rain' ? 100 : 60;
    
    return Array.from({ length: dropCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 0.5 + Math.random() * 0.5,
      animationDelay: Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.4,
      size: weather?.condition === 'thunderstorm' ? 2 + Math.random() * 2 : 1 + Math.random() * 1.5,
    })) as RainDrop[];
  }, [isVisible, weather?.condition]);

  if (!isVisible) return null;

  return (
    <div className="rain-container" aria-hidden="true">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.animationDuration}s`,
            animationDelay: `${drop.animationDelay}s`,
            opacity: drop.opacity,
            width: `${drop.size}px`,
            height: `${drop.size * 15}px`,
          }}
        />
      ))}
      
      {/* Lightning flash for thunderstorms */}
      {weather?.condition === 'thunderstorm' && <LightningFlash />}
      
      <style jsx>{`
        .rain-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 100;
          overflow: hidden;
        }
        
        .rain-drop {
          position: absolute;
          top: -50px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgba(174, 194, 224, 0.6)
          );
          border-radius: 0 0 5px 5px;
          animation: rain-fall linear infinite;
        }
        
        @keyframes rain-fall {
          0% {
            transform: translateY(-50px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
}

function LightningFlash() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const scheduleFlash = () => {
      const delay = 3000 + Math.random() * 10000; // 3-13 seconds between flashes
      setTimeout(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 150);
        setTimeout(() => {
          setFlash(true);
          setTimeout(() => setFlash(false), 100);
        }, 200);
        scheduleFlash();
      }, delay);
    };

    scheduleFlash();
  }, []);

  if (!flash) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-90 bg-white/20"
      style={{ animation: 'lightning 0.1s ease-out' }}
    />
  );
}
