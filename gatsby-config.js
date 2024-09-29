/* eslint-disable quotes */
/* eslint-disable react/no-array-index-key */
module.exports = {
  siteMetadata: {
    title: `Eric Swanson`,
    description: `Actor`,
    author: `Jonathan Helvey`,
    siteUrl: `https://www.ericryanswanson.com`,
  },
  plugins: [
    // Image Optimization Plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Styled Components for Styling
    `gatsby-plugin-styled-components`,

    // SEO and Sitemap Plugins
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },

    // Google Analytics using gatsby-plugin-google-gtag
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-152847627-2", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },

    // Manifest for PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eric Swanson Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/favicon_io/favicon-32x32.png`, // Path to your favicon
      },
    },

    // Offline Support
    `gatsby-plugin-offline`,

    // Source Filesystem for Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },

    // Source Filesystem for Markdown Pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/data`,
      },
    },

    // Source Filesystem for JSON Data
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },

    // Transformers
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,

    // Typography (Optional)
    // Consider removing or replacing with modern CSS-in-JS solutions
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
  ],
};
