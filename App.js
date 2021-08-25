/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, { Component } from 'react'
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Login from "./app/screens/login"
 import HomeScreen from "./app/screens/homeScreen"
 
 const Stack = createStackNavigator();

 export default class App extends Component {
 
     constructor(props){
         super(props);
     }
 
     render() {
         return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            
         )
     }
 }