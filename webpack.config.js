const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        app: './app/index.js',
        clock: './app/components/step1-element.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
         contentBase: './dist'
   },
    plugins: [
        HtmlWebpackPluginConfig,
        new CleanWebpackPlugin(['dist'])
    ]
};
