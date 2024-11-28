import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import './Weather.css';

export const GET_WEATHER = gql`
  query GetWeather($city: String!) {
    getWeather(city: $city) {
      city
      temperature
      feels_like
      description
      humidity
    }
  }
`;

const Weather: React.FC = () => {
    const [city, setCity] = useState<string>(''); 
    const [error, setError] = useState<string>('');
  
    const [getWeatherData, { data, loading: queryLoading, error: queryError }] = useLazyQuery(GET_WEATHER);
    console.log('DATA', data);
  
    const handleInputChange = (city: string) => {
      setCity(city);
    };
  
    const handleSearchSubmit = () => {
      if (!city) {
        setError('Please enter a city.');
        return;
      }
  
      setError('');
      getWeatherData({ variables: { city } });
    };
  
    return (
      <div className="weather-container">
        <div className="weather-content">
          <SearchBar city={city} onChange={handleInputChange} onSearch={handleSearchSubmit} />
          {queryLoading && <p>Loading...</p>}
          {queryError && <p className="error">{queryError.message}</p>}
          {error && <p className="error">{error}</p>}
          {data && data.getWeather && (
            <WeatherCard
              city={data.getWeather.city}
              temperature={data.getWeather.temperature}
              description={data.getWeather.description}
              humidity={data.getWeather.humidity}
              feels_like={data.getWeather.feels_like}
            />
          )}
        </div>
      </div>
    );
  };
  
  export default Weather;