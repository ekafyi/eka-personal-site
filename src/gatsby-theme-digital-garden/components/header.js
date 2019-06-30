import React from "react";
import { Link } from "gatsby";
import { css, Styled } from "theme-ui";
import { Header } from "theme-ui/layout";

import useSiteMetadata from "gatsby-theme-digital-garden/src/use-site-metadata";

export default () => {
  const { title, navigation } = useSiteMetadata();

  return (
    <Header
      css={css({
        p: [3, 4],
        bg: "background",
        color: "muted"
      })}
    >
      <Styled.a as={Link} to="/">
        {title}
      </Styled.a>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          margin: 0,
          flexGrow: 1,
          justifyContent: "flex-end"
        }}
      >
        {navigation.map(({ name, path }) => (
          <li key={name + path} style={{ marginLeft: 12 }}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </Header>
  );
};
