var webpack = require('webpack');
var glob_entries = require('webpack-glob-entries');
var PROD = process.env.PROD_ENV;
module.exports = {
	entry: glob_entries("./source/scripts/*.js"),
	output: {
		path: PROD ? 'production' : 'development',
		filename: '[name].js'
	},
	devtool: PROD ? '' : '#source-map',
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: PROD
		?
		[
			new webpack.optimize.UglifyJsPlugin(
				{
					minimize: true
				}
			)
		]
		:
		[]
};
