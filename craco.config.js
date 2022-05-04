const CracoAntDesignPlugin = require('craco-antd');
const {resolve, join} = require('path');
const cracoPluginStyleResourcesLoader = require('craco-plugin-stylus-resources-loader');

console.log(join(__dirname, './src/global.less'));

module.exports = {
    webpack: {
        alias: {
            '~': resolve(__dirname, 'src')
        }
    },
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#1890ff'
                }
            }
        },
        {
            plugin: cracoPluginStyleResourcesLoader,
            options: {
                patterns: [join(__dirname, './src/global.less')],
                /* 
                    Please enter supported CSS processor type
                    1. if u use css processor，please type css string
                    2. if u use less processor，please type less string
                    3. if u use sass or scss processor，please type sass or scss string，Choose one of the two
                    4. if u use stylus processor，please type stylus string
                */
                styleType: 'less'
            }
        }
    ]
};
