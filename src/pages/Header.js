import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
       추억의 뽑기
      </TitleWrapper>
    </HeaderWrapper>
  )
}

export default Header


const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  width: auto;
  background-color: #black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 4px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 8px 12px 0px;
  border-bottom: solid 1px #ddd;
  z-index: 4;
`;

const TitleWrapper = styled.div`
    text-align: center;
    font-size: 48px;
`;
