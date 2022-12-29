import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ColorScheme } from './src/colorScheme';
import { TabStack } from './src/navigation';
import { darkTheme, lightTheme } from './src/theme';
import { AppHelper } from './src/AppHelper';

export const ThemeContext = React.createContext(ColorScheme.LIGHT);
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
          <StatusBar />
          <TabStack />
        </NavigationContainer>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
