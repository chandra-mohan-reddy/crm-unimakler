import AsyncStorage from '@react-native-async-storage/async-storage';
import { callApi } from '../api/api';

export const checkAuth = async () => {
  const token = await AsyncStorage.getItem('Token');
  if (!token) {
    return false;
  }

  const apiCall = () => {
      const url = 'userlogin';
      const options = {
        method: 'GET'
      };
      return callApi(url, options);
  };

  try {
    const response = await http.get('check-auth', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

