var path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '',


        frameworks: ['mocha', 'chai'],

        files: [
            'test/index.js',
        ],

        exclude: [],

        preprocessors: {
            "test/index.js": ["webpack", "sourcemap"],
        },

        webpack: {
            module: {
                preLoaders: [{
                    test: /\.jsx?$/,
                    exclude: [
                        path.resolve('src/components/'),
                        path.resolve('node_modules/')
                    ],
                    loader: 'babel'
                }, {
                    test: /\.jsx?$/,
                    include: path.resolve('src/components/'),
                    loader: 'isparta'
                }]
            },
            resolve: {
                extensions: ['', '.js', '.json', '.jsx']
            },
            devtool: 'inline-source-map'
        },

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        webpackMiddleware: {
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
}
