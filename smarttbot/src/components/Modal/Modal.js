import React, { useState } from 'react'
import { Container } from './style'
import { useDispatch } from 'react-redux'
import { setShow } from '../../redux/reducers/modalReducer'
import x from '../../images/x.svg'

const Modal = () => {
    const dispatch = useDispatch()
    const [tangram, setTangram] = useState(false)
    const [priceAction, setPriceAction] = useState(false)


    const closeModal = () => {
        dispatch(setShow(false))
    }

    const selectTangram = () => {
        setTangram(true)
        setPriceAction(false)
    }

    const selectPriceAction = () => {
        setPriceAction(true)
        setTangram(false)
    }

    return (
        <Container>
            <div id='background'></div>

            <div id='form-box'>

                <div id='header'>
                    <p>Adicionar novo Robô</p>
                    <img src={x} alt='Fechar modal' onClick={closeModal} />
                </div>

                <p id='title'>Vamos criar seu robô</p>

                <p id='subtitle'>Preencha as informações abaixo:</p>

                <div className='form'>
                    <p>Nome do produto</p>
                    <input placeholder='Nome do produto' />
                </div>

                <div className='form'>
                    <p>Capital inicial do robô</p>
                    <input placeholder='R$' />
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
                    priceAction ?
                        <div className='strategy-selected'>
                            <p>Price Action</p>
                        </div> :

                        <div className='strategy-not-selected' onClick={selectPriceAction}>
                            <p>Price Action</p>
                        </div>
                }


                <div id='button'>
                    <div id='cancel' onClick={closeModal}>
                        <p>Cancelar</p>
                    </div>

                    <div id='submit'>
                        <p>Criar robô</p>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default Modal