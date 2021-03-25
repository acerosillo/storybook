const tokens = require('./src/tokens/tokens');
const toJSON = require('./src/tokens/to-json');

const imports = toJSON(tokens);

module.exports = {
  siteMetadata: {
    title: `gatsby storybook postcss boilerplate`,
    description: `A boilerplate built with gatsby, storybook and postcss`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: (loader) => [
          require('stylelint')(),
          require('postcss-reporter')(),
          require('postcss-browser-reporter')(),
          require('postcss-nested'),
          require('postcss-preset-env')({
            stage: 1,
            autoprefixer: { grid: true },
            preserve: false,
            importFrom: [imports],
          }),
          require('postcss-import')({ root: loader.resourcePath }),
          require('cssnano')({
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }),
          require('postcss-hexrgba')(),
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
}
