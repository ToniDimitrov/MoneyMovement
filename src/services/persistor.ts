import EncryptedStorage from "react-native-encrypted-storage";

export class Persistor {
  public static setItem = async (key: string, data: any) => {
    await EncryptedStorage.setItem(key, JSON.stringify(data));
  };

  public static getItem = async (key: string, defaultValue: any = {}) => {
    const data = await EncryptedStorage.getItem(key);

    return !data ? defaultValue : JSON.parse(data);
  };
}
