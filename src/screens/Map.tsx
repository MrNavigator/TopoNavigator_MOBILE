import React from 'react';
import {Button, PermissionsAndroid, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Cool Photo App Camera Permission',
        message: 'Cool Photo App needs access to your camera ' + 'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        return true;
      } else {
        console.log('Camera permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
  requestCameraPermission();
  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsMyLocationButton={true} showsUserLocation={true} />
      <View style={{position: 'absolute', top: 10, left: 10}}>
        <Button title={'test'} />
      </View>
    </View>
  );
};
export default Map;
