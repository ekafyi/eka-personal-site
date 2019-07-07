import merge from "lodash.merge";
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors";

export default merge({}, defaultThemeColors, {
  text: "rgba(0,0,0,0.9)",
  background: "#fff1c1",
  primary: "#0734a2",
  secondary: "#F44708",
  modes: {
    dark: {
      text: "rgba(255,255,255,0.9)",
      background: "#132052",
      primary: "#f7e022",
      secondary: "#FF824D"
    }
  }
});
