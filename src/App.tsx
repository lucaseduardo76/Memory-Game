import styled from 'styled-components'
import * as C from './styleApp'
import { engine } from './list'
import { Left } from './components/leftside'
import { Right } from './components/rightside'
import { useState } from 'react'


/*<Right photo={cards[0].image} />*/
function App() {
  const [FinalCards, setCards] = useState(engine())
  const [firstCard, setFirstCard] = useState(13)
  const [secondCard, setSecondCard] = useState(13)
  const [verify, serVerify] = useState(true)

  const retId = (handleId: number): void => {
    
    if(verify == true){
      setFirstCard(handleId)
      serVerify(false)
    }else{
      setSecondCard(handleId)
      serVerify(true)
    }

    if(firstCard == 13 && secondCard == 13){
      console.log(FinalCards)

    }else{
      for(let n in FinalCards){
        FinalCards[n].active = false
        console.log(FinalCards)
      }
      const FinalCardsSup = FinalCards

        setCards(FinalCardsSup)
    }

  }


  return (
    <C.mainContainer>
      <div>
        <Left />
      </div>

      <C.Container>
        {FinalCards.map((item, key) => (
          <Right
            photo={item.image}
            key={key}
            active={item.active}
            retIdComp={retId}
            indice={item.position}
            array={FinalCards} />
        ))}

        {firstCard}
        {secondCard}
      </C.Container>
    </C.mainContainer>
  )
}

export default App
