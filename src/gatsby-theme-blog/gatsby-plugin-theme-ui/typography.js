import merge from "lodash.merge";
import defaultThemeTypography from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/typography";

export default merge({}, defaultThemeTypography, {
  fonts: {
    body: "system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    heading: "system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
  }
});
