import styled from "styled-components";

export const Container = styled.div`
    width: 330px;
    height: 274px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.097543);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 17px 25.71px;

   

    @media(max-width: 740px){
        width: 100%;
    }
   
    #status{
        width: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #888689;
        align-self: start;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .action-box{
            margin: 0 4.29px 0 0; 
            padding: 2px 8px 2px 6px;
            background: #FFFFFF;
            border: 1px solid #E3E2E3;
            box-sizing: border-box;
            border-radius: 2px;
            cursor: pointer;
        }

        .status-box{
            display: flex;
            align-items: center;
        }

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

    #title{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 32px;
        color: #343234;
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

    #market-data{
        width: 279.27px;
        height: 64px;
        border: 1px solid #E3E2E3;
        border-radius: 2px;
        margin: 18px 0 15px 0;
        padding: 13px 43.27px 13px 16.07px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        #last-paper-position{
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 38px;
            text-align: center;
            color: #5F5D60;
        }

        #market-recomendations{
            #paper{
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                color: #959AA2;
            }

            #recomendation{
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: #343234;
            }
        }

        #market-values{
            #paper-value{
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                text-align: right;
                color: #B1B0B2;
            }

            #profit{
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                text-align: right;

                #value-won{
                    display: flex;
                    align-items: center;
                    color: #00B39D;

                    #arrow-up {
                        width: 0; 
                        height: 0; 
                        border-left: 4px solid transparent;
                        border-right: 4px solid transparent;
                        border-bottom: 4px solid #00B39D;
                        margin: 0 4px 0 0;
                    }
                }

                #value-lost{
                    display: flex;
                    align-items: center;
                    color: #FF4501;

                    #arrow-down {
                        width: 0; 
                        height: 0; 
                        border-left: 4px solid transparent;
                        border-right: 4px solid transparent;     
                        border-top: 4px solid #FF4501;
                        margin: 0 4px 0 0;
                        }

                }
            }
        }
    }

    #daily-data{
        display: flex;
        align-items: center;
        justify-content: space-between;

        #daily-value-container{
            #title-hide{
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                display: flex;
                align-items: center;
                color: #888689;

                img{
                    margin: 0 0 0 5px;
                    transform: scaleY(-1);
                    cursor: pointer;
                }
            }

            #title-show{
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                display: flex;
                align-items: center;
                color: #888689;

                img{
                    margin: 0 0 0 5px;
                    cursor: pointer;
                }
            }

            #daily-value-profit{
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 20px;
                color: #00B39D;
            }

            #daily-value-loss{
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 20px;
                color: #FF4501;
            }

            #hidden{
                height: 20px;
            }
        }

        #daily-trades{
            text-align: right;

            #title{
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: #888689;
            }

            #value{
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 20px;
                text-align: right;
                color: #5F5D60;
            }
        }
    }
` 