const path = require('path');

module.exports = {
    entry: './frontend/entry',
    output: {
        path: path.resolve(__dirname),
        filename: 'app/assets/javascripts/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name][md5:hash].[ext]',
                    outputPath: '/public/assets/webpack',
                    publicPath: '/assets/webpack/'
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
        alias: {
            assets: path.resolve('./app/assets'),
        }
    }
};