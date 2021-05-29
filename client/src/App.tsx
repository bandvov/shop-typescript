import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/defaultTheme';
import LoginPage from './pages/login-page';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
