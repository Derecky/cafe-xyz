import styled from "styled-components";
import { FiX } from 'react-icons/fi';

export const Container = styled.div`
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  width: 100vw;
  margin-bottom: 16px;
`;

export const ViewContainers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 32px;

`;

export const LeftContainer = styled.div`
  border-right: 1px solid #E5E5E5;
  padding: 16px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductContainer = styled.div`
  max-width: 120px;
`;

export const Title = styled.h1`
  font-size: 12px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 10px;
  font-weight: normal;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0px 16px;
  width: 100px;
  
`;

export const Titlev2 = styled.h2`
  font-size: 8px;
  font-weight: normal;
`;

export const Value = styled.h1`
  font-size: 11px;
  font-weight: bold;
`;

export const QuantityContainer = styled.div`
  margin-right: 20px ;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin-left: 12px
`;

export const IconX = styled(FiX)`
  color: #000000;
  width: 16px;
  height: 16px;
`;

export const HR = styled.hr`
  border: 1px solid #E5E5E5;
`;

export const ObsContainer = styled.div`
  margin: 0px 32px;
  padding: 8px 0px;
`;

export const Observation = styled.div`
  font-size: 10px;
  font-weight: bold;
`;
