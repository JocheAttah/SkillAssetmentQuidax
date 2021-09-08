import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border: 1px solid rgba(238, 238, 238, 1);
`;
export const Content = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Item = styled.div``;
export const Inner = styled.div``;

export const PaneLeft = styled.div`
  display: flex;
  align-items: center;
  width: 35%; 
  max-width: 170px;
  justify-content: space-between;
  align-items: center;
`;
export const PaneRight = styled.div`
  display: flex;
  align-items: center;
  max-width: 120px;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;

  @media (min-width: 600px) {
    max-width: 1300px;
    width: 100%;
  }
`;
export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;
export const LogoText = styled.h3`
  font-size: 12px;

  @media (min-width: 600px) {
    font-size: 14px;
  }
`;

export const LogoParagraph = styled.p`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #aaaaaa;
  }
`;
export const Icon = styled.img`
  margin-right: 30px;
  width: 20px;
  height: 20px;
  align-self: center;

  @media (min-width: 600px) {
    margin-right: 0;
  }
`;

export const ButtonIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  width: 100%;
  border: 1px solid #dddddd;
  border-right-width: 0;
  padding: 10px 15px;
`;
