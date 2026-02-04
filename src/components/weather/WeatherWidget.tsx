"use client";

import { useWeather } from "@/lib/weather-context";
import { Cloud, Sun, CloudRain, CloudLightning, Snowflake, Thermometer } from "lucide-react";

export function WeatherWidget() {
  const { weather, isLoading } = useWeather();

  if (isLoading || !weather) return null;

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'thunderstorm':
      case 'storm':
        return <CloudLightning className="w-5 h-5 text-amber-400" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="w-5 h-5 text-amber-400" />;
      case 'snow':
        return <Snowflake className="w-5 h-5 text-blue-300" />;
      case 'clouds':
        return <Cloud className="w-5 h-5 text-slate-400" />;
      default:
        return <Sun className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-sm">
      {getWeatherIcon()}
      <div className="flex items-center gap-1.5">
        <Thermometer className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-white font-medium">{weather.temp}°F</span>
        <span className="text-slate-400 hidden sm:inline">• {weather.city}</span>
      </div>
    </div>
  );
}
