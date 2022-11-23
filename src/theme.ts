import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E4B61A',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#E4B61A',
    background: '#0B0C0C',
    card: '#2A2E34',
    text: '#E9EAEC',
    border: '#2A2E34',
    notification: '#FBE134',
  },
};
