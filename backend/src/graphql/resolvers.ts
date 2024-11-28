import { getWeather } from '../services/weatherService';

const resolvers = {
  Query: {
    getWeather: async (_: any, { city }: { city: string }) => {
      try {
        const weatherData = await getWeather(city);
        return weatherData;
      } catch (error) {
        throw new Error('Failed to fetch weather data');
      }
    },
  },
};

export default resolvers;
