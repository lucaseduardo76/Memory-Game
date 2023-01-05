import styled from "styled-components";

export const mainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;    
    margin-top: 8%;

    @media(max-width: 750px){
        flex-direction: column;
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
     @media(max-width: 750px){
        grid-template-columns: 100px 100px 100px;
    }
`
