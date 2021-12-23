import React from 'react'
import { css, styled } from '../../../stitches.config';

const ButtonContainer = styled('div', {
    position: 'relative',
    width: 198,
    height: 203,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
});


const InnerCircle = styled('div', {
    //shadow
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '100%',
    background: '#BABFD4',
    width: '76.76%',
    height: '74.87%',
    "&:after": {
        //center light circle
        content: " ",
        background: 'linear-gradient(0deg, rgb(243, 243, 243) 0%, rgb(218, 218, 218) 98.34%)',
        width: '100%',
        height: '94.74%',
        position: 'absolute',
        borderRadius: '100%',
        top: '5.26%'
    },
});

const OuterCircle = styled('div', {
    "&:before": {
        //back shadow
        content: ' ',
        borderRadius: '100%',
        background: '#4664F4',
        width: '100%',
        height: '95.56%',
        top: 0,
        left: 0,
        position: 'absolute'
    },
    //solid circle
    background: '#2A45C2',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.196706)',
    position: 'absolute',
    borderRadius: '100%',
    "&:after": {
        //transparent layer
        borderRadius: '100%',
        content: ' ',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0966455) 0%, rgba(255, 255, 255, 0.0001) 100%)',
        width: '100%',
        height: '95.56%',
        top: 0,
        left: 0,
        position: 'absolute'
    }

});



const BaseCirclesButtons : React.FunctionComponent  = (props) => {
    return (
        <ButtonContainer {...props}>
            <OuterCircle />
            <InnerCircle />
        </ButtonContainer>
    )
}
BaseCirclesButtons.toString = () => '.main-circles-container';


const outerColors = (shadow: string, body: string, iconName: string, options?: {
    svgXPosition?: string
} ) => ({
    [`& > ${OuterCircle}`]: {
        backgroundColor: body,
        "&:before": {
            backgroundColor: shadow
        }
    } as React.CSSProperties
    ,
    [`& > ${InnerCircle}:before`]: {
        backgroundImage: `url(/images/icon-${iconName}.svg)`,
        backgroundPositionX: options?.svgXPosition || ''
    } as React.CSSProperties
})

export const IconButton = styled(BaseCirclesButtons, {
    [`& > ${InnerCircle}:before`]: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        content: ' ',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '50%',
        zIndex: 1,
    },
    variants: {
        type: {
            rock:       outerColors('#DB2E4D', '#9D1634', 'rock'),
            paper:      outerColors('#4664F4', '#2A45C2', 'paper'),
            scissor:    outerColors('#EB9F0E', '#C76C1B', 'scissors'),
            lizard:     outerColors('#834EE3', '#5F37A8', 'lizard'),
            spock:      outerColors('#3FB7CD', '#2D8DAB', 'spock', {svgXPosition: '60%'}),
              
        }
    }
})