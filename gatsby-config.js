module.exports = {
  siteMetadata: {
    title: `imcolin.fan`,
    description: `Colin 的个人网站`,
    author: `@Colin`,
    siteUrl: `https://imcolin.fan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [
          '**/node_modules/**',
          '**/.cache/**',
          '**/public/**',
          '**/dist/**',
          '**/*.log', // 忽略所有日志文件
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `imcolin.fan`,
        short_name: `imcolin.fan`,
        start_url: `/`,
        background_color: `#f39342`,
        theme_color: `#f39342`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/post`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
              markdownCaptions: true,
              quality: 100,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // 清晰度项目 ID 的字符串值
        clarity_project_id: 'jtd1ny51sb',
        // 用于在开发时启用清晰度时的布尔值
        // true 将在开发和生产环境中启用清晰度跟踪代码
        // false 将仅在生产环境中启用清晰度跟踪代码
        enable_on_dev_env: false
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
