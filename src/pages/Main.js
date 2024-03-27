import React, { useCallback, useState } from 'react'
    
const Main = () => {
    const [prize, setPrize] = useState([{}]) 

    const RandomPrizeNumber = useCallback((number)=>{
        let randomNumberPick = []
        while(true){
            if (randomNumberPick.length === 46){
                break
            }
            else{
                const random = Math.ceil(Math.random() * number)
                randomNumberPick.push(random)
                randomNumberPick= [...new Set(randomNumberPick)];
            }
            firstPrize = randomNumberPick.slice(0,1)
            secondPrize = randomNumberPick.slice(1,3)
            thirdPrize = randomNumberPick.slice(3,7)
            fourthPrize = randomNumberPick.slice(7,17)
            fifthPrize = randomNumberPick.slice(17,47)

            setPrize([
                { first: firstPrize},
                { second: secondPrize},
                { third: thirdPrize},
                { fourth: fourthPrize},
                { fifth: fifthPrize}
              ]);
        
        }}, [number])
        
        setPrize


    }
    
    return (
        <div>

        </div>
    )
}

export default Main
