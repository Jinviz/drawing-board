import React from 'react'
import styled from 'styled-components'
import Drawing from './Drawing';



const Board = () => {

	const renderDrawing = (i) => {
		let boardRows = [];
		for(let n=0; n < i/10; n++){
			let drawings = [] 
			for(let m=0; m < 10; n++){
				drawings.push(<Drawing value={n*10 + m}  />)
			}
			boardRows.push(<BoardRow>{drawings}</BoardRow>)
		}
		return boardRows
	}
	
	return (
		<BoardWrapper>
			{renderDrawing(100)}
        </BoardWrapper>
	)
}

export default Board

const BoardRow = styled.div`
	::after{
		clear: both;
        content: "";
        display: table;
	}
`;

const BoardWrapper = styled.div`
	border: 1px solid rgba(255,255,255,0.1);
	box-shadow: rgba(0,0,0,0.19);
	border-radius: 9px;
	overflow: hidden;
`;

