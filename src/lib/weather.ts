// Weather types and API integration using Open-Meteo (free, no API key required)
export interface WeatherData {
  condition: 'clear' | 'clouds' | 'rain' | 'storm' | 'snow' | 'drizzle' | 'thunderstorm';
  description: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  city: string;
  icon: string;
  alerts: WeatherAlert[];
  isStormy: boolean;
  isRainy: boolean;
}

export interface WeatherAlert {
  event: string;
  headline: string;
  severity: 'minor' | 'moderate' | 'severe' | 'extreme';
  description: string;
  start: number;
  end: number;
}

// Dallas-Fort Worth coordinates
const DFW_LOCATION = { name: 'Dallas-Fort Worth', lat: 32.7767, lon: -96.7970 };

// Map WMO weather codes to our conditions
// https://open-meteo.com/en/docs
function mapWMOCode(code: number): { condition: WeatherData['condition']; description: string } {
  if (code === 0) return { condition: 'clear', description: 'Clear sky' };
  if (code === 1) return { condition: 'clear', description: 'Mainly clear' };
  if (code === 2) return { condition: 'clouds', description: 'Partly cloudy' };
  if (code === 3) return { condition: 'clouds', description: 'Overcast' };
  if (code >= 45 && code <= 48) return { condition: 'clouds', description: 'Foggy' };
  if (code >= 51 && code <= 55) return { condition: 'drizzle', description: 'Drizzle' };
  if (code >= 56 && code <= 57) return { condition: 'drizzle', description: 'Freezing drizzle' };
  if (code >= 61 && code <= 65) return { condition: 'rain', description: 'Rain' };
  if (code >= 66 && code <= 67) return { condition: 'rain', description: 'Freezing rain' };
  if (code >= 71 && code <= 77) return { condition: 'snow', description: 'Snow' };
  if (code >= 80 && code <= 82) return { condition: 'rain', description: 'Rain showers' };
  if (code >= 85 && code <= 86) return { condition: 'snow', description: 'Snow showers' };
  if (code === 95) return { condition: 'thunderstorm', description: 'Thunderstorm' };
  if (code >= 96 && code <= 99) return { condition: 'thunderstorm', description: 'Thunderstorm with hail' };
  return { condition: 'clear', description: 'Clear' };
}

export async function fetchTexasWeather(): Promise<WeatherData | null> {
  try {
    // Use Open-Meteo API (free, no API key required)
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${DFW_LOCATION.lat}&longitude=${DFW_LOCATION.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America/Chicago`,
      { 
        next: { revalidate: 600 }, // Cache for 10 minutes
        cache: 'no-store' // For client-side fetches, don't cache stale data
      }
    );

    if (!response.ok) {
      console.error('Weather API error:', response.status);
      return getFallbackWeatherData();
    }

    const data = await response.json();
    const current = data.current;

    const weatherCode = current.weather_code;
    const { condition, description } = mapWMOCode(weatherCode);
    
    const isStormy = ['thunderstorm', 'storm'].includes(condition);
    const isRainy = ['rain', 'drizzle', 'thunderstorm', 'storm'].includes(condition);

    // Check for severe weather alerts (simplified - in production you'd use NWS API)
    const alerts: WeatherAlert[] = [];
    
    // Add alert if thunderstorm conditions
    if (isStormy) {
      alerts.push({
        event: 'Severe Weather Alert',
        headline: 'Thunderstorm Activity in DFW Area',
        severity: 'moderate',
        description: 'Thunderstorm activity detected in the Dallas-Fort Worth area. Potential for hail and wind damage.',
        start: Date.now(),
        end: Date.now() + 7200000, // 2 hours
      });
    }

    // Add alert for high winds (over 25 mph)
    if (current.wind_speed_10m > 25) {
      alerts.push({
        event: 'High Wind Advisory',
        headline: 'High Winds in DFW Area',
        severity: 'minor',
        description: `Winds of ${Math.round(current.wind_speed_10m)} mph. Check your roof for loose shingles.`,
        start: Date.now(),
        end: Date.now() + 3600000,
      });
    }

    return {
      condition,
      description,
      temp: Math.round(current.temperature_2m),
      humidity: Math.round(current.relative_humidity_2m),
      windSpeed: Math.round(current.wind_speed_10m),
      city: DFW_LOCATION.name,
      icon: condition,
      alerts,
      isStormy,
      isRainy,
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return getFallbackWeatherData();
  }
}

// Fallback data if API fails
function getFallbackWeatherData(): WeatherData {
  return {
    condition: 'clear',
    description: 'Weather data unavailable',
    temp: 72,
    humidity: 50,
    windSpeed: 8,
    city: 'Dallas-Fort Worth',
    icon: 'clear',
    alerts: [],
    isStormy: false,
    isRainy: false,
  };
}

// Helper to check if weather should trigger rain animation
export function shouldShowRain(weather: WeatherData | null): boolean {
  if (!weather) return false;
  return weather.isRainy;
}

// Helper to check if weather should trigger storm banner
export function shouldShowStormBanner(weather: WeatherData | null): boolean {
  if (!weather) return false;
  return weather.isStormy || weather.alerts.length > 0;
}
