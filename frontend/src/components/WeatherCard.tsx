import React from 'react';
import './WeatherCard.css';
import { capitalizeWords } from '../utils';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  feels_like: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temperature,
  description,
  humidity,
  feels_like,
}) => {

  const capitalizedDescription = capitalizeWords(description);

  return (
    <div className="weather-card">
      <h2 className='city-name'>{city}</h2>
      <div className='border'></div>
      <div className="weather-details">
          <img
            src={'/images/cloud-icon.png'}
            alt={description}
            className="weather-icon"
          />
        <div className="additional-info">
          <h1 className="temperature">{temperature}°C</h1>
          <p className='description'>{capitalizedDescription}</p>
        </div>
        <div className='border2'></div>
        <div className='weather-info'>
          <p>Feels {feels_like}°C</p>
          <div className="vertical-border"></div>
          <p>{humidity}% Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
