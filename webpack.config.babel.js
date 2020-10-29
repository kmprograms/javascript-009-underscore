import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
    entry: {
        index: path.join(__dirname, './src/index.js')
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            title: 'INDEX',
            template: path.join(__dirname, "src/index.html"),
            chunks: ['index']
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ],

    stats: {
        colors: true
    },

    devtool: 'source-map',
    mode: "development",
    devServer: {
        contentBase: './dist',
        inline: true,
        port: 3000
    }

}
