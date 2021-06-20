import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Input, Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import db from '../config';
import firebase from 'firebase';

export default class SetGoalsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      goal: '',
      userId: firebase.auth().currentUser.email,
      name: '',
      date: '',
    };
  }

  addTask = () => {
    var user = this.state.userId;
    db.collection('users').add({
      'user_id': user,
      'goal': this.state.goal,
      'date': firebase.firestore.FieldValue.serverTimestamp(),
    });
    this.setState({
      goal: '',
    });

    alert('Task Added Successfully');
  };

  render() {
    return (
      <SafeAreaProvider>
        <View>
          <KeyboardAvoidingView>
            <View>
              <Header
                centerComponent={{
                  text: 'Set Your Goals Here',
                  style: { fontSize: 20, color: '#FFD7B5', },
                }}
                backgroundColor="#F36E65"
              />

              <Image
                source={require('../assets/procrastination.jpg')}
                style={{
                  height: 130,
                  width: 230,
                  padding: 20,
                  marginTop: 20,
                  alignSelf: 'center',
                }}
              />
             </View>
            <View>
              <Text style={{fontSize: 15, color: '#008686', margin: 10, alignSelf: 'center'}}> Create Your Tasks, {this.state.userId}!</Text>
              </View>

            <View>


              <TextInput
                multiline
                style={styles.inputBox}
                placeholder={'Create Task Here'}
                onChangeText={(text) => {
                  this.setState({
                    goal: text,
                  });
                }}
                value={this.state.goal}
              />

              

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  console.log(this.state.name);
                  this.addTask();
                }}>
                <Text style={{color: '#F77686', fontWeight: 'bold'}}>Enter</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: '80%',
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f7de57',
    backgroundColor: 'lightyellow',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10
  },
  button: {
    backgroundColor: '#F3C4BF',
    width: '50%',
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'red',
    alignSelf: 'center',
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
