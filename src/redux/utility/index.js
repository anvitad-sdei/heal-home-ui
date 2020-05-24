import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('store data error ====>', e);
  }
};
