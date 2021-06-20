import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {Input} from 'react-native-elements';


import db from '../config'
import firebase from 'firebase'

export default class WelcomeScreen extends React.Component{
  constructor(){
    super()
    this.state={
      emailId: '',
      password: '',
      confirmPassword: '',
      name: '',
      task: '',
      
    }
  }

  SignUp=(emailId, password)=>{
    /*if(password !== confirmPassword){
      return alert("Password doesn't match.")
    }else{*/
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then((response)=>{
        alert("User added successfully")
        
      })
    
      .catch((error)=>{
//handle errors here

var errorCode=error.code;
var errorMessage=error.message;
return alert(errorMessage)
      })
 
      }

      LogIn=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          this.props.navigation.navigate("SetGoal")
         // alert("Successfully Logged In!")
        })

        .catch((error)=>{
          //handle errors here
          
          var errorCode=error.code;
          var errorMessage=error.message;
          return alert(errorMessage)
                })
      }



  render(){
    return(
      <View>
        <Text style={{fontSize: 40,  color: '#f5d372', marginBottom: 20, marginTop:40, alignSelf: 'center'}}> Welcome! </Text>
        <View> 

        <Image
        source={require('../assets/procrastination.jpg')}
        style={{  height: 150, marginBottom: 30, alignSelf: 'center' }}
        />

        <Input
          style={styles.inputBox}
          placeholder={'email@gmail.com'}
          label={'Email Id'}
          keyboardType={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        /> 

          <Input
          style={styles.inputBox}
          placeholder={'Enter Password'}
          label={'Password'}
          secureTextEntry={true}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        /> 
        
          <Input
          style={styles.inputBox}
          placeholder={'Confirm Password'}
          label={'Confirm Password'}
          secureTextEntry={true}
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        /> 

        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.SignUp(this.state.emailId, this.state.password)
        }}> 
        <Text style={{fontSize: 20, color: 'white'}}> Sign Up </Text>
        
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.LogIn(this.state.emailId, this.state.password)
        }}> 
        <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
        
        
        </TouchableOpacity>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  inputBox:{
    width: '50%',
    height: 30,
    alignSelf: 'center',
    borderColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    
  },
  button:{
    backgroundColor: '#f1ccbb',
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: 'red',
    shadowOffset: {width: 2.5, height: 5},
   shadowOpacity: .4,
   shadowRadius: 4,
   marginTop:5,
   marginBottom: 20

  }
})