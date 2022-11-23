import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function Test() {
  return <></>;
}

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#000000',
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Test}
            options={{
              tabBarLabel: 'tab1',
              tabBarIcon: ({color, size}) => <Icon name="rowing" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Test}
            options={{
              tabBarLabel: 'tab2',
              tabBarIcon: ({color, size}) => <Icon name="rowing" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Test}
            options={{
              tabBarLabel: 'tab3',
              tabBarIcon: ({color, size}) => <Icon name="rowing" color={color} size={size} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
