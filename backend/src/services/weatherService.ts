import { getWeatherData } from './WeatherApiClient';
import { WeatherResponse } from '../types/weatherInterfaces';

export async function getWeather(city: string): Promise<any> {
  try {
    const weatherData = await getWeatherData<WeatherResponse>('weather', {
      q: city,
      appid: process.env.OPENWEATHER_API_KEY,
      units: 'metric',
    });

    const { main, weather, name } = weatherData;
    const newRes = {
      city: name,
      temperature: main.temp,
      feels_like: main.feels_like,
      temp_min: main.temp_min,
      temp_max: main.temp_max,
      pressure: main.pressure,
      humidity: main.humidity,
      description: weather[0].description,
    };
    return newRes;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}
