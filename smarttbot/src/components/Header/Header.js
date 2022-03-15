import React from 'react'
import { HeaderContainer } from './style'
import CombinedShape from '../../images/Combined Shape.svg'
import Rectangle from '../../images/Rectangle.svg'

const Header = () => {
    return (
        <HeaderContainer>
            <img src={CombinedShape} alt='Gráfico de coluna' />
            <img src={Rectangle} alt='Retângulo cinza' id='rectangle' />
            <p>Análise Geral / <span id='green-text'>Principal</span></p>
        </HeaderContainer>
    )
}

export default Header