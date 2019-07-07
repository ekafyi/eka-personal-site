import React from "react";
import { Link } from "gatsby";
import { css, Styled } from "theme-ui";
import Header from "gatsby-theme-blog/src/components/header";

export default props => {
  return (
    <Header {...props}>
      <Styled.a
        as={Link}
        to="/notes"
        css={css({
          flexGrow: 1,
          alignSelf: ["normal", "center"],
          mx: [16, 24],
          lineHeight: 2,
          fontFamily: `heading`,
          fontWeight: `bold`,
          textDecoration: `none`,
          color: `inherit`,
          ":hover": {
            textDecoration: `underline`
          }
        })}
      >
        Notes
      </Styled.a>
    </Header>
  );
};
