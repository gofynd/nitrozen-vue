module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(spec|test).js'],
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.spec.js?$": "babel-jest"
  },
}
