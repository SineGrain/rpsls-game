import * as React from 'react';
import { AppStateProvider } from './components/AppState/AppState';
import { GameViews } from './components/GameViews/GameViews';
import { Header } from './components/Header/Header';
import { ModalProvider } from './components/ModalProvider/ModalProvider';
import { Pentagon } from './components/Pentagon/Pentagon';
import { RulesButton } from './components/RulesButton/RulesButton';
import { globalCss, styled } from './stitches.config';
import { Landing } from './views/landing';

const globalStyles = globalCss({
  '*': { fontFamily: "$main" },
  body: {
    margin: 0,
    overflow: 'hidden'
  }
});

const FullPageBkgWrapper = styled('div', {
  background: 'radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)',
  height: '100vh',
  overflow: 'auto'
})

const MainContainer = styled('div', {
  // display: 'grid',
  // gridTemplateRows: '165px 1fr auto',
  // padding: '16px'

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(100% - 56px)',
  padding: 16,
  marginBottom: 24
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
        <FullPageBkgWrapper>
          <MainContainer>
            <Header />
            <GameViews />
            <FooterBox>
              <RulesButton />
            </FooterBox>
          </MainContainer>
        </FullPageBkgWrapper>
      </ModalProvider>
    </AppStateProvider>
  );
}

export default App;
