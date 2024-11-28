module.exports = {
  preset: 'ts-jest',
  silent: false,
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
};
