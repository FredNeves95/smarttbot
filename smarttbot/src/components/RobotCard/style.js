import styled from "styled-components";

export const Container = styled.div`
    width: 330px;
    height: 230px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.097543);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 17px 25.71px;

    #header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        #title{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 32px;
            color: #343234;
        }

        #status{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #888689;
            align-self: start;
            display: flex;
            align-items: center;

            #running-icon{
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #15B8A1;
                margin: 0 7.43px 0 0;
            }

            #paused-icon{
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #FF4501;
                margin: 0 7.43px 0 0;
            }
        }
    }

    #robot-id{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #B1B0B2;
    }

    #info-container{
        .info-box{
            margin: 0 4.29px 0 0; 
            padding: 2px 8px 2px 6px;
            background: #FFFFFF;
            border: 1px solid #E3E2E3;
            box-sizing: border-box;
            border-radius: 2px;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #B1B0B2;
        }
    }

` 