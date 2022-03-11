import * as React from 'react'

export enum GameItems {
    SCISSOR = 'scissor',
    PAPER   = 'paper',
    ROCK    = 'rock',
    LIZARD  = 'lizard',
    SPOCK   = 'spock'
}

export enum GameState {
    LANDING = 'LANDING',
    USER_SELECTION = 'USER_SELECTION',
    COMPUTER_SELECTION = 'COMPUTER_SELECTION',
    RESULT = 'RESULT' 
}
export interface IAppState {
    userSelection?: GameItems
    computerSelection?: GameItems
    setUserSelection: React.Dispatch<React.SetStateAction<GameItems | undefined>>
    setComputerSelection: React.Dispatch<React.SetStateAction<GameItems | undefined>>
    gameState: GameState
    setGameState: React.Dispatch<React.SetStateAction<GameState>>
    resetGame: () => void
}

export const AppStateContext = React.createContext<IAppState|null>(null);

export const AppStateProvider: React.FC = ({children}) => {
    const [userSelection, setUserSelection] = React.useState<GameItems>()
    const [computerSelection, setComputerSelection] = React.useState<GameItems>()
    const [gameState, setGameState] = React.useState<GameState>(GameState.LANDING)

    const resetGame = ()=> {
        setGameState(GameState.LANDING)
        setUserSelection(undefined)
    }
    React.useEffect(()=>{
        if(userSelection){
            setGameState(GameState.USER_SELECTION)
        }
    }, [userSelection])

    return (
        <AppStateContext.Provider value={{
            userSelection,
            computerSelection,
            setUserSelection,
            setComputerSelection,
            gameState, 
            setGameState,
            resetGame
        }}>
            {children}
        </AppStateContext.Provider>
    )
}