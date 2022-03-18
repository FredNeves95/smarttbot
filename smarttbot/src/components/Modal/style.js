import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    #background{
        position: absolute;
        width: 100%;
        min-height: 100%;
        background: #00B39D;
        opacity: 0.7;
    }

    #form-box{
        z-index: 1;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.097543);
        border-radius: 4px;
        max-width: 442px;
        min-width: 280px;
        width: 100%;
        padding: 24px 34px;

        @media(max-width: 940px){
        margin: 16px;
        }

        #header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 32px;
            color: #343234;
            margin: 0 0 22px 0;

            img{
                cursor: pointer;
            }

            @media(max-width: 940px){
                margin: 0 0 12px 0;
             }
        }

        #title{
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 38px;
            color: #5F5D60;
        }

        #subtitle{
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: #888689;
            margin: 0 0 24px 0;

            @media(max-width: 940px){
                margin: 0 0 12px 0;
             }
        }

        .form{
            p{
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: #343234;
                margin: 0 0 8px 0;
            }

            input{
                width: 100%;
                height: 48px;
                background: #FFFFFF;
                border: 1px solid #E3E2E3;
                border-radius: 2px;
                padding: 14px;
                margin: 0 0 16px 0;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: #888689;    

                ::placeholder{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 20px;
                    color: #888689;       
                }

                @media(max-width: 940px){
                margin: 0 0 12px 0;
                }
            }

            #input-box{
                position: relative;
                input{
                    display: block;
                    padding: 0 0 0 28px;
                }
                #unit{
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    display: flex;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 20px;
                    color: #888689;                    
                }
            }
        }

        #strategy-text{
            margin: 24px 0;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 32px;
            display: flex;
            align-items: center;
            color: #343234;

            @media(max-width: 940px){
                margin: 12px 0;
                }
        }

        .strategy-not-selected{
            display: flex;
            align-items: center;
            width: 100%;
            height: 66px;
            border: 1px solid #E3E2E3;
            border-radius: 2px;
            margin: 0 0 8px 0;
            padding: 24px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 110%;
            color: #6A6C72;
            cursor: pointer;
        }

        .strategy-selected{
            display: flex;
            align-items: center;
            width: 100%;
            height: 66px;
            border: 1px solid #E3E2E3;
            border-radius: 2px;
            margin: 0 0 8px 0;
            padding: 24px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 110%;
            cursor: pointer;
            background: #FF4501;
            font-weight: 700;
            color: #FFFFFF;
        }
        #button{
            margin: 34px 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media(max-width: 940px){
                margin: 16px 0;
                }

            #cancel{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 87px;
                height: 31px;
                background: #FFFFFF;
                border: 1px solid #E3E2E3;
                border-radius: 2px;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 15px;
                color: #6A6C72;
                cursor: pointer;
            }

            #submit{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 90px;
                height: 29px;
                background: #00B39D;
                border-radius: 2px;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                color: #FFFFFF;
                cursor: pointer;
            }
        }
    }
`
