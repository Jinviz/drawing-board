import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Start = () => {
    const navigate = useNavigate();


    return (
        <StartContainer>
            <StartButton onClick={() => navigate('main')}>시작하기</StartButton>
        
            <AwardWrapper>
                1등: 테슬라 x 1<br/>
                2등: 맥북프로 x 2<br/>
                3등: 아이패드 x 4<br/>
                4등: 문상5만원 x 10<br/>
                5등: 추파춥스 x 30 <br/>
                꽝: Nothing <br/> 
            </AwardWrapper>
        </StartContainer>
    )
}
export default Start

const StartContainer = styled.div`
    position: relative;
    display: block;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const AwardWrapper = styled.div`
    font-size: 12px;
    text-align: center;    
`; 

const StartButton = styled.button`
    width: 30px;
    height: 30px;
    background-color:
    border-radius: 8px;
    border: solid 1px #ffffff
`;
