// const merge = require('webpack-merge');
// const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// var config = {
//     mode: 'production',
//     output: {
//         path: path.resolve(__dirname + '/dist/'),
//     },
//     optimization: {
//     },
//     plugins: [
//             new CompressionPlugin({
//                 test: /\.js$|\.css$|\.html$/,
//                 algorithm: 'gzip',
//             })
//     ],
//     module: {
//         rules: [
//           {
//             test: /\.js$/,
//             loader: 'babel-loader',
//             include: __dirname,
//             exclude: /node_modules/
//           },
//           {
//             test: /\.vue$/,
//             loader: 'vue-loader'
//           },
//           {
//             test: /\.css$/,
//             loader: 'css-loader'
//           }
//         ]
//       }
// }

// module.exports = [
//     merge(config, {
//         entry: path.resolve(__dirname + '/src/entry-lib.js'),
//         output: {
//             filename: 'nitrozen.umd.min.js',
//             libraryTarget: 'window',
//             library: 'nitrozen',
//         }
//     }),
//     merge(config, {
//         entry: path.resolve(__dirname + '/src/entry-lib.js'),
//         output: {
//           filename: 'nitrozen.umd.js',
//           libraryTarget: 'umd',
//           library: 'nitrozen',
//           umdNamedDefine: true
//         }
//       })
// ]

// module.exports= {
//   configureWebpack: config => {

//   }
// }

// module.exports = {
//   publicPath: '',
//   // disable hashes in filenames
//   filenameHashing: false,
//   // delete HTML related webpack plugins
//   // chainWebpack: config => {
//   //   config.plugins.delete('html')
//   //   config.plugins.delete('preload')
//   //   config.plugins.delete('prefetch')
//   // }
// }

var config = {
    plugins: [
        new CompressionPlugin({
            test: /\.js$|\.css$|\.html$/,
            algorithm: 'gzip',
        })
    ],
    rules: [{
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'file-loader',
        query: {
            name: 'assets/[name].[ext]',
            publicPath: '/'
        }
    }]
}

// module.exports = {
//     configureWebpack : {
//         plugins: [
//             new CompressionPlugin({
//                 test: /\.js$|\.html$/,
//                 algorithm: 'gzip',
//             }),
//             new MiniCssExtractPlugin({
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//             })
//         ]},
//         chainWebpack: config => {
//             config.module
//             .rule('assets')
//             .test(/\.(jpg|jpeg|gif|png)$/)
//             .use('file-loader')
//             .loader('file-loader')
//             .options({
//                 name: 'assets/[name].[ext]',
//             })
//             .end()
//         }
// };