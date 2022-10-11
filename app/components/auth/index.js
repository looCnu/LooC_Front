
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';

import AuthForm from './autoForm';
import AuthLogo from './autoLogo';

const AuthComponent =  () => {

    state = {
        lodding: false,
    };

    if(this.state.lodding) {
        return (
            <View style={styels.lodding}>
                <ActivityIndicator/>
            </View>
        );
    }else{
        return (
            <ScrollView style={styels.container}>
                <View>
                    <AuthLogo/>
                    <AuthForm/>
                </View>
            </ScrollView>
        );
    }

    
};


const styels = StyleSheet.create({
    lodding: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#7487C5',
        padding: 130,
    },

});

export default AuthComponent;

