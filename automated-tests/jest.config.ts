/**
 * For a detailed explanation regarding each configuration property, visit:
 */

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  modulePaths: ['<rootDir>'],
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
};

export default config;
