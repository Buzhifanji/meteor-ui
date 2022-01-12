// Karma configuration
// Generated on Tue Jan 11 2022 13:23:21 GMT+0800 (中国标准时间)
// eslint-disable-next-line no-restricted-globals
const path = require('path')
// eslint-disable-next-line no-restricted-globals
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: "packages/**/*.test.ts", type: 'module' },
    ],
    preprocessors: {
      "packages/**/*.ts": ['webpack'],
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    reporters: process.env.CI
      ? ['spec', 'coverage-istanbul', 'coveralls']
      : ['spec', 'coverage-istanbul'],
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-coverage-istanbul-reporter',
      'karma-edge-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
    ],
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    webpack: {
      mode: 'development',
      output: {
        filename: '[name].js'
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.ts?$/,
            use: {
              loader: 'ts-loader',
            },
            exclude: [path.join(__dirname, 'node_modules')]
          },
          {
            test: /\.ts?$/,
            include: [path.join(__dirname, 'packages')],
            enforce: 'post',
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            }
          }
        ]
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      }
    },
    coverageIstanbulReporter: process.env.CI
      ? {
        reports: ['lcovonly', 'text-summary'],
        dir: path.join(__dirname, 'coverage'),
        combineBrowserReports: true,
        fixWebpackSourcePaths: true
      }
      : {
        reports: ['html', 'lcovonly', 'text-summary'],
        dir: path.join(__dirname, 'coverage/%browser%/'),
        fixWebpackSourcePaths: true,
        'report-config': {
          html: { outdir: 'html' }
        }
      },

    coverageReporter: {
      type: 'lcovonly',
      dir: 'coverage/'
    },

    browsers: ["Chrome"],
    singleRun: !!process.env.CI,
  })
}
