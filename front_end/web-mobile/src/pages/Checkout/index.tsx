import { FooterConfirm } from '../../components/FooterConfirm';
import { Header } from '../../components/Header';
import { ResumeCard } from '../../components/ResumeCard';

import Master from '../../assets/mastercard.svg';

import {
  Container,
  Title,
  SubTitle,
  Products,
  ProductsTitle,
  CorrectContainer,
  CreditContainer,
  InfoCardContainer,
  SepContainer,
  Brand,
  TypeDataContainer,
  IconDots
} from './styles';
import { Titlev2, Value } from '../../components/ResumeCard/styles';

export function Checkout(){
  return(
    <>
    <Container>
      <Header />
      <Title>Resumo do pedido</Title>
      <SubTitle>Lorem ipsum dolor sit</SubTitle>

      <Products>
        <ProductsTitle>Pedidos</ProductsTitle>
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </Products>
      <FooterConfirm />

      <CreditContainer>
        <ProductsTitle>Forma de pagamento</ProductsTitle>
        <InfoCardContainer>
          
          <SepContainer>
            <Brand src={Master}/>
            <TypeDataContainer>
              <Titlev2>Master Card - Crédito</Titlev2>
              <Value>•••• •••• 1234</Value>
            </TypeDataContainer>
          </SepContainer>

          <IconDots />
        </InfoCardContainer>
      </CreditContainer>

      <CorrectContainer />
    </Container>
    </>
  );
}