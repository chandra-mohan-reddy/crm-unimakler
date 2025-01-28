import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { callApi, storeData } from '../api/api';

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('Token');
      if (token) {
        navigateToOtherScreen('Home');
      }
    } catch (error) {
      console.error('Error checking token:', error);
    }
    setLoading(false);
  };

  const navigateToOtherScreen = (title) => {
    props.navigation.navigate('Home', {
      title: title,
    });
  };

  const apiCall = (postData) => {
    const url = 'userlogin';
    const options = {
      method: 'POST',
      body: JSON.stringify(postData),
    };
    return callApi(url, options);
  };

  const handleLogin = async () => {
    try {
      // Validate the username and password
      if (!username || !password) {
        setError('Username and Password are required.');
        return null;
      }

      var data = {
        username: username,
        password: password,
      };

      setLoading(true);
      await apiCall(data)
        .then(async (response) => {
          console.log(response);
          if (response.data.token) {
            const storage = await storeData(response.data.token);
            navigateToOtherScreen("Home");
            setLoading(false);
          } else if (response.code == 422) {
            setError('Invalid Username or Password.');
            setLoading(false);
          } else {
            setError('Please try after sometime.');
            setLoading(false);
          }
        })
        .catch(error => {
          console.error(error);
          setError('Invalid Username or Password.');
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      setError('Invalid Username or Password.');
      setLoading(false);
    }
  };

  const renderLoginScreen = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/terraterri-main.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log-In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={'#221C5D'} style={{ paddingTop: 20 }} />
        </View>
      ) : (
        renderLoginScreen()
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 180,
    height: 86,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
