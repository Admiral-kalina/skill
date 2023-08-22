require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `frontend`,
    siteUrl: `https://www.yourdomain.tld`
  },



  plugins: [
    "gatsby-plugin-layout",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Jost`,
            file: `https://fonts.googleapis.com/css2?family=Jost:wght@100;300;400;500;600;700;800&display=swap`,
          },
          {
            name:`Comforter`,
            file:`https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap`
          },
          {
            name:`Rubik`,
            file:`https://fonts.googleapis.com/css2?family=Rubik&display=swap`
          }
        ],
      },
    },
    "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]


};