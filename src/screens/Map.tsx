import React, { useRef, useState } from 'react';
import { PermissionsAndroid, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, Icon } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { LatLng } from 'react-native-maps/lib/sharedTypes';

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
  const { colors } = useTheme();
  const [userLocation, setUserLocation] = useState<LatLng>();
  const [showAsListBtn, setShowAsListBtn] = useState<boolean>(false);
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
        console.log('You can use location');
        return true;
      } else {
        console.log('Location permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
  requestCameraPermission();

  const mapRef = useRef(null);
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        showsMyLocationButton={false}
        showsUserLocation={true}
        onUserLocationChange={event => {
          if (event.nativeEvent.coordinate) {
            setUserLocation({
              latitude: event.nativeEvent.coordinate?.latitude,
              longitude: event.nativeEvent.coordinate?.longitude,
            });
          }
        }}
        onRegionChange={region => {
          //console.log(region); //fixme debug only
          if (region.latitudeDelta < 0.15 || region.longitudeDelta < 0.15) {
            setShowAsListBtn(true);
          } else {
            setShowAsListBtn(false);
          }
        }}
        region={{ latitude: 51.9, latitudeDelta: 6.24, longitude: 20, longitudeDelta: 5.28 }}
        toolbarEnabled={false}
      >
        {/*<Marker coordinate={{latitude: 51.9, longitude: 20}} />*/}
      </MapView>
      <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
        <Icon
          reverse
          name="locate"
          type="ionicon"
          color={colors.card}
          size={20}
          onPress={() => {
            if (mapRef.current && userLocation) {
              // @ts-ignore
              mapRef.current.animateToRegion({
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              });
            }
          }}
        />
      </View>
      <View style={{ position: 'absolute', top: 1, right: 10 }}>
        <Icon
          reverse
          type="ionicon"
          name="options"
          color={colors.card}
          size={20}
          onPress={() => {
            if (mapRef.current && userLocation) {
              // @ts-ignore
              mapRef.current.animateToRegion({
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              });
            }
          }}
        />
      </View>
      <View style={{ position: 'absolute', top: 0, left: 55, right: 70, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Szukaj"
          icon={{
            name: 'search',
            type: 'ionicon',
            size: 15,
            color: 'white',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: colors.card,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 15,
          }}
          containerStyle={{
            width: '100%',
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
      <View
        style={{
          display: showAsListBtn ? 'flex' : 'none',
          position: 'absolute',
          bottom: 9,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          title="Pokaż liste"
          icon={{
            name: 'list',
            type: 'ionicon',
            size: 15,
            color: 'white',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: colors.card,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 15,
            width: 200,
          }}
          containerStyle={{
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  );
};
export default Map;
