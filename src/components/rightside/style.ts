import styled from "styled-components"


type CardType = {
    Bg: string;
}

export const Card = styled.div<CardType>`
    background-color: ${(item) => item.Bg};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border-radius: 10px;
    box-shadow:  5px 5px 15px;
    cursor: pointer;
    transition: all 2s;

    &:hover{
        background-color: rgb(222, 223, 255);
    }
`

export const cardImg = styled.img`
    height: 37px;
`