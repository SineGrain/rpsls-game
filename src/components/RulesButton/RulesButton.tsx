import * as React from 'react'
import { styled } from '../../stitches.config'
import { useModalContext } from '../ModalProvider/useModalContext'

const InnerRulesButton = styled('div', {
    padding: '12px 40px',
    color: 'white',
    border: '1px solid',
    height: 'fit-content',
    borderRadius: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    cursor: 'pointer',
    width: 'fit-content'
})


export const RulesButton = () => {
    const {setShowModal} = useModalContext()

    return (
        <InnerRulesButton 
            onClick={()=> {
                setShowModal(true)
            }}
        >
            RULES
        </InnerRulesButton>
    )
}