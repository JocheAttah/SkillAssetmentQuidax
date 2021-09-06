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
  max-width: 150px;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
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
`;
export const LogoText = styled.h3`
  font-size: 14px;
`;
export const Icon = styled.img`
//   margin-right: 30px;
  width: 20px;
  height: 20px;
  align-self: center;
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
  border-right-width:0;
  padding: 10px 15px;
  
`;
