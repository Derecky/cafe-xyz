import {
  Container,
  BackIcon,
  TitleRoute,
} from './styles';

export function Header () {

  return( 
    <Container >
      <BackIcon fontSize={16}/>
      <TitleRoute>
        Café XYZ - Cardápio online
      </TitleRoute>
    </Container>
  );
}