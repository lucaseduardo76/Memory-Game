import { useState, useEffect } from "react"


export const Clock = ()=>{
    const [countTimer, setCountTimer] = useState(0)
    const [minute, setMinutes] = useState(0)
    const  [clock, setClock] = useState('00:00')
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCountTimer(countTimer + 1);            
            if(countTimer >= 59){                
                setCountTimer(0)
                setMinutes(minute + 1)                
            }

            
            let PutHourTogether = `${formatHour(minute)}:${formatHour(countTimer)}`

            setClock(PutHourTogether)

        }, 1000)
    return () => clearInterval(timer);
    }, [countTimer])
    
    const formatHour = (num: number) => num >=0 && num < 10 ? `0${num}` : `${num}`

    return clock
}