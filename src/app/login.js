import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Animated, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import DB from '../util/db';

export default class login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            fadeAnim: new Animated.Value(0)
        }
    }

    componentWillMount() {
        DB.get('1').then((data) => {
           this.setState({
               username:data.username,
               password:data.password
           });
        }).catch((err)=>{
            alert(err);
        });
    }

    componentDidMount = () => {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1, duration: 5000,
        }).start();
    };

    _onPressButton = () => {
        if(this.state.username.length === 11) {
           DB.save('1', {username:this.state.username, password:this.state.password});
           this.props.onLogin(true);
        }
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../image/bg_login.jpg')}/>
                </View>

                <View style={styles.inputContainer}>
                   <View style={styles.formContainer}>
                       <StatusBar barStyle="light-content"/>
                       <TextInput  underlineColorAndroid="rgba(0,0,0,0)"
                                   keyboardType={'numeric'}
                                   maxLength={11}
                                   placeholder="输入手机号码"
                                   placeholderTextColor="rgba(255,255,255,0.7)"
                                   style={styles.inputStyle}
                                   returnKeyType="next"
                                   defaultValue ={this.state.username}
                                   onChangeText={(text) => this.setState({username:text})}>

                       </TextInput>
                       <TextInput  underlineColorAndroid="rgba(0,0,0,0)"
                                   placeholder="验证密码"
                                   placeholderTextColor="rgba(255,255,255,0.7)"
                                   style={styles.inputStyle}
                                   defaultValue={this.state.password}
                                   returnKeyType="go"
                                   onChangeText={(text) => this.setState({password:text})}>

                       </TextInput>

                       <TouchableOpacity onPress={() => this._onPressButton()} style={styles.buttonContainer}>
                           <Text style={styles.buttonText}>
                               登录
                           </Text>
                       </TouchableOpacity>
                   </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff'
   },
   logo: {
       width:240,
       height:180
   },
   logoContainer: {
       flexGrow: 3,
       alignItems: 'center',
       justifyContent: 'center'

   },
   loginText: {
       color: '#fff',
       marginTop: 100,
       marginRight: 16,
       marginLeft: 16,
       textAlign: 'center',
       opacity: 0.8
   },
   inputContainer: {
       flexGrow: 1,
   },
   formContainer: {
       paddingRight: 20,
       paddingLeft: 20
   },
   inputStyle: {
       height: 50,
       backgroundColor: '#c3e2ff',
       marginBottom:10,
       color: '#fff',
       paddingHorizontal: 10
   },
   buttonContainer: {
       height: 50,
       backgroundColor: '#fe6a02',
       paddingVertical: 15,
       marginTop: 15
   },
   buttonText: {
       textAlign: 'center',
       color: '#fff',
       fontWeight: '700'
   }
});