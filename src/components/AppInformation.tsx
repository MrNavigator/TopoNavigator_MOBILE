import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { Text } from '@rneui/themed';

export const AppInformationComponent = () => {
  const { colors } = useTheme();
  return (
    <>
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={{ color: colors.text, textDecorationLine: 'underline', opacity: 0.5 }}>Informacje prawne</Text>
          {/*<Text style={{ color: colors.text, textDecorationLine: 'underline', opacity: 0.5 }}>Polityka prywatności</Text>*/}
          {/*<Text style={{ color: colors.text, opacity: 0.5 }}> | </Text>*/}
          {/*<Text style={{ color: colors.text, textDecorationLine: 'underline', opacity: 0.5 }}>Regulamin</Text>*/}
          {/*<Text style={{ color: colors.text, opacity: 0.5 }}> | </Text>*/}
          {/*<Text style={{ color: colors.text, textDecorationLine: 'underline', opacity: 0.5 }}>Licencje</Text>*/}
        </View>
        <Text style={{ color: colors.text, opacity: 0.5 }}>© 2022 TopoNavigator.pl</Text>
      </View>
    </>
  );
};
