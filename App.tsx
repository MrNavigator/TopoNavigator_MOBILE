import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ColorScheme} from './src/colorScheme';
import {darkTheme, lightTheme} from './src/theme';
import {TabStack} from './src/navigation';

// enableLatestRenderer();

const App = () => {
  const scheme = useColorScheme();
  const selectedTheme = scheme === ColorScheme.LIGHT ? lightTheme : darkTheme;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={selectedTheme}>
        <StatusBar />
        <TabStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
