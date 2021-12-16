/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  moduleFileExtensions: ["js", "json", "vue"],
  testPathIgnorePatterns: ['/node_modules/'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'text-summary',
    'lcov',
    'cobertura',
    'json-summary'
  ],
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest"
  }
}

module.exports = config
