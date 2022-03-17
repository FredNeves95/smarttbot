import React from 'react'

const RobotCard = (props) => {
    const robot = props.robot
    return (
        <div>
            {robot.title}
            {robot.id}
            {robot.running}
            {robot.stock_codes}
            {robot.strategy}
            {robot.profit}
            {robot.daily_balance}
        </div>
    )
}

export default RobotCard