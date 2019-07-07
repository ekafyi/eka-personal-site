import merge from "lodash.merge";
import defaultThemeStyles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles";

console.log(defaultThemeStyles);

export default merge({}, defaultThemeStyles, {
  a: {
    "&:hover": {
      color: `secondary`,
      textDecoration: "underline"
    }
  }
});
