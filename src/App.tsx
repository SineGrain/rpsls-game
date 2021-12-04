import React from 'react';
import { ButtonType, GameButton } from './components/GameButton/GameButton';
import { globalCss, styled } from './stitches.config';

const globalStyles = globalCss({
  '*': { fontFamily: "$main" },
  'body': {
    background: 'radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)',
    height: '100vh',
    overflow: 'hidden'
  }
});

const MainContainer = styled('div', {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center'
})

const ButtonContainer = styled('div', {
  backgroundImage:  'url(/images/bg-pentagon.svg)',
  width: 472,
  height: 463,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
})

function App() {
  
  globalStyles();

  return (
    <MainContainer>
      <ButtonContainer>
        <GameButton type={ButtonType.PAPER} />
        <GameButton type={ButtonType.ROCK} />
        <GameButton type={ButtonType.SCISSOR} />
        <GameButton type={ButtonType.LIZARD} />
        <GameButton type={ButtonType.SPOCK} />
      </ButtonContainer>
    </MainContainer>
  );
}

export default App;
