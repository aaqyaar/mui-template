import { useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';

import useSettings from '../hooks/useSettings';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
// your custom overrides for mui components
import componentsOverride from './overrides';
//
import shadows, { customShadows } from './shadows';

export default function ThemeConfig({
  children,
}: {
  children: React.ReactNode;
}) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions: any = useMemo(
    () => ({
      palette: isLight
        ? { ...palette.light, mode: 'light' }
        : { ...palette.dark, mode: 'dark' },
      shape,
      typography,
      breakpoints,
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
