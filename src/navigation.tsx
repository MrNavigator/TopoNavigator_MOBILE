import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import Map from './screens/Map';
import Ascents from './screens/Ascents';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();
const ProfileNav = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
    <ProfileNav.Navigator
      initialRouteName="ProfileView"
      screenOptions={{
        stackAnimation: 'fade',
        headerShown: false,
      }}
    >
      <ProfileNav.Screen name="ProfileView" component={Profile} />
      <ProfileNav.Screen name="Login" component={Login} />
    </ProfileNav.Navigator>
  );
};
export const TabStack = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icon type="ionicon" name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => <Icon type="ionicon" name="compass" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Ascents"
        component={Ascents}
        options={{
          tabBarIcon: ({ color, size }) => <Icon type="ionicon" name="checkmark-done" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon type="ionicon" name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
