import styled from 'styled-components'
import * as C from './styleApp'
import { engine } from './list'
import { Left } from './components/leftside'
import { Right } from './components/rightside'
import { useEffect, useState } from 'react'



function App() {
  const [FinalCards, setCards] = useState(engine())
  const [firstCard, setFirstCard] = useState(13)
  const [secondCard, setSecondCard] = useState(13)
  const [verify, setVerify] = useState(true)
  const [movement, setMovement] = useState(0)






  const retId = (handleId: number): void => {

    if (verify == true) {
      setFirstCard(handleId)
      setVerify(false)

    } else {
      setSecondCard(handleId)
      setVerify(true)
    }

    TurnCard(handleId)
    CheckCards()


  }

  const TurnCard = (Position: number) => {
    const FinalCardsSup = FinalCards

    if (!FinalCardsSup[Position].active) {
      FinalCardsSup[Position].active = true
    }
    setCards(FinalCardsSup)
  }

  const CheckCards = () => {
    if (FinalCards[firstCard] && FinalCards[secondCard]) {
      if (firstCard != secondCard) {
        if (FinalCards[firstCard].id == FinalCards[secondCard].id) {
          const FinalCardsSup = FinalCards
          FinalCardsSup[firstCard].alwaysActive = true
          FinalCardsSup[secondCard].alwaysActive = true
          setMovement(movement + 1)

        } else {
          const FinalCardsSup = FinalCards
          FinalCardsSup[firstCard].active = false
          FinalCardsSup[secondCard].active = false
          setMovement(movement + 1)

        }
      }else{
        const FinalCardsSup = FinalCards
        FinalCardsSup[firstCard].active = false
        FinalCardsSup[secondCard].active = false

      }
    }


  }

  const Restart = ()=>{
    setCards([])
    setFirstCard(13)
    setSecondCard(13)
    setVerify(true)
    setMovement(0)
    const FinalCardsSup = FinalCards
    for(let n in FinalCards){      
      FinalCardsSup[n].active = false
      FinalCardsSup[n].alwaysActive = false
    }
    setCards(FinalCardsSup)
    setCards(engine())
    
  }
  

  useEffect(() => {
    setTimeout(() => {
      if (firstCard != 13 && secondCard != 13) {
        CheckCards()
        setFirstCard(13)
        setSecondCard(13)
      }
    }, 500)
  }, [retId])



  const Render = () => {
    return (
      <C.mainContainer>
        <div>
          <Left
            Movement={movement}
            ValidationTimer={FinalCards}
            restart={Restart}
          />
        </div>

        <C.Container>
          {FinalCards.map((item, key) => (
            <Right
              photo={item.image}
              key={key}
              active={item.active}
              retIdComp={retId}
              indice={item.position}
              array={FinalCards}
              parDone={item.alwaysActive} />
          ))}

        </C.Container>
      </C.mainContainer>

    )
  }


  return (
    <Render />
  )
}

export default App
