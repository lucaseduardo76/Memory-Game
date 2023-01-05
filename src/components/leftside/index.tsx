import { useEffect, useState } from 'react'
import styled from 'styled-components'
import reset from '../../assets/images/restart.svg'
import * as C from './style'
import { Clock } from './timer'


type Props = {
    ValidationTimer: any
    Movement: number
    restart: () => void
    clockScreen: string
}


export const Left = (data: Props) => {
    
    const restartFunction =() => data.restart()   

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
                <C.counter>{data.clockScreen}</C.counter>
            </div>

            <div>
                <C.assetsTitle>Movimentos</C.assetsTitle>
                <C.counter>{data.Movement}</C.counter>
            </div>

            <div>
                <C.restartButton onClick={restartFunction}>
                    <C.buttonText>
                        <p>Reiniciar</p>
                    </C.buttonText>
                </C.restartButton>
            </div>
        </C.container>
    )
}