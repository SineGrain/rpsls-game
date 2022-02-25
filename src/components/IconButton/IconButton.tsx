import React from 'react'
import { css, styled } from '../../stitches.config';

const ButtonContainer = styled('div', {
    position: 'relative',
    width: 198,
    height: 203,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
});

const InnerCircle = styled('div', {
    //inner circle shadow
    background: '#BABFD4',
    width: '76.76%',
    height: '74.87%',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    borderRadius: '100%',
    position: 'absolute',
    "&:after": {
        //inner circle solid
        content: " ",
        background: 'linear-gradient(0deg, #F3F3F3 0%, #DADADA 98.34%)', 
        width: '100%',               
        height: '94.74%',
        position: 'absolute',
        borderRadius: '100%',
        top: '5.26%'
    }
})


const OuterCircle = styled('div', {
    //Outer shadow
    "&:before": {
        content: ' ',
        width: '100%',
        height: '95.56%',
        top: 0,
        left: 0,
        boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.196706)',
        borderRadius: '100%',
        position: 'absolute'
    },

    //solid circle
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    borderRadius: '100%',
    position: 'absolute',
    "&:after": {
        //transparent layer
        content: ' ',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0966455) 0%, rgba(255, 255, 255, 0.0001) 100%)',
        width: '100%',
        height: '95.56%',
        top: 0,
        left: 0,
        position: 'absolute',
        borderRadius: '100%',
    }
})


const BaseIconButton: React.FunctionComponent  = (prop) => {
    return (
        <ButtonContainer {...prop}>
            <OuterCircle />
            <InnerCircle />
        </ButtonContainer>
    )
}

const variantStyleGen = (opt : {shadowColor: string, solidColor: string, iconName: string})=> ({
    [`& > ${OuterCircle}`]: {
        //solid
        backgroundColor: opt.shadowColor,
        "&:before":{
            //shadow
            backgroundColor: opt.solidColor, 
        }
    },
    [`& > ${InnerCircle}:after`]: {
        backgroundImage: `url(/images/icon-${opt.iconName}.svg)`
    }
})

export const IconButton = styled(BaseIconButton, {
    [`& > ${InnerCircle}:after`]: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '40%'
    },
    variants: {
        type: {
            rock: variantStyleGen({shadowColor:'#9D1634', solidColor:'#DB2E4D',iconName: 'rock'}),
            scissor: variantStyleGen({shadowColor:'#C76C1B', solidColor:'#EB9F0E',iconName: 'scissors'}),
            paper: variantStyleGen({shadowColor:'#2A45C2', solidColor:'#4664F4',iconName: 'paper'}),
            lizard: variantStyleGen({shadowColor:'#5F37A8', solidColor:'#834EE3',iconName: 'lizard'}),
            spock: variantStyleGen({shadowColor:'#2D8DAB', solidColor:'#3FB7CD',iconName: 'spock'}),
        }
    }
})