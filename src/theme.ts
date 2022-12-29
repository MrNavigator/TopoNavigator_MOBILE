import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E4B61A',
    background: 'rgb(229,229,229)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(58,58,63)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    error: '#e74e4e',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#E4B61A',
    background: '#1a1a1a',
    card: '#2A2E34',
    text: '#ceced0',
    border: '#343434',
    notification: '#FBE134',
    error: '#e74e4e',
  },
};
