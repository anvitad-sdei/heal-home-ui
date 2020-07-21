import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async (key, item) => {
  try {
    var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
    return jsonOfItem;
  } catch (e) {
    console.log('store data error ====>', e);
  }
};
export const getData = async key => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (e) {
    console.log('get data error ====>', e);
  }
};
export async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
}
