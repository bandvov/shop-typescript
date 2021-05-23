import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./themes/defaultTheme";
import Div from './components/common/div';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
<Div  />
    </ThemeProvider>
  );
}

export default App;
