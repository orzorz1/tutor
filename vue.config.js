const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, 'cloudfunctions'),
                    to: path.join(__dirname, 'tutor/dist/mp-weixin', process.env.NODE_ENV === 'development' ? 'dev' : 'build', process.env.UNI_PLATFORM, 'cloudfunctions')
                }
            ])
        ]
    }
}
