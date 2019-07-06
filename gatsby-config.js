module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
        homeText: "Home",
        breadcrumbSeparator: "»"
      }
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: `content/writing`
      }
    }
  ],
  siteMetadata: {
    title: `Ekaʼs Personal Site`,
    author: `Eka (@ekafyi)`,
    description: `Personal site of Eka, a front-end developer in Indonesia`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ekafyi`
      },
      {
        name: `github`,
        url: `https://github.com/ekafyi`
      }
    ]
  }
};
