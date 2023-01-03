import React, { useContext, useState } from 'react';
import { Button, Image, Input } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../../App';

// @ts-ignore
const Login = ({ navigation }) => {
  const { colors } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // @ts-ignore
  const { login, errorMessage, setErrorMessage } = useContext(AuthContext);

  // const { t } = useTranslation();

  // async function setUserData(userData: Object) {
  //   try {
  //     await AsyncStorage.setItem('refresh_token', userData.tokenResponse.refreshToken);
  //     await AsyncStorage.setItem('access_token', userData.tokenResponse.accessToken);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // function login() {
  //   setLoading(true);
  //   axios
  //     .post('http://192.168.16.107:8080/api/auth/signin', { username: username, password: password })
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //       setUserData(response.data).then(() => navigation.goBack());
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         console.log(error.response.data);
  //         if (error.response.data.type === 'USER_NOT_FOUND') {
  //           setFormError('Użytkownik lub hasło są niepoprawne');
  //         }
  //       } else {
  //         setFormError('Brak połączenia z serwerem');
  //       }
  //       console.log('login error');
  //     })
  //     .finally(function () {
  //       setLoading(false);
  //     });
  // }

  return (
    <>
      <ScrollView style={{ paddingTop: 5 }} contentContainerStyle={{ alignItems: 'center' }} stickyHeaderIndices={[0]}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            icon={{
              name: 'chevron-back',
              type: 'ionicon',
              size: 30,
              color: colors.primary,
            }}
            buttonStyle={{ backgroundColor: 'transparent', alignSelf: 'flex-start' }}
            titleStyle={{ color: colors.text, fontWeight: '700', fontSize: 18 }}
            title="Powrót"
            onPress={() => navigation.goBack()}
          />
        </View>
        <Image
          style={{
            width: 170,
            height: 170,
            borderRadius: 550,
            borderWidth: 2,
            borderColor: colors.border,
            marginVertical: 20,
          }}
          source={require('../../assets/logo_1200x1200.jpg')}
        />
        <Input
          placeholder={'Nazwa użytkownika'}
          label={'Nazwa użytkownika lub e-mail'}
          labelStyle={{ color: colors.text, marginBottom: 4 }}
          containerStyle={{ width: '90%', marginBottom: -15, marginTop: 20 }}
          leftIcon={{ type: 'ionicon', name: 'person', color: colors.primary }}
          inputStyle={{ color: colors.text, fontWeight: '600' }}
          inputContainerStyle={{
            backgroundColor: colors.card,
            paddingHorizontal: 10,
            borderColor: colors.border,
            borderRadius: 5,
          }}
          maxLength={16}
          onChangeText={value => setUsername(value)}
        />
        <Input
          placeholder={'Haslo'}
          secureTextEntry={true}
          label={'Hasło'}
          labelStyle={{ color: colors.text, marginBottom: 4 }}
          containerStyle={{ width: '90%' }}
          leftIcon={{ type: 'ionicon', name: 'lock-closed', color: colors.primary }}
          inputStyle={{ color: colors.text, fontWeight: '600' }}
          inputContainerStyle={{
            backgroundColor: colors.card,
            paddingHorizontal: 10,
            borderColor: colors.border,
            borderRadius: 5,
          }}
          onChangeText={value => setPassword(value)}
          errorStyle={{ textAlign: 'center' }}
          errorMessage={errorMessage}
        />
        <Button
          title={'Zaloguj'}
          titleStyle={{ fontSize: 20, fontWeight: '700' }}
          containerStyle={{ width: '90%', paddingHorizontal: 10 }}
          buttonStyle={{ backgroundColor: colors.primary }}
          disabledStyle={{ backgroundColor: colors.border }}
          // disabled={username === '' || password === ''}
          onPress={() => {
            if (username === '' || password === '') {
              setErrorMessage('Wypełnij wszystkie pola');
            } else {
              setErrorMessage('');
              login(username, password, navigation);
            }
          }}
        />
        <Button
          title={'Zapomniałem hasła'}
          buttonStyle={{ backgroundColor: 'transparent', marginTop: 10 }}
          titleStyle={{ color: colors.primary, textDecorationLine: 'underline' }}
        />
      </ScrollView>
    </>
  );
};
export default Login;
