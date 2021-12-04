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

const ButtonInnerContainer = styled('div', {
    position: 'relative',
    width: '76.76%',
    height: '74.87%'
});


const Circle = styled('div', {
    position:'absolute',
    bottom: 0,
    borderRadius: '100%',
    variants: {
        type: {
            circle1: {
                background: 'linear-gradient(0deg, #F3F3F3 0%, #DADADA 98.34%)', 
                width: '100%',               
                height: '94.74%',
            },
            circle2: {
                background: '#BABFD4',
                width: '100%',
                height: '100%',
            },
            circle3: {
                background: '#4664F4',
                width: '100%',
                height: '95.56%',
                top: 0,
                left: 0
            },
            circle4: {
                background: '#2A45C2',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.196706)'
            },
            transparent: {
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0966455) 0%, rgba(255, 255, 255, 0.0001) 100%)',
                width: '100%',
                height: '95.56%',
                top: 0,
                left: 0
            }
        }
    }
    
});


interface IIconButtonProps {
    secondaryColor?: string
    primaryColor?: string
    // iconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    iconComponent: React.ReactNode
}

export const IconButton: React.FunctionComponent<IIconButtonProps>  = ({
    secondaryColor,
    primaryColor,
    iconComponent
}) => {
    return (
        <ButtonContainer>
            <Circle 
                type="circle4" 
                css={{ background: primaryColor }} 
            />
            <Circle 
                type="circle3" 
                css={{ background: secondaryColor }} 
                />
            <ButtonInnerContainer>
                <Circle type="circle2" />
                <Circle type="circle1" />
                {iconComponent}
                
            </ButtonInnerContainer>
            <Circle type="transparent" />
        </ButtonContainer>
    )
}