"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { WeatherData, fetchTexasWeather } from "./weather";

interface WeatherContextType {
  weather: WeatherData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  isLoading: true,
  error: null,
  refetch: async () => {},
});

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchTexasWeather();
      setWeather(data);
    } catch (err) {
      setError("Failed to fetch weather data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    
    // Refresh weather every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, isLoading, error, refetch: fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
