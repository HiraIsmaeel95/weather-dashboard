import axios from 'axios';

const BASE_URL = process.env.WEATHER_API_BASE_URL || 'https://api.openweathermap.org/data/2.5/';

export async function getWeatherData<T>(url: string, params: Record<string, any>): Promise<T> {
  try {
    const response = await axios.get<T>(`${BASE_URL}${url}`, {
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the Weather API');
  }
}
