import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('store data error ====>', e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('get data error ====>', e);
  }
};
