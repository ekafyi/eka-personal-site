import { graphql, useStaticQuery } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          email
          navigation {
            name
            path
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
