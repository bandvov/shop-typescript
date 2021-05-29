import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/defaultTheme';
import LoginPage from './pages/login-page';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
