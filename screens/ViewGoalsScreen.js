import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Input, Header } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import db from '../config';
import firebase from 'firebase';

export default class ViewGoalsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      goals: [],
    };
    this.requestRef = null;
  }

  getTaskDetails = () => {
    this.requestRef = db.collection('users')
    .onSnapshot((snapshot) => {
      var goals = snapshot.docs.map((doc) => doc.data());
      this.setState({
        goals: goals,
      });
    });
  };

  componentDidMount = () => {
    this.getTaskDetails();
  };

  componentWillUnmount = () => {
    this.requestRef();
  };

  keyExtractor = (item, i) => i.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.goal}
        subtitle={item.date}
        titleStyle={{ color: '#F3C4BF', fontWeight: 'bold' }}
        bottomDivider
      />
    );
  };

  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            centerComponent={{
              text: 'To-Do List',
              style: { fontSize: 20, color: '#FFD7B5' },
            }}
            backgroundColor="#F36E65"
          />

          <Image
            source={require('../assets/procrastination.jpg')}
            style={{
              height: 100,
              width: 200,
              padding: 20,
              marginTop: 15,
              alignSelf: 'center',
            }}
          />

          <View>
            <Text
              style={{
                fontSize: 20,
                color: '#008686',
                margin: 10,
                alignSelf: 'center',
              }}>
              Welcome, {this.state.userId}!
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            {this.state.goals.length === 0 
            ? (
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 17 }}>
                  You Currently Have No Tasks
                </Text>
              </View>
            ) 
            : (
              <FlatList
                goals={this.state.goals}
              />
            )}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 100
  },
});
