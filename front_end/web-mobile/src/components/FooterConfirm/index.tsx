import {
  Container,
  Field,
  IconPriceContainer,
  IconBuy,
  PriceContainer,
  Text,
  BRLContainer,
  BRLCentavo,
  Real,
  ConfirmButton,
} from './styles';

export function FooterConfirm() {
  return(
    <Container>
      
      <Field>
        <IconPriceContainer>
          <IconBuy fontSize={32}/>
          <PriceContainer>
            <Text>Valor total:</Text>
            <BRLContainer>
              <BRLCentavo>R$</BRLCentavo>
              <Real>199</Real>
              <BRLCentavo>,99</BRLCentavo>
            </BRLContainer>
          </PriceContainer>
        </IconPriceContainer>

        <ConfirmButton>
          Confirmar pedido
        </ConfirmButton>
      </Field>
    </Container>
  );
}