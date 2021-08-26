import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from "../assets/styles/style";
import Api from "../api";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {

    state={email: "", password: ""}
    constructor(props){
        super(props);
    }



        storeData = async () => {
            try {
              const response = await Api.Auth(this.state.email, this.state.password);
              await AsyncStorage.setItem('@token', JSON.stringify(response));
              this.props.navigation.navigate('HomeScreen')
            } catch (e) {
                // saving error
                throw e;
            }
        };

    

    // componentDidUpdate() {
    //     const getData = async () => {
    //         try {
    //           const value = await AsyncStorage.getItem('@token');
    //           if(JSON.parse(value).token !== null) {
    //             // value previously stored
    //             console.log('stored token', JSON.parse(value).token);
    //           }
    //         } catch(e) {
    //           // error reading value
    //           throw e;
    //         }
    //     }

    //     getData();
    // }
    
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginTitle}>
                    <Text style={styles.loginText}>Hello Again!</Text>
                    <Text style={styles.loginText}>Welcome back!</Text>
                </View>
                <View style={styles.input}>
                    <TextInput 
                        placeholder="Email Address" 
                        placeholderTextColor='lightgray' 
                        style={styles.inputFont}
                        onChangeText={text => this.setState(prevState =>({...prevState, email: text}))}
                        autoCapitalize={'none'}
                        value={this.state.email} 
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Password" 
                        placeholderTextColor='lightgray' 
                        style={styles.inputFont}
                        onChangeText={text => this.setState(prevState =>({...prevState, password: text}))}
                        autoCapitalize={'none'}
                        value={this.state.password} 
                    />
                </View>
                <View style={styles.boxBtn}>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this.storeData}>
                        <Text style={styles.textBtnLogin}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxBtn}>
                    <TouchableOpacity
                        style={styles.btnSingUp}>
                        <Text style={styles.textBtnLogin}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}