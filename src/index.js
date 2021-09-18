import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background: #5ECE7B;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #13c581;
  }
}`

const theme = {
  colors: {
    main: '#5ECE7B',
  },
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
