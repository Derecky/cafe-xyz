import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import styled from "styled-components"

export const MyButton = styled.button`
  width: 100%;
  height: 40px;

  background-color: #734230;

  color: #FFFFFF;

  border: none;
  border-radius: 8px;

  font-size: 10px;
  font-weight: bold;
`;

export const MyModal = styled(Modal)`
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MyModalOverlay = styled(ModalOverlay)`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const MyModalContent = styled(ModalContent)`
  padding: 16px;
  background-color: #FFFFFF;
  height: 277px;
  border-radius: 8px;
  
  margin: 0px 32px;

  align-self: center;
  justify-self: center;
`;

export const MyModalHeader = styled.h3`
  font-size: 18;
  font-weight: bold;
`;

export const MyModalFooter = styled(ModalFooter)`

`;

export const MyModalBody = styled(ModalBody)`
  margin-top: 8px;
`;

export const Info = styled.h2`
  font-size: 12px;
  font-weight: n;

  color: #808080;
`;

export const MyButton2 = styled.button`
  border: none;

  font-size: 8px;
  font-weight: normal;
  margin-left: 4px;
  color: #808080;

  background-color: #FFFFFF;



`;

export const MyModalCloseButton = styled(ModalCloseButton)`

  border: none;
  color: #808080;
  background-color: #FFFFFF;

  font-size: 10px;
`;

export const Text = styled.textarea.attrs({
  maxlength: 10,
  placeholder: "Ex.: Sem açúcar, Sem Cebola..."
})`
  border: 1px solid #E5E5E5;
  width: 100%;
  height: 130px;
  resize: none;
  margin: 16px 0px;
  padding: 10px;

  border-radius: 8px;
`;