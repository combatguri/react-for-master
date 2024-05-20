const path = require('path');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    // plugins: [
    //     {
    //         plugin: {
    //             overrideWebpackConfig: ({ webpackConfig }) => {
    //                 webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
    //                 return webpackConfig;
    //             }
    //         }
    //     }
    // ],
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@components': path.resolve(__dirname, 'src/components')
        }
    }
};
