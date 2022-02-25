import * as React from 'react'
import { styled } from '@stitches/react'

const HeaderBox = styled('div', {
    border: '3px solid rgba(255, 255, 255, 0.289199)',
    borderRadius: '15px',
    padding: 32,
    width: '100%',
    maxWidth: 700,
    display: 'flex',
    justifyContent: 'space-between'
})

const HeaderContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center'
})

const PayoffText = styled('div', {
    backgroundImage: "url(/images/logo-bonus.svg)",
    height: 125,
    width: 150,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
})

const ScoreBox = styled('div', {
    borderRadius: '10px',
    backgroundColor: '#F3F3F3',
    width: '120px',
    padding: '16px',
    textAlign: 'center'
})
const ScoreTitle = styled('div', {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '2.5px',
    color: '#2A45C2'
})

const ScoreNum = styled('div', {
    color: '#565468',
    fontSize: '64px'
})

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderBox>
                <PayoffText />
                <ScoreBox>
                    <ScoreTitle>Score</ScoreTitle>
                    <ScoreNum>12</ScoreNum>
                </ScoreBox>
            </HeaderBox>
        </HeaderContainer>
    )
}