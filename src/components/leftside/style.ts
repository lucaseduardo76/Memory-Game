import styled from "styled-components";

export const container = styled.div`
    height: 380px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
`

export const caixa = styled.div`
    display: flex;
    align-items: flex-start;
`

export const logo = styled.div`
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    width: 23px;
    margin-top: 8px;
    margin-right: 10px;
`
export const blue = styled.div`
    background-color: #00f;
    width: 11px;
    height: 11px;
`
export const gray = styled.div`
    background-color: #999;
    width: 11px;
    height: 11px
`

export const title = styled.h1`
    letter-spacing:1px;
    font-size: 30px;
    color: rgb(16, 16, 71);
`

export const subTitle = styled.p`    
    font-size: 10px;
    color: #999;
    font-weight: 700;
`
export const assetsTitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
    color: #999;
`

export const counter = styled.p`    
    font-size: 35px;
    font-weight: 900;
`

export const restartButton = styled.button`
    background-color: rgb(28, 74, 250);
    border: 0;
    width: 180px;
    border-radius: 10px;
    display: flex;
    color: aliceblue;  
    overflow: hidden;  
    cursor: pointer;
    transition: all .5s;
    
    &:hover{ 
        background-color: rgb(28, 74, 180);
    }
`

export const containerArrow = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-right: 0.5px #888 solid;
`
export const imgArrow = styled.img`
    width: 20px;
`

export const buttonText = styled.p`
    width: calc(100% - 45.5px);
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
`
