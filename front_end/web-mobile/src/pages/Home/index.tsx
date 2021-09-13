import { Header } from '../../components/Header';
import { SubMenu } from '../../components/SubMenu';
import {
  Container,
  Logo,
  WelcomeText,
  Subtitle,
} from './styles';

import Cafe from '../../assets/logo.svg'
import { FooterConfirm } from '../../components/FooterConfirm';
import { CorrectContainer } from '../Checkout/styles';
import { api } from '../../server/api';
import { useEffect, useState } from 'react';

export interface ProductsProps {
  name: string,
  image: string,
  value: number,
  type: string,
  createdAt: Date,
  updatedAt: Date
}

export function Home() {

  const [products, setProducts] = useState<ProductsProps[]>([]);

  async function loadProducts(){
    const response = await api.get('/products')
    const { data } = response;

     setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  })

  return (
    <>
      <Header />
      <Container>
        <Logo src={Cafe} onClick={()=>{}}/>
        <WelcomeText>
          Boas vindas ao nosso cardápio online
        </WelcomeText>
        <Subtitle>
          Escolha lorem ipsum dolor sit
        </Subtitle>

        <SubMenu products={products} type='coffee'/>
        <SubMenu products={products} type='food'/>


      </Container>
      <FooterConfirm />

      <CorrectContainer />
    </>
  );
}