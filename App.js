/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StatusBar } from 'react-native';
import { AppNavigator } from './app/screens/AppNavigator';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
                <AppNavigator />
            </>
        )
    }
}