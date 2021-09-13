import {
  Container,
  TextContainer,
  Title,
  SubTitle,
  Image,
  Text1,
  Text2,
  Button,
} from './styles';

import Coffee from '../../assets/final.svg';

export function Success() {
  return (
    <Container>
      <TextContainer>
        <Title>
          Pedido Confirmado
        </Title>
        <SubTitle>
          Lorem ipsum dolor sit amet lorem ipsum dolor sit
        </SubTitle>
      </TextContainer>


      <Image src={Coffee}/>
      <TextContainer>
        <Text1>Lorem ipsum dolor</Text1>
        <Text2>Lorem ipsum dolor</Text2>
      </TextContainer>
      <Button>Voltar ao Cardápio</Button>
    </Container>
  );
}