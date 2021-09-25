module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "constelaciones-web",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `./content/`,
      },
    },
  ],
};
