import { useState } from 'react'
import eagleImg from '../../assets/images/eagle.png'
import * as C from './style'
import './style.css'


type Props = {
    photo: string;
    indice: number;
    active: boolean;
    retIdComp: (txt: number) => void;
    array: any

}
export const Right = (data: Props) => {
    const bgColor: string = "rgb(192, 193, 204);"
    const bgColorActive: string = "rgb(56, 150, 116)"
    const [validation, setValidation] = useState<boolean>(data.active)

    const Color: string = validation ? bgColorActive : bgColor;
    const photo: string = validation ? data.photo : eagleImg;

    const handleClick = () => {
        if (validation == true) {
            setValidation(false)
        } else {
            setValidation(true)
        }
        let positionArray: number[] = []
        
        for(let n in data.array){
            positionArray.push(data.array[n].position)
        }

        data.retIdComp(positionArray.indexOf(data.indice))
        console.log(positionArray)
    }

    

    return (
        <div >
            <C.Card onClick={handleClick} Bg={Color}>
                <C.cardImg src={photo} alt="" />
            </C.Card>
        </div>
    )
}