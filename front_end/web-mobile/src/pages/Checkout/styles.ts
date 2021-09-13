import { FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin-top: 79px;
  margin-bottom: 200px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  padding-left: 32px;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin-top: 10px;
  color: #808080;
  padding-left: 32px ;
`;

export const Products = styled.div`
  margin-top: 32px;
`;

export const ProductsTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin-left: 32px;
  margin-bottom: 8px;
`;

export const CreditContainer = styled.div`
  
`;

export const InfoCardContainer = styled.div`
  margin: 0px 16px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex: 1;
  height: 56px;

  background-color: #FFFFFF;
`;

export const SepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Brand = styled.img`
  margin-left: 16px;
  height: 24px;
  width: 36px;
`;

export const TypeDataContainer = styled.div`
  margin-left: 24px;
`;

export const CorrectContainer = styled.div`
  height: 70px;
`;

export const IconDots = styled(FiMoreVertical)`
  margin-right: 16px;
  color: #808080;
`;