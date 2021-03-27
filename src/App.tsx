import React from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from 'styles/THEME';
import { GlobalStyles } from 'styles/global';

function App() {
  return (
   <>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <h1>Hello</h1>
      </ThemeProvider>
   </>
  );
}

export default App;
