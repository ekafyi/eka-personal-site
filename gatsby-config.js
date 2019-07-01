const siteConfig = require("./site-config");

module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-digital-garden",
      options: {
        notes: "content/notes"
      }
    },
    {
      resolve: "gatsby-theme-digital-garden-blog",
      options: {
        posts: "content/posts",
        postsPath: siteConfig.navigation[0].path
      }
    },
    {
      resolve: "gatsby-theme-digital-garden-portfolio",
      options: {
        projects: "content/projects",
        projectsPath: "/work"
      }
    }
  ],
  siteMetadata: {
    title: siteConfig.siteTitle,
    email: siteConfig.email,
    social: siteConfig.social,
    navigation: siteConfig.navigation
  }
};
