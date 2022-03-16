import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.097543);
    border-radius: 4px;
    min-height: 252px;
    padding: 16px 25.71px;
    margin: 0 0 16px 0;

    #title{
        margin: 0 0 24px 0;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        color: #343234;
    }

    #general-data{
        width: 100%;
        display: flex;
        justify-content: space-between;

        .general-values{
            display: flex;
            flex-direction: column;


            #profit{
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 20px;
                color: #00B39D;
            }

            #loss{
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 20px;
                color: #FF4501;
            }

            #transactions-value{
                align-self: end;
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 20px;
                color: #343234;
            }
        }

    }

    .subtitle{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;  
        color: #888689; 
    }

    #horizontal-line{
        margin: 16px 0;

        hr{
            background: #E3E2E3;
            border: 1px solid #E3E2E3;
        }           
    }

    #summary-container{
        width: 100%;
        height: 102px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 12px;

        @media(max-width: 940px){
        flex-wrap: nowrap;
        height: auto;
    }
    }
`

export const Summary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;

    @media(max-width: 940px){
        width: 100%;
    }
    #name{
        background: #00B39D;
        border-radius: 2px;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        color: #FFFFFF;
        padding: 3px 6px;
    }

    hr{
        width: 60%;
        border: none;
        border-top: 1px dashed #C5C5C5;
    }

    #transactions{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        text-align: right;
        color: #343234;

        span{
            font-weight: 400;
            color: #888689;
        }
    }
`