var path = require('path');
var version = require('./package.json').version;

var rules = [
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(jpg|png|gif|svg)$/,
        use: ['file-loader']
    },
];

module.exports = [
    {// Notebook extension
        entry: './src/extension.js',
        output: {
            filename: 'extension.js',
            path: path.resolve(__dirname, '..', 'ipyleaflet', 'static'),
            libraryTarget: 'amd'
        }
    },
    {// jupyter-leaflet bundle for the notebook
        entry: './src/notebook.js',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, '..', 'ipyleaflet', 'static'),
            libraryTarget: 'amd'
        },
        devtool: 'source-map',
        module: {
            rules: rules
        },
        externals: ['@jupyter-widgets/base']
    },
    {// embeddable jupyter-leaflet bundle
        entry: './src/embed.js',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'amd',
            publicPath: 'https://unpkg.com/jupyter-leaflet@' + version + '/dist/'
        },
        devtool: 'source-map',
        module: {
            rules: rules
        },
        externals: ['@jupyter-widgets/base']
    }
];
