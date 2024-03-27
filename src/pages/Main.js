import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import History from '../components/History'
import Board from '../components/Board'
    
const Main = ({num}) => {
    const [prize, setPrize] = useState([{}]) 
    const [drawingNum, setDrawingNum] = useState(num)

    const RandomPrizeNumber = useCallback((drawingNum)=>{
        let randomNumberPick = []
        while(true){
            if (randomNumberPick.length === 46){
                break
            }
            else{
                const random = Math.ceil(Math.random() * drawingNum)
                randomNumberPick.push(random)
                randomNumberPick= [...new Set(randomNumberPick)];
            }
        }
        let firstPrize = randomNumberPick.slice(0,1)
        let secondPrize = randomNumberPick.slice(1,3)
        let thirdPrize = randomNumberPick.slice(3,7)
        let fourthPrize = randomNumberPick.slice(7,17)
        let fifthPrize = randomNumberPick.slice(17,47)
    
        setPrize([
            { first: firstPrize},
            { second: secondPrize},
            { third: thirdPrize},
            { fourth: fourthPrize},
            { fifth: fifthPrize}
        ]);
    }, [drawingNum])
        
    
    
    return (
        <Container>
            <Board/>
            <History/>
            <ButtonWrapper>
                <RandomButton>
                    랜덤뽑기
                </RandomButton>
                <RestoreButton>
                    되돌리기
                </RestoreButton>
            </ButtonWrapper>
        </Container>
    )
}

export default Main

const Container = styled.div`
	display: block;
	position: relative;
	height: auto;
    min-height: 100vh;
	z-index: 1;
`;

const ButtonWrapper = styled.div`
    text-align: center;
`;

const RandomButton = styled.button`
    width: 10%;    
    height: 50px;
    background-color: #7f7f7f;
    font-size: 24px;
    border-radius: 8px;
    border-line: 1px solid #ffffff;
    margin: 0 16px;
`;
    
    const RestoreButton = styled.button`
    width: 10%;    
    height: 50px;
    background-color: #7f7f7f;
    font-size: 24px;
    border-radius: 8px;
    border-line: 1px solid #ffffff;
    margin: 0 16px;
`;
