'use strict'

const merge = require('webpack-merge');
const baseConfig = require('../../webpack.config.js');

module.exports = merge.smartStrategy()(
    baseConfig, {
        resolve: {
            modules: [
                `${__dirname}/js`,
                'node_modules',
            ]
        },
        output: {
            filename: 'bundle-css.min.js',
        }
    }
)
