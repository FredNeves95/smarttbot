import React, { useState, useEffect } from 'react'
import { Container } from './style'

const RobotCard = (props) => {
    const robot = props.robot

    const [status, setStatus] = useState(false)
    const [dailyBalance, setDailyBalance] = useState()

    useEffect(() => {
        if (robot.running === 1) {
            setStatus(true)
        } else {
            setStatus(false)
        }

        if (robot.daily_balance < 0) {
            setDailyBalance("Pessimista")
        } else {
            setDailyBalance("Otimista")
        }
    }, [props])

    console.log(robot);
    return (
        <Container>
            <div id='header'>

                <p id='title'>{robot.title}</p>
                <div id='status'>
                    {status ?
                        <>
                            <div id='running-icon'></div>  <p>Em execução</p>
                        </> :

                        <>
                            <div id='paused-icon'></div> <p>Pausado</p>
                        </>
                    }
                </div>

            </div>

            <div id='robot-id'>
                <p>{`#${robot.id}`}</p>
            </div>

            <div id='info-container'>
                <span className='info-box'>
                    {dailyBalance}
                </span>
                <span className='info-box'>
                    {robot.stock_codes}
                </span>
                <span className='info-box'>
                    {robot.type}
                </span>
            </div>
            <div id='market-data'>

                {robot.profit}
            </div>


        </Container>
    )
}

export default RobotCard