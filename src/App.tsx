import styled from 'styled-components'
import * as C from './styleApp'
import { engine } from './list'
import { Left } from './components/leftside'
import { Right } from './components/rightside'
import { useEffect, useState } from 'react'



function App() {
  const [FinalCards, setCards] = useState(engine());
  const [firstCard, setFirstCard] = useState(13);
  const [secondCard, setSecondCard] = useState(13);
  const [verify, setVerify] = useState(true);
  const [movement, setMovement] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [clock, setClock] = useState('00:00');

  let timer: any;

  useEffect(() => {
     timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds >= 59) {
        setSeconds(0);
        setMinutes(minute + 1);
      };
      const formatHour = (num: number) => num >= 0 && num < 10 ? `0${num}` : `${num}`;

      let PutHourTogether = `${formatHour(minute)}:${formatHour(seconds)}`;
      setClock(PutHourTogether);

    }, 1000)    
    return () => clearInterval(timer);
  }, [seconds])

  useEffect(()  => {
    setTimeout(() => {
        if (firstCard != 13 && secondCard != 13) {   
          CheckCards();       
          setFirstCard(13);
          setSecondCard(13);
        }
           
    }, 350);
  }, [retId]);


  function retId(handleId: number): void{

    if (verify == true) {
      setFirstCard(handleId);
      setVerify(false);
    } else {
      setSecondCard(handleId);
      setVerify(true);
    }

    TurnCard(handleId);

  }
  
  


  const TurnCard = (Position: number) => {
    const FinalCardsSup = FinalCards;

    if (!FinalCardsSup[Position].active) {
      FinalCardsSup[Position].active = true;
    }
    setCards(FinalCardsSup);
  }

 

  const CheckCards = () => {
    
    const AllCardsOpen = (SuportArray: any): boolean =>{      
      let checking = true;

      for (let n in SuportArray) {
        if (SuportArray[n].alwaysActive == false) {
          checking = false;
        };
      };

      return checking

    }

    if (FinalCards[firstCard] && FinalCards[secondCard]) {

      if (firstCard != secondCard) {
        const FinalCardsSup = FinalCards;
        if(!AllCardsOpen(FinalCardsSup)){
          setMovement(movement + 1);
        }

        if (FinalCards[firstCard].id == FinalCards[secondCard].id) {          
          FinalCardsSup[firstCard].alwaysActive = true;
          FinalCardsSup[secondCard].alwaysActive = true;          

          if (AllCardsOpen(FinalCardsSup)) {
            clearInterval(timer);
          };
          

        } else {
            FinalCardsSup[firstCard].active = false;
            FinalCardsSup[secondCard].active = false;                
        };
      };
    };
  };

  const Restart = () => {
    setCards([]);
    setFirstCard(13);
    setSecondCard(13);
    setVerify(true);
    setMovement(0);
    const FinalCardsSup = FinalCards;
    for (let n in FinalCards) {
      FinalCardsSup[n].active = false;
      FinalCardsSup[n].alwaysActive = false;
    }
    setCards(FinalCardsSup);
    setCards(engine());

    setSeconds(0);
    setMinutes(0);
    setClock('00:00');
  }



  const Render = () => {
    return (
      <C.mainContainer>
        <div>
          <Left
            Movement={movement}
            ValidationTimer={FinalCards}
            restart={Restart}
            clockScreen={clock}
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
              parDone={item.alwaysActive}
            />
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
