import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';
import Map from './screens/Map';
import Ascents from './screens/Ascents';
import Profile from './screens/Profile';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
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
          tabBarIcon: ({color, size}) => <Icon type="ionicon" name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({color, size}) => <Icon type="ionicon" name="compass" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Ascents"
        component={Ascents}
        options={{
          tabBarIcon: ({color, size}) => <Icon type="ionicon" name="checkmark-done" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => <Icon type="ionicon" name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
