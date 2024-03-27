import React from 'react'
import styled from 'styled-components'

const Drawing = ({num, onClick}) => {
  return (
    <DrawingButton onClick={() => onClick(num)}>
        {num}
    </DrawingButton>
  )
}

export default Drawing

const DrawingButton = styled.button`
    width: 70px;
    height: 70px;
    text-align: center;
`;