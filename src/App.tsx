import ThemeConfig from 'theme';
import {
  NotistackProvider,
  RtlLayout,
  ScrollToTop,
  Settings,
  ThemePrimaryColor,
} from 'components';
import Router from 'routes';
import GlobalStyles from 'theme/globalStyles';
import { BaseOptionChartStyle } from 'components/charts/BaseOptionChart';
import { ProgressBarStyle } from 'components/LoadingScreen';
import GoogleAnalytics from 'components/GoogleAnalytics';

function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <RtlLayout>
          <NotistackProvider>
            <GlobalStyles />
            <ProgressBarStyle />
            <BaseOptionChartStyle />
            <GoogleAnalytics />
            <ScrollToTop />
            <Settings />
            <Router />
          </NotistackProvider>
        </RtlLayout>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}

export default App;
