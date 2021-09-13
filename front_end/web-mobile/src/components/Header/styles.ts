import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  width: 100vw;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #F5F1EF;
`;

export const BackIcon = styled(FiArrowLeft)`
  margin-right: 51px;
  margin-left: 32px;
`;

export const TitleRoute = styled.h1`
  justify-self: center;
  font-size: 12px;
  font-weight: bold;
`;
