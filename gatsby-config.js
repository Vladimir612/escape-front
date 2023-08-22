/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Escape plesni studio`,
    description: `Plesni studio Escape je edukacijska plesna škola umjetničke voditeljice Lidije Iveković osnovana 2009. godine s ciljem promoviranja plesne umjetnosti. Na 4 lokacije grada Zagreba kvalitetni i iskusni pedagozi mnogobrojne članove podučavaju raznim plesnim tehnikama te odgajaju profesionalne plesače.`,
    image: `/videoPoster.png`,
    siteUrl: `https://wantedagencycroatia.com/`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -60,
      },
    },
  ],
}
