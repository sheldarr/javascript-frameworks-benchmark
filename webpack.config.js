const path = require('path');
const webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: {
        angularjs: './src/implementations/angularjs.js',
        angular: './src/implementations/angular.js',
        mithril: './src/implementations/mithril.js',
        polyfills: './src/helpers/polyfills.js',
        react: './src/implementations/react.js',
        stats: './src/helpers/stats.js',
        vendor: ['moment', 'chance', 'stats.js'],
        vue: './src/implementations/vue.js'
    },
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.pug$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'pug-loader',
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        })
    ],
    devtool: "eval"
}
