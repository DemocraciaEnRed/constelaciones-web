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
  ],
};
