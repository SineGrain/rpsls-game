import * as React from 'react'
import { ModalContext } from './ModalProvider'

export const useModalContext = () => {
    const modalContext = React.useContext(ModalContext)

    if(!modalContext){
        throw new Error('Devi usare il context dentro a ModalProvider!!!')
    }

    return modalContext;
}