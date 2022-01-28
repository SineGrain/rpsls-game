import { styled } from '@stitches/react'
import * as React from 'react'

const HeaderContainer = styled('div', {
    border: '3px solid rgba(255, 255, 255, 0.289199)',
    borderRadius: '15px',
    padding: 32
})

const PayoffText = styled('div', {
    backgroundImage: "url(/images/logo-bonus.svg)",
    height: 125,
    width: 150,
    backgroundRepeat: 'no-repeat'
})

const ScoreBox = styled('div', {})

export const Header = () => {
    return (
        <HeaderContainer>
            <PayoffText />
        </HeaderContainer>
    )
}