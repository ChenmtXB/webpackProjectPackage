const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
	mode: 'development',
	// ..其他的一些配置
	plugins: [
		// ...
		new BundleAnalyzerPlugin({
			analyzerHost: "127.0.0.1",
			analyzerPort: 5000
		})
		// {
		// 	analyzerMode: "server",
		// 	analyzerHost: "127.0.0.1",
		// 	analyzerPort: 8888, // 运行后的端口号
		// 	reportFilename: "report.html",
		// }
	]
});