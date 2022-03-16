import React from 'react'
import { Container } from './style'
import addIcon from '../../images/addicon.svg'
import { useDispatch } from 'react-redux'
import { setShow } from '../../redux/reducers/modalReducer'

const AddRobot = () => {
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(setShow(true))
    }

    return (
        <Container>
            <div id='box-border' onClick={openModal}>
                <img src={addIcon} alt='Botão de adicionar' />
            </div>
            <div>
                <p id='title'>Adicionar novo Robô</p>
                <p id='subtitle'>Você possui <span>02 Robôs</span> disponíveis</p>
            </div>
        </Container>
    )
}

export default AddRobot