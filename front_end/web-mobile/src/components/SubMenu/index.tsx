import { useEffect, useState } from 'react';
import { ProductsProps } from '../../pages/Home';
import { ProductCard } from '../ProductCard';
import {
  Container,
  Title,
  ProductsContainer,
} from './styles';

interface SubMenuProps {
  products: ProductsProps[];
  type: 'coffee' | 'food' | 'drink';
}

export function SubMenu({ products, type }: SubMenuProps) {
  const [text, setText] = useState('')

  function selectType(type:string ) {
    switch(type){
      case 'coffee':
         setText("Nossos cafés");
         break;
      case 'food':
        setText("Nossas comidas");
        break;
      case 'drink':
        setText("Nossas bebidas");
        break;
      }
  }

  useEffect(() => {
    selectType(type); 
  })

  return (
    <Container>
      <Title>
        {text}
      </Title>
      <ProductsContainer>
        {products.map((product: ProductsProps) => {
          if(product.type === type){
            return(
              <ProductCard key={product.name} product={product}/>
            )
          }
          
        })}
      </ProductsContainer>
      
    </Container>
  );
}