const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress'],
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: ['<rootDir>/'],
}

module.exports = customJestConfig
