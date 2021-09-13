import styled from "styled-components"

export const Container = styled.div`
  width: 136px;
  max-width: 136px;
  max-height: 316px;
  background-color: white;
  border-radius: 8px;
  margin-top: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`;

export const Photo = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 8px 8px 0px 0px;
`;

export const InfoContainer = styled.div`
  margin: 0px 10px;
`;

export const Title = styled.h1`
  font-size: 12px;
  font-weight: bold;
  width: 102;
  margin-top: 6px;
  height: 30px;
`;

export const SubTitle = styled.h2`
  color: '#808080';
  font-size: 10px;
  font-weight: normal;
  width: 102;
`;

export const PriceContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BRL = styled.h2`
  font-size: 12px;
  font-weight: bold;
`;

export const Real = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Centavo = styled.h2`
  font-size: 12px;
  font-weight: bold;
`;

export const Quantity = styled.h2`
  margin-top: 8px;
  font-size: 8px;
  font-weight: normal;
`;

export const Divider = styled.hr`
  margin-top: 10px;
  margin-left: -10px;
  width: 136px;
  border-top: 1px solid #E5E5E5;
`;

export const ObsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
`;
