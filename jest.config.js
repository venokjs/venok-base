module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testRegex: ".spec.ts$",
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};