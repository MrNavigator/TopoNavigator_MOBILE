import React from 'react';
import { Text } from 'react-native';

const Login = ({ navigation }) => {
  // console.log('X');
  // axios
  //   .post('http://192.168.16.106:8080/api/auth/signin', {username: 'test', password: 'test'})
  //   .then(function (response) {
  //     // handle success
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error.response.data);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });
  // fetch('http://192.168.16.106:8080/api/auth/signin', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     username: 'teste',
  //     password: 'test',
  //   }),
  // })
  //   .then(response => response.json())
  //   .then(value => console.log(value))
  //   .catch(error => {
  //     console.error('error');
  //     console.error(error);
  //   });
  return <Text>test login screen</Text>;
};
export default Login;
