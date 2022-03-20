import React from 'react'
import { Container } from './style'
import addIcon from '../../images/addicon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setShow } from '../../redux/reducers/modalReducer'

const AddRobot = () => {
    const dispatch = useDispatch()
    const availableRobots = useSelector((state) => state.availableRobots.available)

    const openModal = () => {
        if (availableRobots <= 0) {
            alert('Oops! Você já atingiu o limite de robôs disponíveis.')
        } else {
            dispatch(setShow(true))
        }
    }

    return (
        <Container>
            <div id='box-border' onClick={openModal} data-testid='openModal'>
                <img src={addIcon} alt='Botão de adicionar' />
            </div>
            <div>
                <p id='title'>Adicionar novo Robô</p>
                <p id='subtitle'>Você possui
                    <span data-testid='availableRobots'>{availableRobots > 1 ?
                        ` 0${availableRobots} Robôs` :
                        ` 0${availableRobots} Robô`
                    } </span>
                    disponíveis</p>
            </div>
        </Container>
    )
}

export default AddRobot