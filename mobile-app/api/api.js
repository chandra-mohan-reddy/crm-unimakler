import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl = 'http://api.terraterri.com/api/';

export const callApi = async (url, options = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  var token = null;

  if (url != "userlogin") {
    // Retrieve the authentication token from AsyncStorage
    token = await AsyncStorage.getItem('Token');
    token = JSON.parse(token);

  }

  const headers = {
    ...defaultHeaders
  };

  // Only include Authorization header if token is present
  if (token !== undefined && token !== null) {
    headers.Authorization = `Bearer ${token}`;
  }

  options = { ...options, headers };
  console.log("API URL:", url);
  return fetch(apiUrl + url, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error.message);
      }
      console.log("API Call", apiUrl + url);
      console.log("API Call Response", data);
      return data;
    })
    .catch((error) => {
      console.error(`Error calling ${apiUrl + url}: ${error}`);
      throw error;
    });
};

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('Token', JSON.stringify(value));
    return true;
  } catch (e) {
    console.error("Storage error:");
    console.error(e);
    return false;
  }
}
