const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry : './src/index.js',
	output : {
		filename : 'main.js',
		path : path.resolve(__dirname, 'dist'),
	},
	devServer: {
		watchContentBase: true,
		contentBasePublicPath: path.join(__dirname, 'src', 'index.html')
	},
	module : {
		rules : [
			{
				test : /\.css$/i,
				use : ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'src/index.html'
	})],
}