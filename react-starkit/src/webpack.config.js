const path =require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,"/dist"),
        filename: "build.js"
    },
    mode: "development",
    module: {
        rules:  [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                exclude: '/node_modules/'
            }
        },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
                options:{
                    modules:true
                }
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file?name=[path][name].[ext]'
            },
            ]},
  plugins:[
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }
    )
  ]
};