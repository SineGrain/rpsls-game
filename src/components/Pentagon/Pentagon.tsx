import * as React from 'react'
import { styled } from '../../stitches.config';
import { IconButton } from '../IconButton/IconButton'
import { useAppStateContext } from '../AppState/useAppStateContext'
import { GameItems } from '../AppState/AppState'


const iconWHCalc = (widthPercent: number) => ({
    width: `${widthPercent}%`,
    height: `${widthPercent * 1.0451809454}%`
})

const ButtonContainer = styled('div', {
    backgroundImage: 'url(/images/bg-pentagon.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '80%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    margin: 'auto',
    [`& > ${IconButton}`]: {
        //...iconWHCalc(35)
        width: '80%',
        height: '80%',
        // left: '50%',
        // top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    width: 472*0.7,
    height: 463*0.7,
    '@desktop': {
        width: 472,
        height: 463
    }
    
})


// css={{
//     top: '50%',
//     left: '50%',
//     transform: 'translate(70%, -75%)'
// }} 
export const Pentagon = () => {
    const { setUserSelection } = useAppStateContext()

    return (
        <ButtonContainer>
            <IconButton
                type="paper"
                onClick={() => setUserSelection(GameItems.PAPER)}
                css={{
                    gridRowStart: 2,
                    gridColumnStart: 3,
                    top: '25%',
                    left: '50%'
                }} />
            <IconButton
                type="rock"
                onClick={() => setUserSelection(GameItems.ROCK)}
                css={{
                    gridRowStart: 3,
                    gridColumnStart: 3,
                    top: '50%',
                    left: '30%'
                }} />
            <IconButton
                type="scissor"
                onClick={() => setUserSelection(GameItems.SCISSOR)}
                css={{
                    gridRowStart: 1,
                    gridColumnStart: 2,
                    top: '50%',
                    left: '50%'
                }} />
            <IconButton
                type="lizard"
                onClick={() => setUserSelection(GameItems.LIZARD)}
                css={{
                    gridRowStart: 3,
                    gridColumnStart: 1,
                    left: '70%',
                    top: '50%'
                }} />
            <IconButton
                type="spock"
                onClick={() => setUserSelection(GameItems.SPOCK)}
                css={{
                    gridRowStart: 2,
                    gridColumnStart: 1,
                    top: '25%',
                    left: '50%'
                }} />
        </ButtonContainer>
    )
}