import axios from 'axios';
import { getWeatherData } from '../src/services/WeatherApiClient';
import { getWeather } from '../src/services/weatherService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Weather Service', () => {
  it('should return weather data for a valid city', async () => {
    const city = 'Sacramento';
    const mockResponse = {
      main: {
        temp: 14.64,
        feels_like: 14.12,
        temp_min: 13.22,
        temp_max: 15.54,
        pressure: 1019,
        humidity: 75,
      },
      weather: [
        { description: 'broken clouds', icon: '04d' },
      ],
      name: city,
    };

    mockedAxios.get.mockResolvedValue({ data: mockResponse });
  
    const result = await getWeatherData('weather', {
      q: city,
      appid: process.env.OPENWEATHER_API_KEY,
      units: 'metric',
    });

    expect(result).toEqual(mockResponse);

  });

  it('should throw an error if the API request fails', async () => {
    mockedAxios.get.mockRejectedValue(new Error('API error'));

    await expect(getWeatherData('weather', { q: 'Sacramento' })).rejects.toThrow('Failed to fetch data from the Weather API');
  });

  it('should throw an error if API request fails', async () => {
    const city = 'Paris';

    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

    await expect(getWeather(city)).rejects.toThrow('Failed to fetch weather data');
  });
});
