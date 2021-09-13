import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 32px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  
  justify-content: space-between;
`;

export const TextContainer = styled.div`

`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.h1`
  margin-top: 10px;
  max-width: 240px;
  font-size: 16px;
  font-weight: normal;
  color: #808080;
`;

export const Image = styled.img`
  margin-top: 10px;
`;

export const Text1 = styled.h1`
  font-size: 14px;
  font-weight: bold;
`;

export const Text2 = styled.h2`
  margin-top: 10px;

  color: #808080;
  font-size: 10px;
  font-weight: normal;
`;

export const Button = styled.button`
  border: none;
  background-color: #734230;
  height: 40px;

  margin: 0px -16px;
  margin-top: 10px;

  border-radius: 8px;

  color: #FFFFFF;
  font-size: 10px;
  font-weight: bold;
`;
