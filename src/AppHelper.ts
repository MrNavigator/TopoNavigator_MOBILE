import AsyncStorage from '@react-native-async-storage/async-storage';

export class AppHelper {
  static getColorScheme = async () => {
    try {
      const value = await AsyncStorage.getItem('theme');
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  };
  static setColorScheme = async (value: string) => {
    try {
      await AsyncStorage.setItem('theme', value);
    } catch (error) {
      console.log(error);
    }
  };
}
