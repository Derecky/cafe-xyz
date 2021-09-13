import { useDisclosure } from "@chakra-ui/hooks"
import {
  Container,
  MyButton,
  MyButton2,
  MyModal,
  MyModalOverlay,
  MyModalContent,
  MyModalHeader,
  MyModalFooter,
  MyModalBody,
  MyModalCloseButton,
  Text,
  Info,
} from "./styles"



export function Modal(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MyButton2 onClick={onOpen}>Algum Obsevação?</MyButton2>

      <MyModal isOpen={isOpen} onClose={onClose}>
          <MyModalOverlay />
          <MyModalContent>
            <Container>
              <MyModalHeader>
                Alguma observação?
              </MyModalHeader>
              <MyModalCloseButton />
            </Container>
            <MyModalBody>
              <Info>Lorem ipsum dolor sit amet</Info>
              <Text />
            </MyModalBody>

            <MyModalFooter>
              <MyButton onClick={() => {}}>
                Salvar Alterações
              </MyButton>
              
            </MyModalFooter>
          </MyModalContent>
        
      </MyModal>
    </>
  )
}