import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

import Login from './screens/Login';
import Home from './screens/Home';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import Map from './screens/Map';

const App = () => {
  return (
    //boc tat ca bang redux provider
    <Provider store={Store}>
      <NavigationContainer>
        {/* đổi thành stack navigator vì tab navigator không thể truyền các props đuọc  */}
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* vì một số hạn chế của RN, đừng copy screen A rồi đổi tên thành screen B. HÃY GÕ MỚI HOÀN TOÀN  */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
