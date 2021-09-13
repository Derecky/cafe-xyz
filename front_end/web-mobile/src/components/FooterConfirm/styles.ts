import { FiCoffee } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 64px;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #FFFFFF;

  border-radius: 8px 8px 0px 0px;

`;

export const Field = styled.div`
  margin: 12px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconBuy = styled(FiCoffee)`

`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Text = styled.h1`
  font-size: 8px;
  font-weight: normal;
`;

export const BRLContainer = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const BRLCentavo = styled.h2`
  font-size: 12px;
  font-weight: bold;
`;

export const Real = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ConfirmButton = styled.button`
  height: 40px;
  width: 132px;
  border-radius: 8px;

  border: none;

  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: #FFFFFF;

  background-color: #734230;
`;
