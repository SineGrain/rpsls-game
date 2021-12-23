import React from 'react'
import { IconButton } from './IconButton/IconButton'
import { ReactComponent as ScissorIcon } from './icons/icon-scissors.svg'
import { ReactComponent as PaperIcon } from './icons/icon-paper.svg'
import { ReactComponent as RockIcon } from './icons/icon-rock.svg'
import { ReactComponent as LizardIcon } from './icons/icon-lizard.svg'
import { ReactComponent as SpockIcon } from './icons/icon-spock.svg'

import { css } from '../../stitches.config'

export enum ButtonType {
    SCISSOR,
    PAPER,
    ROCK,
    LIZARD,
    SPOCK
}

interface IGameButton {
    type: ButtonType
}
const svgStyle = css({
    left: '53%',
    top: '56%',
    transform: 'scale(1.3) translate(-50%, -50%)',
    position: 'absolute'
});



export const GameButton: React.FunctionComponent<IGameButton> = ({ type }) => {
    let OutButton = <IconButton iconComponent={ScissorIcon} />;

    switch (type) {
        case ButtonType.SCISSOR: {
            OutButton = <IconButton 
                    primaryColor="#C76C1B" 
                    secondaryColor="#EB9F0E"
                    iconComponent={<ScissorIcon className={svgStyle()} />}
                />
            break;
        }

        case ButtonType.ROCK: {
            OutButton = <IconButton 
                primaryColor='#9D1634'
                secondaryColor='#DB2E4D'
                iconComponent={<RockIcon className={svgStyle()} />}
            />
            break;
        }

        case ButtonType.PAPER: {
            OutButton = <IconButton 
                primaryColor='#2A45C2'
                secondaryColor='#4664F4'
                iconComponent={<PaperIcon className={svgStyle()} />}
            />
            break;
        }

        case ButtonType.LIZARD: {
            OutButton = <IconButton 
                primaryColor='#5F37A8'
                secondaryColor='#834EE3'
                iconComponent={<LizardIcon className={svgStyle()} />}
            />
            break;
        }

        case ButtonType.SPOCK: {
            OutButton = <IconButton 
                primaryColor='#2D8DAB'
                secondaryColor='#3FB7CD'
                iconComponent={<SpockIcon className={svgStyle()} />}
            />
            break;
        }

    }
    return (
        <>
            {OutButton}
        </>
        
    )
}