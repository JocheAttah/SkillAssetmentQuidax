import React from "react";
import {
  Container,
  Inner,
  Content,
  PaneLeft,
  PaneRight,
  Logo,
  LogoText,
  Icon,
  SearchInput
} from "./styles/siteHeader";

export default function SiteHeader({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

SiteHeader.Container = function SiteHeaderContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};
SiteHeader.Content = function SiteHeaderContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

SiteHeader.PaneLeft = function SiteHeaderPane({ children, ...restProps }) {
  return <PaneLeft {...restProps}>{children}</PaneLeft>;
};

SiteHeader.PaneRight = function SiteHeaderPane({ children, ...restProps }) {
  return <PaneRight {...restProps}>{children}</PaneRight>;
};

SiteHeader.Logo = function SiteHeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};
SiteHeader.LogoText = function SiteHeaderLogoText({ children, ...restProps }) {
  return <LogoText {...restProps}>{children}</LogoText>;
};

SiteHeader.Icon = function SiteHeaderIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

SiteHeader.SearchInput = function SiteHeaderSearchInput({ ...restProps }) {
    return <SearchInput {...restProps} />;
}
