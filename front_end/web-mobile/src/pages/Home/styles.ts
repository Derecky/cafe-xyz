import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px  32px;
  margin-top: 64px;
`;

export const Logo = styled.img`
  width: 128px;
  height: 73px;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const WelcomeText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  max-width: 235px;
  text-align: center;
`;

export const Subtitle = styled.h2`
  margin-top: 16px;
  font-size: 16px;
  font-weight: normal;
  color: #808080;
  max-width: 235px;
`;
