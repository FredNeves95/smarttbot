import React, { useState } from 'react'
import { Container } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setShow } from '../../redux/reducers/modalReducer'
import { setAvailable } from '../../redux/reducers/availableRobots'
import x from '../../images/x.svg'
import api from '../../services/api'

const Modal = () => {
    const dispatch = useDispatch()
    const availableRobots = useSelector((state) => state.availableRobots.available)

    const [raptor, setRaptor] = useState(false)
    const [tangram, setTangram] = useState(false)
    const [body, setBody] = useState({
        title: '',
        mode: 0,
        strategy_id: '',
        initial_capital: '',
        simulation: 0,
        broker_id: 0
    })

    const handleChangeBody = (event) => {
        setBody({ ...body, [event.target.name]: event.target.value })
    }

    const selectRaptor = () => {
        setRaptor(true)
        setTangram(false)
        setBody({ ...body, strategy_id: 1 })
    }

    const selectTangram = () => {
        setTangram(true)
        setRaptor(false)
        setBody({ ...body, strategy_id: 2 })
    }

    const closeModal = () => {
        dispatch(setShow(false))
    }

    const submitForm = () => {
        if (body.title === '' || body.initial_capital === '' || body.strategy_id === '') {
            alert('Preencha todas as informações necessárias.')
        } else if (body.initial_capital < 0) {
            alert('Digite um capital inicial do robô válido.')
        } else {
            api.post('/robot', body)
                .then((res) => {
                    alert('Robô adicionado com sucesso!')
                    dispatch(setAvailable(availableRobots - 1))
                    closeModal()
                })
                .catch((err) => {
                    alert('Oops! Ocorreu algum erro.')
                })
        }

    }

    return (
        <Container data-testid='openedModal'>
            <div id='background'></div>

            <div id='form-box'>

                <div id='header'>
                    <p>Adicionar novo Robô</p>
                    <img src={x} alt='Fechar modal' onClick={closeModal} data-testid='closeModal' />
                </div>

                <p id='title'>Vamos criar seu robô</p>

                <p id='subtitle'>Preencha as informações abaixo:</p>

                <div className='form'>
                    <p>Nome do produto</p>
                    <input placeholder='Nome do produto' name='title' value={body.title} onChange={handleChangeBody} />
                </div>

                <div className='form'>
                    <p>Capital inicial do robô</p>
                    <div id='input-box'>
                        <input type='number' name='initial_capital' value={body.initial_capital} onChange={handleChangeBody} data-testid='initialCapital' />
                        <span id='unit'>R$</span>
                    </div>
                </div>

                <p id='strategy-text'>Selecione uma das estratégias abaixo</p>

                {
                    tangram ?
                        <div className='strategy-selected'>
                            <p>Tangram</p>
                        </div> :

                        <div className='strategy-not-selected' onClick={selectTangram}>
                            <p>Tangram</p>
                        </div>
                }

                {
                    raptor ?
                        <div className='strategy-selected'>
                            <p>Raptor</p>
                        </div> :

                        <div className='strategy-not-selected' onClick={selectRaptor}>
                            <p>Raptor</p>
                        </div>
                }


                <div id='button'>
                    <div id='cancel' onClick={closeModal}>
                        <p>Cancelar</p>
                    </div>

                    <div id='submit' onClick={submitForm}>
                        <p>Criar robô</p>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default Modal