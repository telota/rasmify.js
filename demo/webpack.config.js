var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
    entry : {
        rasmifyDemo: './src/main.js'
    },
    output : {
        path : path.resolve(__dirname, './dist'),
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use : ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loaders : [
                    {
                        loader : 'file-loader',
                        options : {
                            name: 'fonts/coranica.[hash].[ext]'
                        }
                    }
                ]

            },

        ]
    },

    plugins : [
        new ExtractTextPlugin("[name].css"),

        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
        })

    ]
};