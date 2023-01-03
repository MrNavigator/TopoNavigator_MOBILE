import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ColorScheme } from './src/colorScheme';
import { TabStack } from './src/navigation';
import { darkTheme, lightTheme } from './src/theme';
import { AppHelper } from './src/AppHelper';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AuthProvider } from './src/components/AuthProvider';

export const ThemeContext = React.createContext(ColorScheme.LIGHT);
export const AuthContext = React.createContext(false);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    debug: true,
  })
  .then();
const App = () => {
  const [theme, setTheme] = useState(ColorScheme.LIGHT);
  const themeData = { theme, setTheme };

  AppHelper.getColorScheme()
    .then(value => {
      if (value !== undefined) {
        setTheme(value === ColorScheme.LIGHT ? ColorScheme.LIGHT : ColorScheme.DARK);
      }
    })
    .catch();

  return (
    <SafeAreaProvider>
      {/* @ts-ignore*/}
      <ThemeContext.Provider value={themeData}>
        <NavigationContainer theme={theme === ColorScheme.LIGHT ? lightTheme : darkTheme}>
          <AuthProvider>
            <StatusBar />
            <TabStack />
          </AuthProvider>
        </NavigationContainer>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
