import { styled } from '@stitches/react';
import * as React from 'react'

interface IModalContext {
    setShowModal: (open: boolean) => void
}

export const ModalContext = React.createContext<IModalContext|null>(null);

const RulesModal = styled('div', {  
    width: '400px',
    height: '400px',
    backgroundImage: 'url("/images/image-rules-bonus.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: '#fff',
    borderRadius: '10px'
})

const ModalWrapper = styled('div', {
    position:'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const ModalProvider: React.FC = ({children}) => {
    const [showModal, setShowModal] = React.useState(false)

    return (
        <ModalContext.Provider value={{setShowModal}}>
            {children}
            {showModal && (
                <ModalWrapper onClick={() => {setShowModal(false)}}>
                    <RulesModal />
                </ModalWrapper>
            )}
        </ModalContext.Provider>
    )
}