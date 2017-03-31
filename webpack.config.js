var webpack = require('webpack');
var path = require('path');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";


module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        './src/index.jsx', // your app's entry point
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
        publicPath: '/',
        // path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]'
                    },
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            },
        ]
    },
    devServer: {
        contentBase: "./",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: false,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ]
};