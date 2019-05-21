module.exports = {
  siteMetadata: {
    title: `boram kim, developer`,
    author: `boramkim`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://boramyy.github.io/`,
    social: {
      github: `boramyy`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        "displayName": false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-128387569-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `boramkim blog`,
        short_name: `boramkim`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff6db6`,
        display: `minimal-ui`,
        icon: `content/assets/boram_icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans KR`,
            subsets: [`korean`],
            variants: [`100`, `400`, `700`]
          },
          { family: `Roboto Mono` },
          { family: `Nanum Gothic` },
        ],
      },
    }
  ],
}
