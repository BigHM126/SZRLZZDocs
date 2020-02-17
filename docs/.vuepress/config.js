module.exports = {
    title: '产品文档',
    description: '所有产品及模块相关帮助文档的集合。',
    base: '/szrlzzdocs/',
    // host: '',
    // port: 8080,
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: '快速入门', link: '/guide/' },
            {
                text: '安装指南',
                ariaLabel: '安装指南',
                items: [
                    { text: '部署方案', link: '/deploy/' },
                    { text: 'OEM产品', link: '/installoem/' },
                    { text: '标准产品', link: '/install/' },
                    { text: 'APP应用', link: '/installapp/' },
                    { text: '初始化', link: '/setting/' }
                ]
            },
            {
                text: '操作手册',
                ariaLabel: '产品系列',
                items: [
                    { text: 'R9C', link: '/r9cloud/' },
                    { text: 'MES', link: '/mes/' },
                    { text: 'WMS', link: '/wms/' },
                    { text: 'QMS', link: '/qms/' },
                    { text: '其他', link: '/others/' }
                ]
            },
            { text: '平台', link: '/ecaf/' },
            { text: 'API', link: '/api/' },
            { text: '运维', link: '/operation/' },
            { text: '官网', link: 'http://www.szrlzz.com/' } //, target:'_self', rel:''
        ],
        sidebar: 'auto',
        /*     algolia: {
          apiKey: '<API_KEY>',
          indexName: '<INDEX_NAME>'
        } */
        lastUpdated: '最后更新时间', // string | boolean

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'BigHM126/szrlzzdocs.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        smoothScroll: true
    },
    markdown: {
        lineNumbers: true, // 每个代码块显示行号
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        extendMarkdown: (md) => {
            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-xxx'))
        }
    },
    plugins: ['@vuepress/back-to-top'],
    configureWebpack: {
        resolve: {
            alias: {
                //'@media': './vuepress/assets/media'
            }
        }
    }
}