import React, { useState } from "react";
import { SiteHeader } from "../components";
import {
  BlackBooksIcon,
  CartIcon,
  LogoIcon,
  SearchIcon,
  SearchLarge,
} from "../assets/";
import useWindowWidth from "../hooks/useWindowSize";
import { Link } from "react-router-dom";

export function SiteHeaderContainer() {
  const { width } = useWindowWidth();
  //   const [mobile, setMobile] = useState(true);
  return (
    <SiteHeader.Container>
      <SiteHeader.Content>
        <SiteHeader.PaneLeft>
          <SiteHeader.Logo src={LogoIcon} alt="QuidaxLogo" />
          <div style={styles.fixFlex}>
            <SiteHeader.LogoText>Quidax Books</SiteHeader.LogoText>
            <SiteHeader.LogoParagraph>
              A flimsy book company
            </SiteHeader.LogoParagraph>
          </div>
        </SiteHeader.PaneLeft>

        <SiteHeader.PaneRight>
          {width >= 600 ? (
            <div style={styles.searchIconContainer}>
              <SiteHeader.SearchInput
                type="text"
                placeholder="Search books, genres, authors, etc."
              />
              <div style={styles.searchButton}>
                <Link>
                  <SiteHeader.Icon src={SearchIcon} alt="Search" />
                </Link>
              </div>
            </div>
          ) : (
            <Link>
              <SiteHeader.Icon src={SearchIcon} alt="Search" />
            </Link>
          )}
          {/* <> */}
          <SiteHeader.Icon src={BlackBooksIcon} alt="Books" />
          <SiteHeader.Icon src={CartIcon} alt="Cart" />
          {/* </> */}
        </SiteHeader.PaneRight>
      </SiteHeader.Content>
    </SiteHeader.Container>
  );
}

const styles = {
  searchButton: {
    width: 40,
    style: 40,
    backgroundColor: "#F9F9FB",
    borderWidth: 1,
    // borderLeftWidth: 0,
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIconContainer: {
    display: "flex",
    flex: 0.8,
    alignSelf: "flex-start",
  },

  fixFlex: {
    display: "flex",
    flexDirection: "column",
  },
};
