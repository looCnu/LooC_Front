import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello World</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;