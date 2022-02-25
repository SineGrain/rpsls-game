import * as React from 'react'
import { AppStateContext } from './AppState';

export const useAppStateContext = () => {
    const appStateContext = React.useContext(AppStateContext)

    if(!appStateContext){
        throw new Error('Devi usare il context dentro a AppStateContext!!!')
    }

    return appStateContext;
}