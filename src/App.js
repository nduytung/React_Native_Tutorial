import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
    //neu dung replace, screen B se tro thanh screen duy nhat ton tai, khong back duoc
    // navigation.replace('ScreenB');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}> Screen A</Text>
      <Pressable
        onPress={() => onPressHandler()}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'white' : 'lime',
        })}>
        <Text style={styles.text}>Go to screen B</Text>
      </Pressable>
    </View>
  );
};

const ScreenB = ({navigation}) => {
  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}> Screen B</Text>
      <Pressable
        onPress={() => onPressHandler()}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'white' : 'lime',
        })}>
        <Text style={styles.text}>Back to screen A</Text>
      </Pressable>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          header: () => null,
        }}>
        {/* vì một số hạn chế của RN, đừng copy screen A rồi đổi tên thành screen B. HÃY GÕ MỚI HOÀN TOÀN  */}
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          //tat header di bang option
        />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
