const siteConfig = require("./site-config");

module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-digital-garden"
    },
    {
      resolve: "gatsby-theme-digital-garden-blog",
      options: {
        postsPath: siteConfig.navigation[0].path
      }
    }
    // {
    //   resolve: "gatsby-theme-digital-garden-portfolio",
    //   options: {
    //     projectsPath: "/work",
    //     projects: "projects"
    //   }
    // }
  ],
  siteMetadata: {
    title: siteConfig.siteTitle,
    email: siteConfig.email,
    social: siteConfig.social,
    navigation: siteConfig.navigation
  }
};
