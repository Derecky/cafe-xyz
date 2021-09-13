import { FiFileText } from "react-icons/fi";
import { ProductsProps } from "../../pages/Home";
import { CountButton } from "../CountButton";
import { Modal } from "../Modal";

import {
  Container,
  Photo,
  InfoContainer,
  Title,
  SubTitle,
  PriceContainer,
  BRL,
  Real,
  Centavo,
  Quantity,
  Divider,
  ObsContainer,
} from './styles';

interface ProductCradProps {
  product: ProductsProps;
}

export function ProductCard({ product }: ProductCradProps) {

  const real = Math.floor(product.value);
  /* Falta formatar */
  const centavo = Math.floor((product.value - real   ) * 100);


  return (
    <Container>
      <Photo 
        src= {product.image}
        alt= {product.name}
      />

      <InfoContainer>

        
          <Title>{product.name}</Title>
          {/*<SubTitle>Lorem ipsum dolor</SubTitle>*/}
        

        <PriceContainer>
          <BRL>R$</BRL>
          <Real>{real}</Real>
          <Centavo>,{centavo}</Centavo>
        </PriceContainer>

        <Quantity></Quantity>
        <CountButton />
        <Divider />
        <ObsContainer>
          <FiFileText fontSize={12}/>
          <Modal />
        </ObsContainer>

        


      </InfoContainer>

    </Container>
  )
}