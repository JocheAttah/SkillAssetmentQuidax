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

export function SiteHeaderContainer() {
  const { width } = useWindowWidth();
  //   const [mobile, setMobile] = useState(true);
  return (
    <SiteHeader.Container>
      <SiteHeader.Content>
        <SiteHeader.PaneLeft>
          <SiteHeader.Logo src={LogoIcon} alt="QuidaxLogo" />
          <SiteHeader.LogoText>Quidax Books</SiteHeader.LogoText>
        </SiteHeader.PaneLeft>

        <SiteHeader.PaneRight>
          {width >= 600 ? (
            <div style={styles.searchIconContainer}>
              <SiteHeader.SearchInput
                type="text"
                placeholder="Search books, genres, authors, etc."
              />
              <div style={styles.searchButton}>
                <SiteHeader.Icon src={SearchIcon} alt="Search" />
              </div>
            </div>
          ) : (
            <SiteHeader.Icon src={SearchIcon} alt="Search" />
          )}
          <>
            <SiteHeader.Icon src={BlackBooksIcon} alt="Books" />
            <SiteHeader.Icon src={CartIcon} alt="Cart" />
          </>
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
    borderStyle: "solid",
    borderColor: "#F9F9FB",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  searchIconContainer: {
    display: "flex",
  },
};
