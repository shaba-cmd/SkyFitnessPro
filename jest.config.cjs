module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg|webp)$': '<rootDir>/test/fileMock.cjs',
    '^@/shared/config/env$': '<rootDir>/test/envMock.cjs',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
