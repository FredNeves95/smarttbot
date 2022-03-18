import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
    justify-content: space-between;
    gap: 16px 25px;
    width: 100%;
    margin: 0 0 24px 0;

    @media(min-width: 1800px){
        justify-content: start;
    }

    @media(max-width: 1448px) and (min-width: 1100px){
        justify-content: start;
    }

    @media(max-width: 740px){
        justify-content: center;
    }
`