import React, { useState, useEffect } from 'react'
import { Container } from './style'
import shape from '../../images/shape.svg'
import { Skeleton } from '@mui/material'
import api from '../../services/api'

const RobotCard = (props) => {
    const robot = props.robot

    const [status, setStatus] = useState(false)
    const [simulation, setSimulation] = useState()
    const [todayTransactions, setTodayTransactions] = useState([])
    const [todayTransactionsCount, setTodayTransactionsCount] = useState(0)
    const [showBalance, setShowBalance] = useState(false)

    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const currentDate = year + '-' + month + '-' + day;

    useEffect(() => {
        if (robot.running === 1) {
            setStatus(true)
        } else {
            setStatus(false)
        }

        if (robot.simulation === 0) {
            setSimulation("Pessimista")
        } else {
            setSimulation("Otimista")
        }
    }, [props])


    const filterDayTrades = () => {
        if (robot) {
            robot.movimentations.filter((item) => {
                if (item.date.includes(currentDate)) {
                    let array = todayTransactions
                    let newArray = array.push(item)
                    return setTodayTransactions(newArray)
                };
            })
        }
    }

    useEffect(() => {
        filterDayTrades()
        setTodayTransactionsCount(todayTransactions.length)
    }, [robot])

    const handleClickBalanceView = () => {
        setShowBalance(!showBalance)
    }

    // const startRobot = () => {
    //     api.put(`/robot/${robot.id}/start`)
    // }

    // const stopRobot = () => {
    //     api.put(`/robot/${robot.id}/stop`)
    // }

    return (
        <Container>

            <div id='status'>
                {status ?
                    <>
                        <div className='action-box' /*onClick={stopRobot}*/><p>Pausar</p></div>
                        <div className='status-box'>
                            <div id='running-icon'></div>
                            <p>Em execução</p>
                        </div>
                    </> :

                    <>
                        <div className='action-box' /*onClick={startRobot}*/><p>Executar</p></div>
                        <div className='status-box'>
                            <div id='paused-icon'></div>
                            <p>Pausado</p>
                        </div>

                    </>
                }
            </div>

            <p id='title'>{robot.title}</p>

            <p id='robot-id'>{`#${robot.id}`}</p>


            <div id='info-container'>
                <span className='info-box'>
                    {simulation}
                </span>
                <span className='info-box'>
                    {robot.stock_codes}
                </span>
                <span className='info-box'>
                    {robot.type}
                </span>
            </div>
            <div id='market-data'>
                <p id='last-paper-position'>
                    {robot.last_paper ?
                        robot.last_paper.position :
                        'N/A'
                    }
                </p>
                <div id='market-recomendations'>
                    <p id='paper'>
                        {robot.last_paper ?
                            robot.last_paper.paper :
                            ''
                        }
                    </p>
                    <p id='recomendation'>
                        {robot.last_paper ?
                            'Compra'
                            :
                            ''
                        }
                    </p>
                </div>
                <div id='market-values'>
                    <p id='paper-value'>
                        {robot.last_paper ?
                            robot.last_paper.paper_value.toFixed(2) :
                            ''
                        }
                    </p>
                    <div id='profit'>
                        {robot.last_paper ?
                            robot.last_paper.profit >= 0 ?
                                <div id='value-won'><div id="arrow-up"></div> <p>R$ {robot.last_paper.profit.toFixed(2)}</p></div> :
                                <div id='value-lost'><div id="arrow-down"></div> <p>R$ {robot.last_paper.profit.toFixed(2)}</p></div>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>

            <div id='daily-data'>
                <div id='daily-value-container'>
                    {
                        showBalance ?
                            <div id='title-hide'>
                                <p>Saldo Diário</p>
                                <img src={shape} alt='Clique para visualizar saldo' onClick={handleClickBalanceView} />
                            </div>
                            :
                            <div id='title-show'>
                                <p>Saldo Diário</p>
                                <img src={shape} alt='Clique para visualizar saldo' onClick={handleClickBalanceView} />
                            </div>
                    }


                    {
                        showBalance ?
                            robot.daily_balance >= 0 ?
                                <p id='daily-value-profit'>R$ {robot.daily_balance.toFixed(2)}</p> :
                                <p id='daily-value-loss'>R$ {robot.daily_balance.toFixed(2)}</p>
                            :
                            <div id='hidden'></div>
                    }

                </div>

                <div id='daily-trades'>
                    <p id='title'>Trades no dia</p>
                    <p id='value'>{
                        todayTransactions ?
                            todayTransactionsCount :
                            <Skeleton />
                    }</p>
                </div>
            </div>


        </Container>
    )
}

export default RobotCard