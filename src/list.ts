import { useState } from 'react'
import androidSvg from './assets/images/android.svg'
import caminhaoSvg from './assets/images/caminhao.svg'
import disneySvg from './assets/images/disney.svg'
import estrelaSvg from './assets/images/estrela.svg'
import gasolinaSvg from './assets/images/gasolina.svg'
import motoSvg from './assets/images/moto.svg'

type photos = {
    id: number,
    position: number,
    image: string
    active: boolean
    alwaysActive: boolean
}

export const cards: photos[] = [
    {
        position: 1,
        id: 1,
        image: androidSvg,
        active: false,
        alwaysActive: false
    },
    {
        position: 2,
        id: 2,
        image: caminhaoSvg,
        active: false,
        alwaysActive: false
    },
    {
        position: 3,
        id: 3,
        image: disneySvg,
        active: false,
        alwaysActive: false
    },
    {
        position: 4,
        id: 4,
        image: estrelaSvg,
        active: false,
        alwaysActive: false
    },

    {
        position: 5,
        id: 5,
        image: gasolinaSvg,
        active: false,
        alwaysActive: false
    },

    {
        position: 6,
        id: 6,
        image: motoSvg,
        active: false,
        alwaysActive: false
    },
    {
        position: 7,
        id: 1,
        image: androidSvg,
        active: false,
        alwaysActive: false
    },
    {
        position: 8,
        id: 2,
        image: caminhaoSvg,
        active: false,
        alwaysActive: false
    },
    {
        position: 9,
        id: 3,
        image: disneySvg,
        active: false,
        alwaysActive: false
    },
    {
        position: 10,
        id: 4,
        image: estrelaSvg,
        active: false,
        alwaysActive: false
    },

    {
        position: 11,
        id: 5,
        image: gasolinaSvg,
        active: false,
        alwaysActive: false
    },

    {
        position: 12,
        id: 6,
        image: motoSvg,
        active: false,
        alwaysActive: false
    },
    

]

export const engine = () => {
    const cardsInGame = cards;
    for (let i in cards) {
        if (cardsInGame.length < 12) {
            cardsInGame.push(cards[i])
        }
    }

    const randomCards = []
    let valid: boolean = false

    do {
        const randomNumber = Math.trunc(Math.random() * 12)
        let exist: boolean = false
        randomCards.filter((item) => {
            if (item.position == cardsInGame[randomNumber].position) {
                exist = true
            }
        })

        if (exist == false) {
            randomCards.push(cardsInGame[randomNumber])
        }

        if (randomCards.length > 11) {
            valid = true
        }

    } while (valid == false)



    return randomCards;
}

