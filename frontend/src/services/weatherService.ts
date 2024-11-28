import axios from 'axios';

const BASE_URL = 'http://localhost:3000/weather';

export const fetchWeatherData = async (city: string) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: { city }
      });
      return response.data; 
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw new Error('Failed to fetch weather data');
    }
  };
