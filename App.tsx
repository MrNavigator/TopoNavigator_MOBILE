import {Dimensions, StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';
import {ColorScheme} from './src/colorScheme';
import {darkTheme, lightTheme} from './src/theme';
import MapView from 'react-native-maps';

// enableLatestRenderer();

function Test() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height - 74,
    },
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const App = () => {
  const scheme = useColorScheme();
  const Tab = createBottomTabNavigator();
  const selectedTheme = scheme === ColorScheme.LIGHT ? lightTheme : darkTheme;
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={selectedTheme}>
        <StatusBar />
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: selectedTheme.colors.primary,
          }}
        >
          <Tab.Screen
            name="Map"
            component={Test}
            options={{
              tabBarIcon: ({color, size}) => <Icon type="ionicon" name="map" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Test}
            options={{
              tabBarIcon: ({color, size}) => <Icon type="ionicon" name="person" color={color} size={size} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
