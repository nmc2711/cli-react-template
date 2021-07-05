import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

ReactDOM.render(
  <Provider store={store()}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
