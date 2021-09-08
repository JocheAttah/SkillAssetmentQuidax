import styled from "styled-components/macro";

export const Container = styled.div`
  display: none;
  
  @media (min-width: 600px) {
    width: 96%;

    display: flex;
    justify-content: flex-start;
    align-self: center;
    border-bottom: 1px solid #eeeeee;
    margin: 0 auto;
  }
`;

export const Inner = styled.div``;
export const Text = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 10px 0;
`;
