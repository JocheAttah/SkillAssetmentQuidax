import React from "react";
import { Container, Inner, Text } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
