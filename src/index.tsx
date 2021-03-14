import React from 'react';
import ReactDOM from 'react-dom';
import App from '@app';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '@assets/styles/theme';
import GlobalStyle from '@assets/styles/globalStyle';
import { Provider } from 'react-redux';
import store from '@store/index';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
