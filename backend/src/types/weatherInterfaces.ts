export interface WeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  export interface WeatherDescription {
    description: string;
    icon: string;
  }
  
  export interface WeatherResponse {
    main: WeatherMain;
    weather: WeatherDescription[];
    name: string;
  }
  