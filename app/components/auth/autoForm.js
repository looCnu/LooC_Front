import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from '../../utils/forms/input';


const AuthForm = () => {

    state = {
        type: 'Login',
        action: 'Login',
        actionMode: '새로 등록할게요'
        hasErrors: false, 
        form: {
            email:{
                value: '',
                type: 'textInputRevised',
                rules: {},
                vaild: false,
            },
            password:{
                value: '',
                type: 'textInput',
                rules: {},
                vaild: false,
            },
            confirmPassword: {
                value: '',
                type: 'textInput',
                rules: {},
                vaild: false,
            },
        },
    };



    return (
        <View>
            <Input
                value={this.state.form.email.value}
                type={this.state.form.email.type}
                autoCapitalize={'none'}
                keyboradType={'email-address'}
                placeholder= "이메일 주소"
                placeholderColor={'#ddd'}
            />

            <Input
                value={this.state.form.password.value}
                type={this.state.form.password.type}
                secureTextEntry={true}
                placeholder="비밀번호"
                placeholderColor="#ddd"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AuthForm;