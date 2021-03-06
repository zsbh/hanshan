/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jsdom',

  // projects: ['packages/*'], // monorepo 配置 会使用projects下的jest.config.js
  //  把ts 结尾的文件转换成 js  文件
  preset: 'ts-jest',
  // transform: {
  //   '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  //   '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest'
  // },
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};
