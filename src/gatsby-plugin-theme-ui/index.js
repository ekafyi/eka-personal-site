// import baseTheme from "gatsby-plugin-theme-ui";
import { base } from "@theme-ui/presets";

export default {
  ...base,
  colors: {
    ...base.colors,
    text: "red",
    background: "lightyellow"
  }
  // fonts: {
  //   body: "system-ui, sans-serif",
  //   heading: "Georgia, serif",
  //   monospace: "Menlo, monospace"
  // },
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  // fontWeights: {
  //   body: 400,
  //   heading: 700,
  //   bold: 700
  // },
  // lineHeights: {
  //   body: 1.5,
  //   heading: 1.125
  // },
  // letterSpacings: {
  //   body: "normal",
  //   caps: "0.2em"
  // }
};
