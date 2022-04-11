const path = require('path');
module.exports = {
    entry: './index.ts',
    devtool: 'inline-source-map',    
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']        
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './src'),
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    mode: 'none'   
    
};