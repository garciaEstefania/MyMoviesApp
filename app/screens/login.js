import React, { Component, createRef } from 'react';
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import styles from "../assets/styles/style";
import Api from "../api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../common/colors';

export default class Login extends Component {

    state = { email: "", password: "", showPassword: false }
    constructor(props) {
        super(props);
        this.emailRef = createRef();
    }



    storeData = async () => {
        try {
            const response = await Api.Auth(this.state.email, this.state.password);

            // console.log('response login', response)
            if (response?.token) {
                await AsyncStorage.setItem('@token', JSON.stringify(response));
                this.props.navigation.navigate('HomeScreen')
            } else {
                Alert.alert('Oops something went wrong...', `${response?.error}`)
            }
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
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                                onChangeText={text => this.setState(prevState => ({ ...prevState, email: text }))}
                                autoCapitalize={'none'}
                                value={this.state.email}
                                blurOnSubmit={false}
                                onSubmitEditing={() => this.emailRef.current?.focus()}
                                returnKeyType='next'
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor='lightgray'
                                style={styles.inputFont}
                                onChangeText={text => this.setState(prevState => ({ ...prevState, password: text }))}
                                autoCapitalize={'none'}
                                value={this.state.password}
                                ref={this.emailRef}
                                secureTextEntry={this.state.showPassword ? false : true}
                            />
                            {this.state.password.length > 0 && <Text style={{ color: '#fff', marginRight: 10 }} onPress={() => this.setState(prevState => ({ ...prevState, showPassword: !this.state.showPassword }))}>{this.state.showPassword ? 'Hide' : 'Show'}</Text>}
                        </View>
                        <View style={styles.boxBtn}>
                            <TouchableOpacity
                                activeOpacity={this.state.password.length === 0 || this.state.email.length === 0 ? 1 : 0.8}
                                style={this.state.password.length === 0 || this.state.email.length === 0 ? { ...styles.btnLogin, backgroundColor: colors.disabled } : styles.btnLogin}
                                onPress={this.state.password.length === 0 || this.state.email.length === 0 ? () => { } : this.storeData}>
                                <Text style={this.state.password.length === 0 || this.state.email.length === 0 ? { ...styles.textBtnLogin, color: colors.primary } : styles.textBtnLogin}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}