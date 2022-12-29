import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';

// @ts-ignore
export const AccountProfileButtons = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    viewStyle: {
      width: '90%',
      paddingHorizontal: 10,
      margin: 20,
      borderRadius: 5,
    },
    buttonStyle: {
      padding: 0,
      backgroundColor: 'transparent',
      width: '100%',
    },
    buttonViewStyle: {
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingVertical: 20,
      flex: 1,
      flexDirection: 'row',
    },
    switchViewStyle: {
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingVertical: 20,
      flex: 1,
      flexDirection: 'row',
    },
    buttonViewTextStyle: {
      color: colors.text,
      fontSize: 20,
      fontWeight: 'bold',
      flex: 2,
    },
    leftIconStyle: {
      marginRight: 20,
      flex: 1,
    },
    alignSelfFlexEnd: {
      alignSelf: 'flex-end',
    },
  });
  const arrowIconColor = colors.primary;
  const leftIconColor = colors.text;
  const iconSize = 30;
  if (true) {
    return (
      <>
        <View style={styles.viewStyle}>
          <Button buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate('Login')}>
            <View style={styles.buttonViewStyle}>
              <Icon name="log-in" type="ionicon" color={colors.primary} size={iconSize} style={styles.leftIconStyle} />
              <Text style={styles.buttonViewTextStyle}>Zaloguj się</Text>
              <Icon name="chevron-forward" type="ionicon" color={arrowIconColor} size={iconSize} style={styles.alignSelfFlexEnd} />
            </View>
          </Button>
          <Button buttonStyle={styles.buttonStyle}>
            <View style={styles.buttonViewStyle}>
              <Icon name="person-add" type="ionicon" color={colors.primary} size={iconSize} style={styles.leftIconStyle} />
              <Text style={styles.buttonViewTextStyle}>Stwórz konto</Text>
              <Icon name="chevron-forward" type="ionicon" color={arrowIconColor} size={iconSize} style={styles.alignSelfFlexEnd} />
            </View>
          </Button>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.viewStyle}>
          <Button buttonStyle={styles.buttonStyle}>
            <View style={styles.buttonViewStyle}>
              <Icon name="heart" type="ionicon" color={leftIconColor} size={iconSize} style={styles.leftIconStyle} />
              <Text style={styles.buttonViewTextStyle}>Lista ulubionych</Text>
              <Icon name="chevron-forward" type="ionicon" color={arrowIconColor} size={iconSize} style={styles.alignSelfFlexEnd} />
            </View>
          </Button>
          <Button buttonStyle={styles.buttonStyle}>
            <View style={styles.buttonViewStyle}>
              <Icon name="settings" type="ionicon" color={leftIconColor} size={iconSize} style={styles.leftIconStyle} />
              <Text style={styles.buttonViewTextStyle}>Ustawienia konta</Text>
              <Icon name="chevron-forward" type="ionicon" color={arrowIconColor} size={iconSize} style={styles.alignSelfFlexEnd} />
            </View>
          </Button>
        </View>
      </>
    );
  }
};
