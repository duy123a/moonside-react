export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|webp|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};
