import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Card } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const window = Dimensions.get('window');

import Header from './Header';

import { callApi } from '../api/api';

export default function PrePostVisit(props) {
  const route = useRoute();

  const [loading, setLoading] = React.useState(true);

  // State variables
  const [callsCount, setCallsCount] = useState(0);
  const [followupsCount, setFollowupsCount] = useState(0);
  const [siteVisitsCount, setSiteVisitsCount] = useState(0);
  const [visitedCount, setVisitedCount] = useState(0);
  const [revisitCount, setRevisitCount] = useState(0);
  const [negotiationCount, setNegotiationCount] = useState(0);
  const [soldCount, setSoldCount] = useState(0);
  const [agreementCount, setAgreementCount] = useState(0);
  const [registrationCount, setRegistrationCount] = useState(0);
  const [clouserCount, setClouserCount] = useState(0);
  const [projectName, setProjectName] = useState('');

  const { title, action, project } = route.params;

  useEffect(() => {
    // Call your function here
    getLeads();
  }, []);

  const navigateToOtherScreen = () => {
    props.navigation.navigate('LeadsList', {
      title: title,
      action: action,
      project: project,
      projectName: projectName
    });
  };

  const callLeads = () => {
    const url = 'leadscount/' + project + '/' + action;
    const options = {
      method: 'GET',
    };
    return callApi(url, options);
  };

  const getLeads = async () => {
    try {
      await callLeads()
        .then(async (response) => {
          console.log("Project Leadmanagement");
          console.log(response.data);
          if (response.status === 1) {
            const data = response.data;
            setCallsCount(parseInt(data.calls));
            setFollowupsCount(parseInt(data.followups));
            setSiteVisitsCount(parseInt(data.sitevisits));
            setVisitedCount(parseInt(data.visited));
            setRevisitCount(parseInt(data.revisit));
            setNegotiationCount(parseInt(data.negotiation));
            setSoldCount(parseInt(data.sold));
            setAgreementCount(parseInt(data.agreement));
            setRegistrationCount(parseInt(data.registration));
            setClouserCount(parseInt(data.clouser));
            setProjectName(data.project_name);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const renderTasksTitle = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}> {title} </Text>
      </View>
    );
  };

  const renderPreVisitTitle = () => {
    return <Text style={styles.title}> Pre-Visit </Text>;
  };

  const renderProjectTitle = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.ptitle}> {projectName} </Text>
      </View>
    );
  };

  const renderPostVisitTitle = () => {
    return <Text style={styles.title}> Post-Visit </Text>;
  };

  const renderPostSalesTitle = () => {
    return <Text style={styles.title}> Post-Sales </Text>;
  };

  const renderCalls = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Calls.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Calls</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{callsCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderFollowups = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Followup.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Follow-Ups</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{followupsCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderSiteVisits = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Visit.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Site Visits</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{siteVisitsCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderReVisit = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Visit.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Re-Visit</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{revisitCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderNegotiation = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Negotiation.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Negotiation</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{negotiationCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderClouser = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Clouser.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Clouser</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{clouserCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderSold = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Sold.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Sold</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{soldCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderAgreement = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Agreement.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Agreement</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{agreementCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderRegistration = () => {
    return (
      <Card
        style={[styles.card, { marginHorizontal: 5 }]}
        onPress={() => navigateToOtherScreen()}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/flow/Registration.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Registration</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>{registrationCount}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const renderPreVisitRow = () => {
    return (
      <View style={styles.section}>
        {renderTasksTitle()}
        {renderPreVisitTitle()}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          {renderCalls()}
          {renderFollowups()}
          {renderSiteVisits()}
        </View>
      </View>
    );
  };

  const renderPostVisitRow = () => {
    return (
      <View style={styles.section}>
        {renderPostVisitTitle()}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          {renderReVisit()}
          {renderNegotiation()}
          {renderClouser()}
        </View>
      </View>
    );
  };

  const renderPostSalesRow = () => {
    return (
      <View style={styles.section}>
        {renderPostSalesTitle()}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          {renderSold()}
          {renderAgreement()}
          {renderRegistration()}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.containermain}>
      <Header title="Leads Management" navigation={props.navigation} />
      <ScrollView>
        <View style={styles.container}>{renderProjectTitle()}</View>
        {renderPreVisitRow()}
        {renderPostVisitRow()}
        {renderPostSalesRow()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containermain: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  container: {
    margin: 5,
  },
  title: {
    fontSize: window.width * 0.05,
    fontWeight: 'bold',
    paddingLeft: 0,
    marginVertical: 10,
  },
  ptitle: {
    fontSize: window.width * 0.05,
    fontWeight: 'bold',
    paddingLeft: 0,
    marginVertical: 10,
    alignItems: 'center',
  },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#F8FAFB',
    elevation: 5,
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  boxText: {
    fontSize: window.width * 0.04,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
});
