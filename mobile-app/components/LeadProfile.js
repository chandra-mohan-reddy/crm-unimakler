import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Linking,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from './Header';

const window = Dimensions.get('window');
import { useRoute } from '@react-navigation/native';

import { callApi } from '../api/api';

export default function LeadProfile(props) {

  const route = useRoute();

  const initialData = [

  ];

  const [loading, setLoading] = React.useState(true);
  const [details, setDetails] = React.useState(initialData);
  const [data, setData] = React.useState(initialData);
  const { title, action, project, projectName, key } = route.params;

  useEffect(() => {
    // Call your function here
    getLeadData();
  }, []);

  const navigateChangeStatus = () => {
    props.navigation.navigate('LeadStatusChange', {
      title: title,
      action: action,
      project: project,
      projectName: projectName,
      key: key
    });
  };

  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
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
          console.log("Lead Data");
          console.log(response);
          // if (response.status === 1) {
          if (response.code == 200) {
            setDetails(response.data);
          }
          console.log("Data set", data);
          // }
          getLeadHistory();
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const callLeadHistory = () => {
    const url = 'leadcompletehistory/' + key;
    const options = {
      method: 'GET',
    };
    return callApi(url, options);
  };

  const getLeadHistory = async () => {
    try {
      await callLeadHistory()
        .then(async (response) => {
          console.log("Lead Data");
          console.log(response);
          // if (response.status === 1) {
          if (response.code == 200) {
            setData(response.data);
          }
          console.log("Data set", data);
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

  const renderProfile = () => {
    return (
      <View style={styles.card} key={key}>
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

  const renderTableRow = ({ project, createddate, comments, leadid, key, createdby, future_status, FutureStatusDate, completed_status }) => (
    <TouchableOpacity
      key={key}
    >
      <View style={styles.card} key={key}>
        <View style={styles.cardContent}>
          <View>
            <View style={styles.srow}>
              <View style={styles.row}>
                <FontAwesome name="check-circle" size={13} style={styles.hicon} />
                <Text style={styles.hdata}>{completed_status} </Text>
                <FontAwesome name="angle-right" size={13} style={styles.hicon} />
                <FontAwesome name="spinner" size={13} style={styles.hicon} />
                <Text style={styles.hdata}>{future_status}</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View>
            <View style={styles.srow}>
              <View style={styles.row}>
                <FontAwesome name="user" size={13} style={styles.hicon} />
                <Text style={styles.hdata}>{createdby ? createdby : 'Createdby User'}</Text>
              </View>
              <View style={styles.verticalLine}></View>
              <View style={styles.row}>
                <FontAwesome name="calendar" size={13} style={styles.hicon} />
                <Text style={styles.hdata}>{createddate}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderTable = () => (
    <View style={styles.card}>
      {renderHistoryTitle()}
      <View>
        {data.map((item) => (
          renderTableRow(item)
        ))}
      </View>
    </View>
  );

  const renderHistoryTitle = () => {
    return <Text style={styles.title}> Lead History </Text>;
  };

  const renderButtons = () => {
    return (
      <View style={[styles.row, { marginBottom: 10 }]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#CD883B' }]}
          onPress={() => handleCall(details.mobile)}>
          <FontAwesome name="phone" size={14} style={styles.bicon} />
          <Text style={styles.text}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#9D3B23' }]}>
          <FontAwesome name="times-circle" size={14} style={styles.bicon} />
          <Text style={styles.text}>No Response</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateChangeStatus('Today Tasks', 'today')}
          style={[styles.button, { backgroundColor: '#10712B' }]}>
          <FontAwesome name="exchange" size={14} style={styles.bicon} />
          <Text style={styles.text}>Change Status</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={'#221C5D'} style={{ paddingTop: 20 }} />
        </View>
      ) : (
        <View style={styles.containermain}>
          <Header title="Lead Profile" navigation={props.navigation} />
          <ScrollView>
            <View style={styles.container}>
              {renderProfile()}
              {renderButtons()}
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
  srow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  column: {
    alignItems: 'center',
  },
  icon: {
    color: '#2E86C1',
    marginRight: 10,
  },
  card: {
    flex: 1,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#F2FAFB',
    marginBottom: 10
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
  title: {
    fontSize: window.width * 0.05,
    fontWeight: 'bold',
    paddingLeft: 0,
    marginVertical: 10,
  },
  hdata: {
    fontSize: 13,
    fontWeight: '500',
  },
  hicon: {
    fontSize: 13,
    color: '#2E86C1',
    marginLeft: 10,
    marginRight: 5,
    paddingTop: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  verticalLine: {
    width: 1,
    height: 18,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
});
