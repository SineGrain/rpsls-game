import * as React from 'react'

export enum GameItems {
    SCISSOR='SCISSOR',
    PAPER='PAPER',
    ROCK='ROCK',
    LIZARD='LIZARD',
    SPOCK='SPOCK'
}

export interface IAppState {
    userSelection?: GameItems
    computerSelection?: GameItems
    setUserSelection: React.Dispatch<React.SetStateAction<GameItems | undefined>>
    setComputerSelection: React.Dispatch<React.SetStateAction<GameItems | undefined>>
}

export const AppStateContext = React.createContext<IAppState|null>(null);

export const AppStateProvider: React.FC = ({children}) => {
    const [userSelection, setUserSelection] = React.useState<GameItems>()
    const [computerSelection, setComputerSelection] = React.useState<GameItems>()

    React.useEffect(()=>{
        console.log('User selected ', userSelection)
    }, [userSelection])

    return (
        <AppStateContext.Provider value={{
            userSelection,
            computerSelection,
            setUserSelection,
            setComputerSelection
        }}>
            {children}
        </AppStateContext.Provider>
    )
}