import * as React from 'react';
import { AppStateProvider } from './components/AppState/AppState';
import { Header } from './components/Header/Header';
import { ModalProvider } from './components/ModalProvider/ModalProvider';
import { Pentagon } from './components/Pentagon/Pentagon';
import { RulesButton } from './components/RulesButton/RulesButton';
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
  display: 'grid',
  gridTemplateRows: '190px 1fr auto',
  padding: '16px'
})

const PentagonContainer = styled('div', {
  width: '100%',
  display:'flex',
  justifyContent: 'center'
})

const FooterBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  "@desktop": {
    justifyContent: 'end'
  },
})

function App() {
  
  globalStyles();

  return (
    <AppStateProvider>
      <ModalProvider>
        <MainContainer>
          <Header />
          <PentagonContainer>
            <Pentagon />
          </PentagonContainer>
          <FooterBox>
            <RulesButton />
          </FooterBox>
        </MainContainer>
      </ModalProvider>
    </AppStateProvider>
  );
}

export default App;
