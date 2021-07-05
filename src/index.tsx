import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/commonStyle';
import { theme } from './theme';

ReactDOM.render(
  <Provider store={store()}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
