
import { useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import {
  Container,
  LeftButton,
  RightButton,
  Text
} from './styles';



export function CountButton() {
  const [count, setCount] = useState(0);

  function handleAdd(){
    const newCount = count + 1;
    setCount(newCount)
  }

  function handleSub(){
    const newCount = count - 1;

    if(newCount < 0){
      return;
    }

    setCount(newCount)
  }

  return(
    <Container>
      <LeftButton
        onClick={handleSub}
        disabled={count === 0? true : false}
      >
        <FiChevronLeft />
      </LeftButton>
      <Text
        value={count}
        type="text"
        disabled
      />
        
      <RightButton
        onClick={handleAdd}
      >
        <FiChevronRight />
      </RightButton>
    </Container>
  );
}