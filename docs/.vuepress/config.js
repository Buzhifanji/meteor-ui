const path = require('path')

module.exports = {
    lang: 'zh-CN',
    title: '不知凡几',
    description: '不知凡几 博客',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            { text: '组件库', link: '/components/button' }
        ],
        sidebar: [
            '/components/button/README.md',
            '/components/space/README.md',
        ]
    },
    plugins: [
        ['@vuepress/plugin-search'],
        ['@vuepress/plugin-back-to-top'],
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'vanilla-ui',
            description: '一个 Web Component 组件库',
        },
    },
    bundler: '@vuepress/bundler-vite',
    bundlerConfig: {
        vuePluginOptions: {
            template: {
                compilerOptions: {
                    // 将所有包含短横线的标签作为自定义元素处理
                    isCustomElement: tag => tag.includes('v-')
                }
            }
        }
    }
}