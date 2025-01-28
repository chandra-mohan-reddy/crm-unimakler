import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Card } from 'react-native-paper';

const window = Dimensions.get('window');

import Header from './Header';

import { callApi } from '../api/api';

export default function Home(props) {

  var [selectedProject, setSelectedProject] = React.useState('');
  var [projectsList, setProjectsList] = React.useState([]);
  var [loading, setLoading] = React.useState(true);
  var [leadsCount, setLeadsCount] = React.useState(0);
  var [visitedCount, setVisitedCount] = React.useState(0);
  var [soldCount, setSoldCount] = React.useState(0);
  var [todayCount, setTodayCount] = React.useState(0);
  var [pendingCount, setPendingCount] = React.useState(0);
  var [futureCount, setFutureCount] = React.useState(0);
  var [postSalesCount, setPostSalesCount] = React.useState(0);
  var [items, setItems] = React.useState([]);

  useEffect(() => {
    // Call your function here
    getProjects();
    getMyDashboard();
    getTasksCount();
  }, []);

  const navigateToOtherScreen = (title, action, count) => {
    console.log("Count data", count);

    if (count === 0) {
      Alert.alert('No Leads Found', 'There are no leads available.');
    } else if (!selectedProject) {
      Alert.alert('No Project Selected', 'Please select Project.');
    } else {
      props.navigation.navigate('PrePostVisit', {
        title: title,
        action: action,
        project: selectedProject
      });
    }
  };

  const projectsCall = () => {
    const url = 'getmyprojects';
    const options = {
      method: 'GET',
    };
    return callApi(url, options);
  };
  const getProjects = async () => {
    try {
      setLoading(true);
      await projectsCall()
        .then(async (response) => {
          console.log("projectsList", response.data);
          setLoading(false);
          setProjectsList(response.data);
          projectsList = response.data;
          //          console.log("projectsList");
          console.log(projectsList);
          // Assuming projectsList is the array containing your API response
          const itemsArray = projectsList.map(item => {
            // Parse the JSON string from the API response into an object
            const parsedImages = JSON.parse(item.images);

            // Convert the object into an array of image URLs
            const imageUrls = Object.values(parsedImages).map(value => `https://terraterri.com/storage/${value}`);

            // Use the first image URL as the main image
            const mainImageUrl = imageUrls[0];

            return {
              title: item.name,
              images: imageUrls,
              mainImage: mainImageUrl,
            };
          });
          setItems(itemsArray);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const dashboardCall = () => {
    const url = 'mydashboard';
    const options = {
      method: 'GET',
    };
    return callApi(url, options);
  };
  const getMyDashboard = async () => {
    try {
      await dashboardCall()
        .then(async (response) => {
          console.log("My dashboard");
          console.log(response.data);
          setSoldCount(response.data.sold);
          setVisitedCount(response.data.visited);
          setLeadsCount(response.data.leads);
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const handleProjectChange = (itemValue) => {
    setSelectedProject(itemValue);
    selectedProject = itemValue;
    getTasksCount();
  };

  const tasksCall = () => {
    var projectNew = null
    if (selectedProject) {
      projectNew = selectedProject;
    }
    const url = "mytasks/" + projectNew;
    const options = {
      method: 'GET',
    };
    return callApi(url, options);

  };
  const getTasksCount = async () => {
    try {
      setLoading(true);
      await tasksCall()
        .then(async (response) => {
          console.log("My Tasks");
          console.log(response.data);

          setFutureCount(response.data.future_count);
          setPendingCount(response.data.pending_count);
          setPostSalesCount(response.data.postsales_count);
          setTodayCount(response.data.today_count);

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

  const renderDashboardTitle = () => {
    return <Text style={styles.title}> My Dashboard </Text>;
  };

  const renderTaskTitle = () => {
    return <Text style={styles.title}> My Tasks </Text>;
  };

  const renderProjectsTitle = () => {
    return <Text style={styles.title}> My Projects </Text>;
  };

  const renderDashboard = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <Card style={[styles.dcard, { marginHorizontal: 5 }]}>
          <View style={styles.dcardContent}>
            <Text style={styles.dcardTitle}>Leads</Text>
            <Text style={styles.dboxText}>{leadsCount}</Text>
          </View>
        </Card>
        <Card style={[styles.dcard, { marginHorizontal: 5 }]}>
          <View style={styles.dcardContent}>
            <Text style={styles.dcardTitle}>Visited</Text>
            <Text style={styles.dboxText}>{visitedCount}</Text>
          </View>
        </Card>
        <Card style={[styles.dcard, { marginHorizontal: 5 }]}>
          <View style={styles.dcardContent}>
            <Text style={styles.dcardTitle}>Sold</Text>
            <Text style={styles.dboxText}>{soldCount}</Text>
          </View>
        </Card>
      </View>
    );
  };

  const RenderProjects = () => {
    const [selectedValue, setSelectedValue] = useState('');
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          marginHorizontal: 5,
          backgroundColor: '#F8FAFB',
        }}>
        <Picker
          selectedValue={selectedProject}
          onValueChange={handleProjectChange}>
          <Picker.Item label="Select Project" value="" />
          {projectsList.map((option) => (
            <Picker.Item key={option.key} label={option.name.charAt(0).toUpperCase() + option.name.slice(1).toLowerCase()} value={option.key} />
          ))}
        </Picker>
      </View>
    );
  };

  const useRenderProjects = () => {
    const [selectedValue, setSelectedValue] = useState('');
    return {
      selectedValue,
      setSelectedValue
    };
  };

  const renderRowOne = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Card
          style={[styles.card, { marginHorizontal: 5 }]}
          onPress={() => navigateToOtherScreen('Today Tasks', 'today', todayCount)}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/TodayTasks.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Today</Text>
            <Text style={styles.cardSubtitle}>Customers follow-up list</Text>
            <View style={styles.box}>
              <Text style={styles.boxText}>{todayCount}</Text>
            </View>
          </View>
        </Card>
        <Card
          style={[styles.card, { marginHorizontal: 5 }]}
          onPress={() => navigateToOtherScreen('Pending Tasks', 'pending', pendingCount)}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/PendingTasks.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Pending</Text>
            <Text style={styles.cardSubtitle}>Customers awaiting contact</Text>
            <View style={styles.box}>
              <Text style={styles.boxText}>{pendingCount}</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  const renderRowTwo = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 5,
        }}>
        <Card
          style={[styles.card, { marginHorizontal: 5 }]}
          onPress={() => navigateToOtherScreen('Future Tasks', 'future', futureCount)}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/FutureTasks.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Future</Text>
            <Text style={styles.cardSubtitle}>Scheduled activities</Text>
            <View style={styles.box}>
              <Text style={styles.boxText}>{futureCount}</Text>
            </View>
          </View>
        </Card>
        <Card
          style={[styles.card, { marginHorizontal: 5 }]}
          onPress={() =>
            navigateToOtherScreen('Post Sales Tasks', 'postsales', postSalesCount)
          }>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/PostSalesTasks.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Post Sales</Text>
            <Text style={styles.cardSubtitle}>Target met</Text>
            <View style={styles.box}>
              <Text style={styles.boxText}>{postSalesCount}</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  const renderMyProjectsImages = () => {
    return (
      <View style={styles.imagecontainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.imagetitle}>{item.title}</Text>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.mainImage }} style={styles.image} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.containermain}>
      <Header title="Home" navigation={props.navigation} />
      <ScrollView>
        <View style={styles.container}>
          {renderDashboardTitle()}
          {renderDashboard()}
          {renderTaskTitle()}
          {RenderProjects()}
          {renderRowOne()}
          {renderRowTwo()}
          {renderProjectsTitle()}
          {renderMyProjectsImages()}
        </View>
      </ScrollView>
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <ActivityIndicator size="large" color={'#221C5D'} />
        </View>
      )}
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
  cardSubtitle: {
    fontSize: window.width * 0.03,
    color: '#999',
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  boxText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  dcard: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#184E96',
    elevation: 5,
    padding: 10,
    alignItems: 'center',
  },
  dcardContent: {
    alignItems: 'center',
  },
  dcardTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#fff',
  },
  dboxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  imagecontainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    width: 300,
    height: 300,
    margin: 10,
  },
  imageContainer: {
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imagetitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});
