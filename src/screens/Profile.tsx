import React from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AppProfileButtons } from '../components/AppProfileButtons';
import { AppInformationComponent } from '../components/AppInformation';
import { AccountProfileButtons } from '../components/AccountProfileButtons';

// @ts-ignore
const Profile = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
        <View style={{ width: '100%', height: 200 }}>
          <ImageBackground source={require('../../assets/profile_background.jpg')} resizeMode={'cover'} style={{ flex: 1 }} />
        </View>
        <View style={{ width: '100%', backgroundColor: colors.background, borderRadius: 20, top: -20 }}>
          <AccountProfileButtons navigation={navigation} />
          <AppProfileButtons />
        </View>
        <AppInformationComponent />
      </ScrollView>
    </View>
  );
};
export default Profile;
