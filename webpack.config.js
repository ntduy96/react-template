var path = require('path');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
    filename: "main.css",
    // disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: SRC_DIR + "/app/app.js",
  devtool: "source-map",
  module: {
	  loaders: [
	    {
	      test: /\.js?/,
	      include: SRC_DIR,
	      loader: "babel-loader",
	      query: {
	      	presets: ["react","es2015","stage-2"]
	      }
	    },
	    {
	    	test: /\.css$/,
	    	loader: "style-loader!css-loader"
	    },
	    {
	    	test: /\.(scss|sass)$/,
	    	use: extractSass.extract({
	    		use: [
		    		{
		    			loader: 'css-loader',
		    			options: {
		    				sourceMap: true
		    			}
		    		},
		    		{
		    			loader: 'sass-loader',
		    			options: {
		    				sourceMap: true
		    			}
		    		}
	    		]
	    	})
	    }
	  ],
	},
  plugins: [
      extractSass
  ],
  output: {
    filename: "bundle.js",
    path: DIST_DIR + "/app/",
    publicPath: "/app/"
  },
};
