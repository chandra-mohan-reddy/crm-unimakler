import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const window = Dimensions.get('window');

import Header from './Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { callApi } from '../api/api';

export default function LeadsList(props) {
  const route = useRoute();

  const initialData = [

  ];

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(initialData);
  const { title, action, project, projectName } = route.params;

  useEffect(() => {
    // Call your function here
    getLeads();
  }, []);

  const navigateToOtherScreen = (key) => {
    props.navigation.navigate('LeadScreen', {
      title: title,
      action: action,
      project: project,
      projectName: projectName,
      key: key
    });
  };

  const callLeads = () => {
    const url = 'leadslist/' + project + '/' + action;
    const options = {
      method: 'GET',
    };
    return callApi(url, options);
  };

  const getLeads = async () => {
    console.log("API Call");
    setLoading(true);
    try {
      await callLeads()
        .then(async (response) => {
          console.log("Project Leadmanagement Leads");
          console.log(response);
          // if (response.status === 1) {
          if (response.code == 200) {
            setData(response.data);
          }
          // }
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

  const renderTableRow = ({ FutureStatusDate, Name, completed_status, PhoneNumber, key }) => (
    <TouchableOpacity
      key={key}
      onPress={() => navigateToOtherScreen(key)}>
      <View style={styles.card} key={key}>
        <View style={styles.cardContent}>
          <View>
            <View style={styles.row}>
              <View style={styles.column}>
                <FontAwesome name="user" size={13} style={styles.icon} />
                <Text style={styles.data}>{Name}</Text>
              </View>
              <View style={styles.column}>
                <FontAwesome name="angle-right" size={13} style={styles.icon} />
                <Text style={styles.data}>{completed_status}</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View>
              <View style={styles.column}>
                <FontAwesome name="phone" size={13} style={styles.icon} />
                <Text style={styles.data}>{PhoneNumber}</Text>
              </View>
            </View>
            <View>
              <View style={styles.column}>
                <FontAwesome name="calendar" size={13} style={styles.icon} />
                <Text style={styles.data}>{FutureStatusDate}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderDashboardTitle = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}> {projectName} </Text>
      </View>
    );
  };

  const renderProjectTitle = () => {
    return <Text style={styles.projecttitle}> {title} </Text>;
  };

  const renderTable = () => (
    <View style={styles.card}>
      {renderProjectTitle()}
      {/* ... (renderProjectTitle and other code) */}
      <View>
        {data.map((item) => (
          renderTableRow(item)
        ))}
      </View>
    </View>
  );

  return (
    <>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={'#221C5D'} style={{ paddingTop: 20 }} />
        </View>
      ) : (
        <View style={styles.containermain}>
          <Header title="Leads List" navigation={props.navigation} />
          <ScrollView>
            <View style={styles.container}>
              {renderDashboardTitle()}
              {renderTable()}
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
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: window.width * 0.05,
    fontWeight: 'bold',
    paddingLeft: 0,
    marginVertical: 10,
  },
  projecttitle: {
    fontSize: window.width * 0.06,
    fontWeight: 'bold',
    paddingLeft: 0,
    marginVertical: 10,
  },
  card: {
    flex: 1,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#F2FAFB',
    marginBottom: 10
  },
  container: {
    marginBottom: 5,
    padding: 5,
  },
  cardContent: {
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'row',
  },
  data: {
    fontSize: 13,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  icon: {
    paddingTop: 2,
  },
  divider: {
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
});
