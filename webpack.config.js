'use strict';

var webpack = require('webpack');
var path = require('path');
var debug = true;

module.exports = {
    context: path.join(__dirname, 'frontend'),
    entry: './js/index.js',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    pressets: ['react', 'es2015'],
                    plugins: ['transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }],
            },
        ]
    },
    resolve: {
        modules: [
            `${__dirname}/frontend/js`,
            'node_modules',
        ],
        extensions: ['.js', '.jsx', '.styl'],
    },
    resolveLoader: {
        modules: [`${__dirname}/node_modules`, 'node_modules']
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.min.js',
    },
}
