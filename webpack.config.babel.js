import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProd = process.env.NODE_ENV === 'production';

const config = {
    entry: ['./src'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: !isProd ? '[name].js' : '[name].[chunkhash].js',
        clean: true
    },
    devtool: !isProd ? 'inline-cheap-module-source-map' : 'source-map',
    devServer: {
        historyApiFallback: true,
        port: 8080,
        open: {
            app: {
                name: 'chrome',
            },
        },
        watchFiles: './index.html'
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                    },
                    {
                        test: /\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[name]__[local]--[contenthash:base64:5]',
                                    },
                                    importLoaders: 1,
                                },
                            },
                            'postcss-loader',
                        ],
                    },
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
        ],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    stats: {
        children: false,
        colors: true,
        hash: false,
        outputPath: false,
        publicPath: false,
        depth: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: !isProd ? '[name].css' : '[name]_[contenthash].css',
            experimentalUseImportModule: false
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
    ]
};

module.exports = config;