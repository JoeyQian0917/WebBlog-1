
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require("path");//webpack版本2以上需要

module.exports ={
	// entry : './app/index.js',
	entry:[
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		path.join(__dirname,'app/index.js')
	],
	output:{
		path:path.resolve(__dirname, './dist/'),
		filename:'[name].js',
		publicPath:'/'
	},
	plugins:[
		new HtmlwebpackPlugin({
			template:'./index.tpl.html',
			inject:'body',
			filename:'./index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify('development')
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
	],
	module:{
		loaders :[
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader:'babel-loader',
				query: {
          			presets: ['react','es2015',"stage-2"],
        		}
		 	},{
			 	test:/\.css$/,
			 	loader:'styless!css'
		 	},{
			 	test:/\.less/,
			 	loader:'style-loader!css-loader!less-loader'
		 	}
		]
	}
}