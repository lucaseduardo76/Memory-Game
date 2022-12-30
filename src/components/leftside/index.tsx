import styled from 'styled-components'
import reset from '../../assets/images/restart.svg'
import * as C from './style'
export const Left = () => {
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
                <C.counter>00:00</C.counter>
            </div>

            <div>
                <C.assetsTitle>Movimentos</C.assetsTitle>
                <C.counter>0</C.counter>
            </div>

            <div>
                <C.restartButton>
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