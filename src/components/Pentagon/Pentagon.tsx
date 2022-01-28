import { styled } from '@stitches/react'
import * as react from 'react'
import { IconButton } from '../IconButton/IconButton'


const iconWHCalc = (widthPercent: number) => ({
    width: `${widthPercent}%`,
    height: `${widthPercent * 1.0451809454}%`
})

const ButtonContainer = styled('div', {
    backgroundImage: 'url(/images/bg-pentagon.svg)',
    width: 472,
    height: 463,
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
    }
})


// css={{
//     top: '50%',
//     left: '50%',
//     transform: 'translate(70%, -75%)'
// }} 
export const Pentagon = () => {
    return (
        <ButtonContainer>
            <IconButton type="paper" css={{
                gridRowStart: 2,
                gridColumnStart: 3,
                top: '25%',
                left: '50%'
            }} />
            <IconButton type="rock" css={{
                gridRowStart: 3,
                gridColumnStart: 3,
                top: '50%',
                left: '30%'
            }}  />
            <IconButton type="scissor" css={{
                gridRowStart: 1,
                gridColumnStart: 2,
                top: '50%',
                left: '50%'
            }} />
            <IconButton type="lizard" css={{
                gridRowStart: 3,
                gridColumnStart: 1,
                left: '70%',
                top: '50%'
            }} />
            <IconButton type="spock" css={{
                gridRowStart: 2,
                gridColumnStart: 1,
                top: '25%',
                left: '50%'
            }} />
        </ButtonContainer>
    )
}