import ThemeConfig from 'theme';
import { NotistackProvider, Settings } from 'components';
import Router from 'routes';

function App() {
  return (
    <ThemeConfig>
      <NotistackProvider>
        <Settings />
        <Router />
      </NotistackProvider>
    </ThemeConfig>
  );
}

export default App;
