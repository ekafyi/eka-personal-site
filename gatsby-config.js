module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-digital-garden",
      options: {
        notesPath: "/notes"
      }
    },
    {
      resolve: "gatsby-theme-digital-garden-blog",
      options: {
        postsPath: "/writing"
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
    title: "Eka’s Personal Site",
    email: "eka@eka.fyi",
    social: {
      twitter: "ekafyi",
      github: "ekafyi"
    }
  }
};
