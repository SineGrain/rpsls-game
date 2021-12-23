import * as React from 'react';
import { IconButton } from './components/GameButton/IconButton/IconButton';
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
        <IconButton type="rock" />
        <IconButton type="paper" />
        <IconButton type="scissor" />
        <IconButton type="lizard" />
        <IconButton type="spock" />
      </ButtonContainer>
    </MainContainer>
  );
}

export default App;
