var path = require('path');
module.exports = {
 entry: [
 	'webpack/hot/dev-server',
  	'webpack-dev-server/client?http://localhost:8080',
 	path.resolve(__dirname,'app/main.js')
 ],
 output:{

    path: path.resolve(__dirname,'build'),

    filename:"bundle.js"

 },
 resolve: {
        extensions: ['', '.js', '.jsx']
 },
 module: {
    loaders: [
        { 
        	test: /\.js|jsx$/,exclude: /node_modules/, 
        	loader: ['babel'],
        	query: {presets: ['es2015', 'react']},
			plugins: [
                        'transform-runtime',
            ]
        }
    ]
 },
 state:{
 	colors:true
 },
 devtool: 'source-map'
}
