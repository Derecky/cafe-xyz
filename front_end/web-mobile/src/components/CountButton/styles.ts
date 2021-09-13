import { colors } from './../../utils/colors';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 115px;
  height: 32px;
  align-items: center;
`;

export const LeftButton = styled.button`
  
  display: block;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px 0px 0px 8px;
  justify-content: center;
  align-items: center;
  color: ${colors.white};

  ${({disabled}) => disabled ? 
    `background-color: ${colors.gray_100}` : 
    `background-color: ${colors.creme}`
  }
`;

export const RightButton = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${colors.creme};
  border-radius: 0px 8px 8px 0px;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
`;

export const Text = styled.input`
  width: 51px;
  height: 32px;
  border: none;
  margin: 0px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  -webkit-appearance: none;
`;
