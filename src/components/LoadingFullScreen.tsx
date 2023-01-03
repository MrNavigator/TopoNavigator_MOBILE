import React, { useContext } from 'react';
import { Overlay } from '@rneui/themed';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../../App';

// @ts-ignore
export const LoadingFullScreen = () => {
  const { colors } = useTheme();
  // @ts-ignore
  const { isLoading } = useContext(AuthContext);
  return (
    <>
      <Overlay
        isVisible={isLoading}
        overlayStyle={{
          backgroundColor: 'transparent',
          shadowColor: 'transparent',
        }}
        backdropStyle={{ backgroundColor: colors.background, opacity: 0.9 }}
      >
        <ActivityIndicator size={50} color={colors.primary} />
      </Overlay>
    </>
  );
};
