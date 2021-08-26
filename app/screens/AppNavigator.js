import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./login"
import HomeScreen from "./homeScreen"
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();


export const AppNavigator = () => {

    const [token, setToken] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@token');
                if (JSON.parse(value) !== null) {
                    // value previously stored
                    console.log('stored token', JSON.parse(value).token);
                    setToken(JSON.parse(value)?.token)
                }
            } catch (e) {
                // error reading value
                throw e;
            }
        }

        getData();

    }, [token])


    if (token) {
        return <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
