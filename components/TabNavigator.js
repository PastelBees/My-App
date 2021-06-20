import React from 'react';
import{Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SetGoalsScreen from '../screens/SetGoalsScreen';
import ViewGoalsScreen from '../screens/ViewGoalsScreen';


export const AppTabNavigator= createBottomTabNavigator({

    
    ViewGoal: {
        screen: ViewGoalsScreen,
        navigationOptions: {tabBarLabel: "View Goals",
        tabBarIcon: <Image source={require('../assets/list.png')} style={{width: 25, height: 30}}/>},
        
    },
        SetGoal:{
        screen: SetGoalsScreen,
        navigationOptions:{tabBarLabel:"Set Goal",
        tabBarIcon: <Image source={require('../assets/setting-goal.png')} style={{width: 25, height: 30}}/>
        },
        
        
    },


})