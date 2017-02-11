var webpack = require("webpack");

// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: __dirname + '/src/index.html',
//     filename: 'index.html',
//     inject: 'body'
// });

module.exports = {
    "entry": "./src/main-asi.js",
    "output": {
        path: __dirname + "/public/build/",
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                "test": /\.js$/,
                "loader": "babel",
                "exclude": [/node_modules/, /public/]
            },

            {
                "test": /\.jsx$/,
                "loader": "babel",
                "exclude": [/node_modules/, /public/]
            },

            {
                "test": /\.css$/,
                "loader": "style-loader!css-loader!autoprefixer-loader"
            },

            {
                "test": /\.gif$/,
                "loader": "url-loader?limit=10000&mimetype=image/gif"
            },

            {
                "test": /\.jpg$/,
                "loader": "url-loader?limit=10000&mimetype=image/jpg"
            },

            {
                "test": /\.png$/,
                "loader": "url-loader?limit=10000&mimetype=image/png"
            },

            {
                "test": /\.svg$/,
                "loader": "url-loader?limit=26000&mimetype=image/svg"
            },

            {
                "test": /\.json$/,
                "loader": "json-loader"
            },

            { test: /\.svg$/, loader: 'babel!svg-loader' }
        ]
    },
    // plugins: [HTMLWebpackPluginConfig]
}