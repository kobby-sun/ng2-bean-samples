var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
var path = require("path");
var fs = require("fs");

var config = {
    target: "node",
    cache: false,
    context: __dirname,
    debug: false,
    devtool: "source-map",
    entry: ["../src/api.js"],
    output: {
        path: path.join(__dirname, "../src/"),
        filename: "server.js"
    },
    plugins: [
        new webpack.DefinePlugin({ __USE_GA__: false, __DEVTOOLS__: false, __CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEVELOPMENT__: false, __NODE_ENV__: 'production', __BUILD__: '""', __ELASTICIP__: '"http://dokku-elasticsearch-hometour"' }),
        new webpack.ProvidePlugin({
            _: "underscore"
        })
    ],
    module: {
        loaders: [
            { test: /\.json$/, loaders: ["json"] },
            { test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/, loaders: ["file?context=static&name=/[path][name].[ext]"], exclude: /node_modules/ },
            { test: /\.(js)$/, loaders: ["babel?presets[]=es2015&presets[]=stage-0"], exclude: /node_modules/ }
        ],
        postLoaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style!css!less?strictMath&noIeCompat" }
        ],
        noParse: /\.min\.js/
    },
    externals: [nodeExternals({
        whitelist: ["webpack/hot/poll?1000"]
    })],
    resolve: {
        modulesDirectories: [
            "src",
            "node_modules",
            "static"
        ],
        extensions: ["", ".json", ".js"]
    },
    node: {
        __dirname: true,
        fs: "empty"
    }
}

var wds = {
	hostname: process.env.HOSTNAME || "localhost",
	port: 8080
};
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.cache = true;
config.debug = true;

config.entry.unshift(
	"webpack/hot/poll?1000"
);

config.output.publicPath = "http://" + wds.hostname + ":" + wds.port + "/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
	new webpack.DefinePlugin({ }),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
		_: "underscore"
	}),
    new ExtractTextPlugin("[name].css")
];

module.exports = config;