import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Drawing = ({num, onClick, choiced}) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if(choiced && choiced.includes(num)){
      setClicked(true);
    }  
    else{
      setClicked(false);
    }
  }, [choiced,num])
  

  return (
    <DrawingButton 
      onClick={() => onClick(num)}
      disabled={clicked}
      isClicked={clicked}
    >
        {num}
    </DrawingButton>
  )
}

export default Drawing

const DrawingButton = styled.button`
    width: 70px;
    height: 70px;
    text-align: center;

    background-color: ${props => (props.isClicked ? 'black' : 'initial')};
    color: ${props => (props.isClicked ? 'white' : 'initial')};
    cursor: ${props => (props.isClicked ? 'not-allowed' : 'pointer')};
`;