import { useState } from 'react'
import eagleImg from '../../assets/images/eagle.png'
import { cards } from '../../list'
import * as C from './style'



type Props = {
    photo: string;
    indice: number;
    active: boolean;
    retIdComp: (txt: number) => void;
    array: any
    parDone: boolean

}
export const Right = (data: Props) => {
    const bgColor: string = "rgb(192, 193, 204);"
    const bgColorActive: string = "rgb(56, 150, 116)"
    const [validation, setValidation] = useState<boolean>(data.active)

    const Color: string = validation || data.parDone? bgColorActive : bgColor;
    const photo: string = validation || data.parDone ? data.photo : eagleImg;

    const handleClick = () => {

        let positionArray: number[] = []

        for (let n in data.array) {
            positionArray.push(data.array[n].position)
        }

        data.retIdComp(positionArray.indexOf(data.indice))
    }



    return (
        <div >
            <C.Card onClick={handleClick} Bg={Color}>
                <C.cardImg src={photo} alt="" />
            </C.Card>
        </div>
    )
}