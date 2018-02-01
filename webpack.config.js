const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const getEntry = require('./getEntry.js')
let debug = process.env.NODE_ENV !== 'production'
let entries = getEntry('src/scripts/page/**/*.js', 'src/scripts/page/')
let chunks = Object.keys(entries)

let config = {
    entry: entries,
    output:{
        path:path.join(__dirname,'dist'),
        publicPath:'/static/',
        filename:'scripts/[name].js',
        chunkFilename:'scripts/[name].chunk.js?[chunkhash]'
    },
    module:{
        loaders:[
            {
                test:'/\.css$/',
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/.less$/,
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader', 'less-loader']
                })
            }
        ]
    }
}



