import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
    justify-content: space-between;
    gap: 16px 25px;
    width: 100%;
    margin: 0 0 24px 0;

    @media(max-width: 1100px){
        justify-content: center;
    }
`