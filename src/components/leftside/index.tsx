import { useEffect, useState } from 'react'
import styled from 'styled-components'
import reset from '../../assets/images/restart.svg'
import * as C from './style'
import {Contador} from './timer'


type Props = {
    ValidationTimer: any
    Movement: number
    restart: () => void
}


export const Left = (data: Props) => {
    const [countTimer, setCountTimer] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [minute, setMinutes] = useState(0)
    const [windowTimer, setWindowTimer] = useState('')
    const [abc, setAbc] = useState('')
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCountTimer(countTimer + 1);
            setAbc(windowTimer)
        }, 1000)
    return () => clearInterval(timer);
    }, [countTimer])
    
    const a = (): string =>{
        setSeconds(countTimer)

        if(seconds > 59){
            setSeconds(0)
            setMinutes(minute + 1)
            setWindowTimer(`0${minute}:${seconds}`)
        }

        return windowTimer
    }

    const restartFunction =() =>{
        data.restart()
    }

    

    return (
        <C.container>
            <C.caixa>
                <C.logo>
                    <C.blue></C.blue>
                    <C.gray></C.gray>
                    <C.gray></C.gray>
                    <C.blue></C.blue>
                </C.logo >

                <div>
                    <C.title>DevMemory</C.title>
                    <C.subTitle>Created by Lucas Eduardo</C.subTitle>
                </div>
            </C.caixa>

            <div>
                <C.assetsTitle>Tempo</C.assetsTitle>
                <C.counter>{abc}</C.counter>
            </div>

            <div>
                <C.assetsTitle>Movimentos</C.assetsTitle>
                <C.counter>{data.Movement}</C.counter>
            </div>

            <div>
                <C.restartButton onClick={restartFunction}>
                    <C.containerArrow>
                        <C.imgArrow src={reset} alt="" />
                    </C.containerArrow>
                    <C.buttonText>
                        <p>Reiniciar</p>
                    </C.buttonText>
                </C.restartButton>
            </div>
        </C.container>
    )
}