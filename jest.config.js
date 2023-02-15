const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './'
})
const customJestConfig = {
  transform: { '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest' },
  resolver: '<rootDir>/jest.resolver.js',
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/assets/(.*)$': '<rootDir>/assets/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/mocks/(.*)$': '<rootDir>/mocks/$1',
    '^@/libs/(.*)$': '<rootDir>/libs/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/providers/(.*)$': '<rootDir>/providers/$1',
    '^@/contexts/(.*)$': '<rootDir>/contexts/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/constants/(.*)$': '<rootDir>/constants/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
    '^@/motions/(.*)$': '<rootDir>/motions/$1',
    '^@/redux/(.*)$': '<rootDir>/redux/$1'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transformIgnorePatterns: ['node_modules/(?!@types/graphql-let|.cache/graphql-let)'],
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)
