import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Weather {
    city: String
    temperature: Float
    description: String
    humidity: Int
    pressure: Int
    feels_like: Float
  }

  type Query {
    getWeather(city: String!): Weather
  }
`;

export default typeDefs;
