import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Singin from './components/auth';
import Diary from './components/diary';
import News from './components/news';


const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

const isLoggedIn = true;

const AppTapComponent = () => {
    return (
    <MainScreenTab.Navigator>
        <MainScreenTab.Screen name="Dairy" component={Diary} />
        <MainScreenTab.Screen name="News" component={News} />
    </MainScreenTab.Navigator>  
    );
};

export const RootNavigator = () => {
    return (
        <AuthStack.Navigator>
            { isLoggedIn ? (
                <AuthStack.Screen name = "Main" component={AppTapComponent} />
            ) : (
                <AuthStack.Screen name = "SginIn" component={SignIn} />
            )}
        </AuthStack.Navigator>
    );

}
