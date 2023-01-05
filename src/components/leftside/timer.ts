import { useState } from "react"

export const Contador = () =>{
    const [timer, setTimer] = useState('')
    let s = 0
    let m = 0
    setInterval(() => {
        s += 1
        if(s > 59){
            s = 0
            m += 1
        }
        let hour = `0${m}:${s}`
        console.log(hour)
        setTimer(hour)


    }, 1000)

    return timer
}