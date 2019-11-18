const path = require('path');

module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/test/.*(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['json', 'text', 'html'],
  moduleDirectories: [
    path.resolve(__dirname, 'lib'),
    path.resolve(__dirname, 'lib/sprinter/brand-icons'),
    path.resolve(__dirname, 'src'),
    'node_modules'
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": path.resolve(__dirname, 'test/__mocks__/fileMock.ts'),
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^brandIcons/(.*)$": path.resolve(__dirname, 'lib/sprinter/brand-icons/$1'),
    '^components/(.*)$': path.resolve(__dirname, 'src/app/components/$1'),
    '^pages': path.resolve(__dirname, 'src/app/pages/index'),
    'app/(.*)': path.resolve(__dirname, 'src/app/$1'),
    '^lib/(.*)$': path.resolve(__dirname, 'lib/$1'),
    'src/(.*)': path.resolve(__dirname, 'src/$1')
  }
}