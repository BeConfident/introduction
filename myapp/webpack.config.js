const path=require("path");
const webpack= require("webpack");
module.exports={
    entry:path.join(__dirname,"src/main.js"),
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer:{
        port:8888,
        hot:true,
        inline:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.less$/,
                loader:"style-loader!css-loader!less-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8192&name=assets/[hash:8].[name].[ext]'
            }
        ]
    },
    resolve:{
        alias:{
            "vue$" : 'vue/dist/vue.js',
            "@": path.resolve(__dirname,'src')
        }
    },
    /*plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                dev:{
                    proxyTable: {
                        '/api': {
                            target: 'http://localhost:3000/blog',
                            changeOrigin: true,
                            pathRewrite: {
                                '^/api': '/'
                            }
                        }
                    }
                }
            }
        })
    ]*/
}
/*if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}*/
