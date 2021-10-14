import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import 'react-native-gesture-handler';

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

export default ScreenA;
