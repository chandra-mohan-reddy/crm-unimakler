import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { callApi } from '../api/api';

const window = Dimensions.get('window');

import Header from './Header';

export default function LeadProfile(props) {
  const route = useRoute();

  const initialData = [

  ];

  const [loading, setLoading] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState('Option 1');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [description, setDescription] = useState('');
  const [details, setDetails] = React.useState(initialData);

  const { title, action, project, projectName, key } = route.params;

  useEffect(() => {
    // Call your function here
    getLeadData();
  }, []);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const navigateToOtherScreen = () => {
    props.navigation.navigate('LeadScreen', {
      title: title,
      action: action,
      project: project,
      projectName: projectName,
      key: key
    });
  };

  const callLeadData = () => {
    const url = 'lead/' + key;
    const options = {
      method: 'GET',
    };
    return callApi(url, options);
  };

  const getLeadData = async () => {
    console.log("API Call");
    setLoading(true);
    try {
      await callLeadData()
        .then(async (response) => {
          console.log("Lead Details");
          console.log(response);
          if (response.code == 200) {
            setDetails(response.data);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const renderForm = () => {
    return (
      <>
        <View style={styles.card}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Select an option:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                backgroundColor: '#F8FAFB',
              }}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="Option 1" value="Option 1" />
                <Picker.Item label="Option 2" value="Option 2" />
                <Picker.Item label="Option 3" value="Option 3" />
              </Picker>
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Select a date:</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Text style={styles.date}>{date.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Select a time:</Text>
            <TouchableOpacity onPress={() => setShowTimePicker(true)}>
              <Text style={styles.date}>{time.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={handleTimeChange}
              />
            )}
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter a description"
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={5}
            />
          </View>
        </View>
      </>
    );
  };

  const renderProfile = () => {
    return (
      <View style={[styles.card, styles.cardColor]} key={key}>
        <View style={styles.cardDetails}>
          <View style={styles.header}>
            <View style={styles.infoRow}>
              <FontAwesome name="user" size={22} style={styles.icon} />
              <Text style={styles.name}>{details.name}</Text>
            </View>
            <View style={styles.infoRow}>
              {details.email !== null && (
                <>
                  <FontAwesome name="envelope" style={styles.dataIcon} />
                  <Text style={styles.data}>{details.email}</Text>
                </>
              )}
            </View>
            <View style={styles.infoRow}>
              <FontAwesome name="phone" style={styles.dataIcon} />
              <Text style={styles.data}>{details.mobile}</Text>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome name="building" style={styles.dataIcon} />
              <Text style={styles.data}>{details.project}</Text>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome name="search" style={styles.dataIcon} />
              <Text style={styles.data}>{details.source}</Text>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome name="check-circle-o" style={styles.dataIcon} />
              <Text style={styles.data}>{details.future_status}</Text>
            </View>
          </View>
        </View>
      </View >
    );
  };

  const renderButtons = () => {
    return (
      <View style={[styles.row, { marginBottom: 10 }]}>
        <TouchableOpacity
          onPress={() => navigateToOtherScreen()}
          style={[styles.button, { backgroundColor: '#9D3B23' }]}>
          <FontAwesome name="times-circle" size={14} style={styles.bicon} />
          <Text style={styles.text}>No Response</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToOtherScreen()}
          style={[styles.button, { backgroundColor: '#10712B' }]}>
          <FontAwesome name="check-square-o" size={16} style={styles.bicon} />
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderTitle = () => {
    return <Text style={styles.title}> Change Status </Text>;
  };

  return (
    <>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={'#221C5D'} style={{ paddingTop: 20 }} />
        </View>
      ) : (
        <View style={styles.containermain}>
          <Header title="Change Status of Lead" navigation={props.navigation} />
          <ScrollView>
            <View style={styles.container}>
              {renderProfile()}
              {renderTitle()}
              {renderForm()}
              {renderButtons()}
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containermain: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: window.width * 0.05,
    fontWeight: 'bold',
    paddingLeft: 0,
    marginVertical: 10,
  },
  card: {
    flex: 1,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  cardColor: {
    backgroundColor: '#F2FAFB',
  },
  cardContent: {
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
  },
  cardDetails: {
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    minHeight: 100,
  },
  date: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataIcon: {
    color: '#ABB2B9',
    marginRight: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  data: {
    color: '#4A4A4A',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    alignItems: 'center',
  },
  icon: {
    color: '#2E86C1',
    marginRight: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginHorizontal: 5
  },
  bicon: {
    color: '#FFF',
    marginRight: 5,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
  },
});
