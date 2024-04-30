module.exports = function(config) {
  config.set({
      reporters: ['progress', 'coverage'],
    preprocessors: {
    '**/*.ts': ['coverage']
  },
  coverageReporter: {
    dir: require('path').join(__dirname, './coverage'),
      reporters: [
      { type: 'html', subdir: 'report-html' },
      { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
    ]
  },
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
});
};
