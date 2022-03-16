import React from 'react'

const RobotCard = (props) => {

    return (
        <div>
            {props.robot.title}
            {props.robot.id}
        </div>
    )
}

export default RobotCard