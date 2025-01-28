import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    overflow: 'hidden',
    margin: 0,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

const CustomHeader = (props) => {
  const { title, navigation } = props;

  const navigateToOtherScreen = (title, action) => {
    navigation.navigate('Home', {
      title: title,
      action: action,
    });
  };

  return (
    <TouchableOpacity
      onPress={() => navigateToOtherScreen('Today Tasks', 'today', props)}>
      <View style={styles.container}>
        <Image
          source={require('../assets/terraterri-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomHeader;
