const path = require('path');

module.exports = {
	entry: ['./src/index.jsx'],
	output: {
		filename: 'messenger.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/assets/'
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
			}
		]
	}
}