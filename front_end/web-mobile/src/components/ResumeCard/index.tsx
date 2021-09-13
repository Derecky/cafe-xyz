import {
  Container,
  ViewContainers,
  LeftContainer,
  ProductContainer,
  Title,
  SubTitle,
  PriceContainer,
  Titlev2,
  Value,
  QuantityContainer,
  RightContainer,
  IconX,
  HR,
  ObsContainer,
  Observation,
} from './styles';


export function ResumeCard(){
  return(
    <Container>
      <ViewContainers>
        <LeftContainer>
          <ProductContainer>
            <Title>Lorem ipsum dolor sis amet dolor</Title>
            <SubTitle>Lorem ipsum dolor</SubTitle>
          </ProductContainer>
          <PriceContainer>
            <Titlev2>Valor:</Titlev2>
            <Value>R$ 99,99</Value>
          </PriceContainer>
          <QuantityContainer>
            <Titlev2>Quantidade</Titlev2>
            <Value>01</Value>
          </QuantityContainer>
        </LeftContainer>
        <RightContainer>
          <IconX fontSize={16}/>
          <Titlev2>Remover</Titlev2>
        </RightContainer>
      </ViewContainers>
      <HR />
      <ObsContainer>
        <Titlev2>Observação:</Titlev2>
        <Observation>Sem açúcar</Observation>
      </ObsContainer>
    </Container>
  );
}