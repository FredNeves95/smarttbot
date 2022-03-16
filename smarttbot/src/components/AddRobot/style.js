import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.097543);
    border-radius: 4px;
    height: 118px;
    padding: 24px 25.71px;
    margin: 0 24px 16px 20px;
    display: flex;
    align-items: center;

    #box-border{
        width: 75px;
        height: 70px;
        border: 1px solid #E3E2E3; 
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 25.29px 0 0;
        cursor: pointer;
    }

    #title{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        color: #343234;
    }

    #subtitle{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #B1B0B2;
        
        span{
            font-weight: 700;
            color: #00B39D;
        }
    }
`