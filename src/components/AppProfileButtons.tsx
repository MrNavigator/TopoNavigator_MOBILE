import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Button, Icon, Switch, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../App';
import { ColorScheme } from '../colorScheme';
import { AppHelper } from '../AppHelper';

export const AppProfileButtons = () => {
  // @ts-ignore
  const { setTheme, theme } = React.useContext(ThemeContext);
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
  const [disabledSwitch, setDisableSwitch] = useState(false);
  const iconSize = 30;

  function enableSwitch() {
    setDisableSwitch(false);
  }

  async function changeTheme() {
    if (!disabledSwitch) {
      AppHelper.setColorScheme(theme === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT).then(() => {
        setTheme(theme === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT);
        setTimeout(enableSwitch, 500);
      });
    }
    setDisableSwitch(true);
  }

  return (
    <>
      <View style={styles.viewStyle}>
        <Button buttonStyle={styles.buttonStyle} onPress={() => changeTheme()}>
          <View style={styles.switchViewStyle}>
            <Icon name="moon" type="ionicon" color={leftIconColor} size={iconSize} style={styles.leftIconStyle} />
            <Text style={styles.buttonViewTextStyle}>Ciemny motyw</Text>
            <Switch
              disabled={disabledSwitch}
              value={useTheme().dark}
              color={colors.primary}
              thumbColor={colors.primary}
              trackColor={{ true: colors.primary, false: colors.text }}
              onValueChange={() => changeTheme()}
            />
          </View>
        </Button>
        <Button buttonStyle={styles.buttonStyle}>
          <View style={styles.buttonViewStyle}>
            <Icon name="stats-chart" type="ionicon" color={leftIconColor} size={iconSize} style={styles.leftIconStyle} />
            <Text style={styles.buttonViewTextStyle}>Skala wspinaczkowa</Text>
            <Icon name="chevron-forward" type="ionicon" color={arrowIconColor} size={iconSize} style={styles.alignSelfFlexEnd} />
          </View>
        </Button>
        <Button buttonStyle={styles.buttonStyle}>
          <View style={styles.buttonViewStyle}>
            <Icon name="cloud-download" type="ionicon" color={leftIconColor} size={iconSize} style={styles.leftIconStyle} />
            <Text style={styles.buttonViewTextStyle}>Pobrane</Text>
            <Icon name="chevron-forward" type="ionicon" color={arrowIconColor} size={iconSize} style={styles.alignSelfFlexEnd} />
          </View>
        </Button>
        <Button buttonStyle={styles.buttonStyle}>
          <View style={styles.buttonViewStyle}>
            <Icon name="warning" type="ionicon" color={leftIconColor} size={iconSize} style={styles.leftIconStyle} />
            <Text style={styles.buttonViewTextStyle}>Zgłoś błąd</Text>
            <Icon name="chevron-forward" type="ionicon" color={arrowIconColor} size={iconSize} style={styles.alignSelfFlexEnd} />
          </View>
        </Button>
      </View>
    </>
  );
};
