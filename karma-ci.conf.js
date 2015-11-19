/* eslint-env node */

var path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
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
            type: 'lcov',
            dir: 'coverage/'
        },
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ['progress', 'coverage', 'coveralls'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Firefox', 'PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}
