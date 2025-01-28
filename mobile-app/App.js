import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// You can import from local files
import LoginScreen from './components/Login';
import HomeScreen from './components/Home';
import PrePostVisitScreen from './components/PrePostVisits';
import LeadsListScreen from './components/LeadsList';
import LeadScreen from './components/LeadProfile';
import LeadStatusChangeScreen from './components/LeadStatusChange';

const Stack = createNativeStackNavigator();

export default function App() {

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      return token !== null;
    } catch (error) {
      console.error('Error checking token:', error);
      return false;
    }
  };

  const [hasToken, setHasToken] = React.useState(false);

  React.useEffect(() => {
    checkToken().then((result) => {
      setHasToken(result);
    });
  }, []);

  return (
    <>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={hasToken ? 'Home' : 'Login'}
          screenOptions={{
            headerShown: false, // Hide default header
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PrePostVisit" component={PrePostVisitScreen} />
          <Stack.Screen name="LeadsList" component={LeadsListScreen} />
          <Stack.Screen name="LeadScreen" component={LeadScreen} />
          <Stack.Screen name="LeadStatusChange" component={LeadStatusChangeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

