const path = require('path');

module.exports = {
	entry: ['./src/index.jsx'],
	output: {
		filename: 'messenger.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/assets/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',
			}
		]
	}
}