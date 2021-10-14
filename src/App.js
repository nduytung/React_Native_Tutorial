import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialTopTabNavigator();

import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        options={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'ScreenA') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              color = focused ? 'pink' : 'white';
            } else if (route.name === 'ScreenB') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              color = focused ? 'pink' : 'white';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: 'pink',
        //   inactiveTintColor: 'white',
        //   activeBackgroundColor: 'white',
        //   inactiveBackgroundColor: 'gray',
        //   showLabel: true,
        //   labelStyle: {fontSize: 14},
        // }}
        activeColor="white"
        inactiveColor="purple"
        barStyle={{backgroundColor: 'purple'}}>
        {/* vì một số hạn chế của RN, đừng copy screen A rồi đổi tên thành screen B. HÃY GÕ MỚI HOÀN TOÀN  */}
        <Tab.Screen
          name="ScreenA"
          component={ScreenA}
          // options={{tabBarBadge: 3}}
          //tat header di bang option
        />
        <Tab.Screen name="ScreenB" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
