import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '@/theme/index';
import { ThemeMode } from '@/types/index';

const THEMES_KEYS: { [key in ThemeMode]: Theme } = {
  light: LightTheme,
  dark: DarkTheme
};

// const PREFERS_SCHEME_COLOR = '(prefers-color-scheme: dark)';
const LIGHT_THEME: ThemeMode = 'light';
const DARK_THEME: ThemeMode = 'dark';

const getActiveTheme = (themeMode: ThemeMode) => THEMES_KEYS[themeMode];

interface IThemeContextProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  changeTheme: (theme: ThemeMode) => void;
}

export const ThemeCustomContext = createContext({} as IThemeContextProps);

interface IThemeContextProviderProps {
  children: React.ReactNode;
  emotionCache: EmotionCache;
}

export const ThemeContextProvider: React.FC<IThemeContextProviderProps> = ({ children, emotionCache }) => {
  // Boolean(window.matchMedia(PREFERS_SCHEME_COLOR).matches);
  const isDarkMode = useCallback(() => false, []);
  const getTheme = useCallback(() => (isDarkMode() ? DARK_THEME : LIGHT_THEME), [isDarkMode]);

  const [activeTheme, setActiveTheme] = useState<Theme>(THEMES_KEYS[getTheme()]);
  const [selectedTheme, setSelectedTheme] = useState<ThemeMode>(getTheme());
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    let themeCurrent: ThemeMode = selectedTheme;
    if (isMounted.current) {
      themeCurrent = getTheme();
      isMounted.current = false;
    }
    setActiveTheme(getActiveTheme(themeCurrent));
  }, [getTheme, selectedTheme]);

  const toggleTheme = useCallback(() => {
    let theme: ThemeMode = LIGHT_THEME;
    if (selectedTheme === LIGHT_THEME) theme = DARK_THEME;
    setSelectedTheme(theme);
  }, [selectedTheme]);

  const changeTheme = (theme: ThemeMode) => {
    setSelectedTheme(theme);
  };

  const memorizedValue = useMemo(
    () => ({
      theme: selectedTheme,
      toggleTheme,
      changeTheme
    }),
    [selectedTheme, toggleTheme]
  );

  return (
    <ThemeCustomContext.Provider value={memorizedValue}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={activeTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ThemeCustomContext.Provider>
  );
};

export const useThemeContextProvider = () => {
  const context = useContext(ThemeCustomContext);

  if (context === undefined) {
    throw new Error('useThemeContextProvider must be used within a ThemeContextProvider');
  }

  return context;
};
