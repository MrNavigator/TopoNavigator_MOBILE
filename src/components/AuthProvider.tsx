import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { LoadingFullScreen } from './LoadingFullScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// @ts-ignore
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [userID, setUserID] = useState(null);
  const [username, setUsername] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // @ts-ignore
  const login = (formUsername, formPassword, navigation) => {
    setIsLoading(true);
    axios
      .post('http://192.168.16.108:8080/api/auth/signin', {
        username: formUsername,
        password: formPassword,
      })
      .then(r => {
        console.log(r.data);
        setAccessToken(r.data.tokenResponse.accessToken);
        setRefreshToken(r.data.tokenResponse.refreshToken);
        setUserID(r.data.tokenResponse.userID);
        setUsername(r.data.tokenResponse.username);
        setUserData(r.data).then(navigation.goBack());
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          if (error.response.data.type === 'USER_NOT_FOUND') {
            setErrorMessage('Błędne dane logowania');
          } else {
            setErrorMessage('Brak połączenia z serwerem');
          }
        } else {
          setErrorMessage('Wystąpił błąd');
          console.log(error);
        }
      })
      .finally(function () {
        setIsLoading(false);
      });
  };
  // @ts-ignore
  const setUserData = async data => {
    await AsyncStorage.setItem('access_token', data.tokenResponse.accessToken);
    await AsyncStorage.setItem('refresh_token', data.tokenResponse.refreshToken);
    await AsyncStorage.setItem('user_id', data.userID.toString());
    await AsyncStorage.setItem('username', data.username);
  };
  const removeUserData = async () => {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('refresh_token');
    await AsyncStorage.removeItem('user_id');
    await AsyncStorage.removeItem('username');
  };
  const logout = () => {
    setIsLoading(true);
    setAccessToken(null);
    setRefreshToken(null);
    setUserID(null);
    setUsername(null);
    removeUserData()
      .then(() => console.warn('logout'))
      .finally(() => setIsLoading(false));
  };
  const isLoggedIn = async () => {
    try {
      const value = await AsyncStorage.getItem('access_token');
      if (value !== null) {
        // We have data!!
        console.log(value);
        return true;
      }
      return false;
    } catch (error) {
      console.error('isLoggedIn error auth provider');
      return false;
      // Error retrieving data
    }
  };

  useEffect(() => {
    isLoggedIn().then(r => console.log('use effect ' + r));
  });
  const enableIsLoading = () => {
    setIsLoading(true);
  };
  const disableIsLoading = () => {
    setIsLoading(false);
  };
  // @ts-ignore
  return (
    <AuthContext.Provider
      // @ts-ignore
      value={{
        isLoading,
        accessToken,
        refreshToken,
        userID,
        username,
        errorMessage,
        login,
        logout,
        enableIsLoading,
        disableIsLoading,
        setErrorMessage,
        isLoggedIn,
      }}
    >
      <LoadingFullScreen enable={isLoading} />
      {children}
    </AuthContext.Provider>
  );
};
