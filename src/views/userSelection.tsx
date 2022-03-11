import * as React from 'react'
import { useAppStateContext } from '../components/AppState/useAppStateContext'
import { IconButton } from '../components/IconButton/IconButton'
import { styled } from '../stitches.config'

const UserSelectionContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 700
})

const UserSelectionWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'center'
})

const UserChoice = styled('div', {})
const ComputerWait = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
})

const ChoiceTitle = styled('div', {
    width: '100%',
    textAlign: 'center',
    color: 'White',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '4em',
    letterSpacing: 3
})

const DarkCircle = styled('div', {
    position: 'absolute',
    width: 224.63,
    height: 224.63,
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '100%'
})

const DarkCircleContainer = styled('div', {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
})

export const UserSelection: React.FC = () => {
    const { userSelection, resetGame } = useAppStateContext()

    return (
        <UserSelectionWrapper onClick={()=> resetGame()}>
            <UserSelectionContainer>
                <UserChoice>
                    <ChoiceTitle> YOU PICKED </ChoiceTitle>
                    
                    <IconButton type={userSelection} size="medium"/>
                </UserChoice>
                <ComputerWait>
                    <ChoiceTitle>THE HOUSE PICKED</ChoiceTitle>
                    <DarkCircleContainer>
                        <DarkCircle />
                    </DarkCircleContainer>
                </ComputerWait>
            </UserSelectionContainer>
        </UserSelectionWrapper>
    )
}