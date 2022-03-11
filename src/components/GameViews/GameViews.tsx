import * as React from 'react'
import { Landing } from '../../views/landing'
import { UserSelection } from '../../views/userSelection'
import { GameState } from '../AppState/AppState'
import { useAppStateContext } from '../AppState/useAppStateContext'

export const GameViews: React.FC = ()=> {
    const { gameState, resetGame } = useAppStateContext()

    switch(gameState){
        case GameState.LANDING: {
            return <Landing />
        }

        case GameState.USER_SELECTION: {
            
            return <UserSelection />
        }

        default: {
            return <Landing />
        }
    }
}