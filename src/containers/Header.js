import React from "react";
import {Header} from "../components";

export function HeaderContainer({Text}) {
  return (
      <Header.Container>
          <Header.Text>{Text}</Header.Text>
      </Header.Container>
  )
}
