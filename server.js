const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer (webpack(config),{
	publicPath:config.output.publicPath,
	hot:true,
	historyApiFallback:true,
	quiet:false,
	noInfo:false,//终端中输出结果为彩色
    inline: true,//实时刷新
	stats:{
		assets:false,
		colors:true,
		version:false,
		hash:false,
		timings:false,
		chunks:false,
		chunkModules:false
	}
}).listen(8080,'localhost',function(err){
	if(err){
		console.log(err);
	}
	console.log('监听端口：8080');
})