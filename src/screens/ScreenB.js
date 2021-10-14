import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import 'react-native-gesture-handler';
import GlobalStyle from '../utils/GlobalStyle';

const ScreenB = ({route, navigation}) => {
  const {ItemName, ItemId} = route.params;
  const onPressHandler = () => {
    navigation.navigate('ScreenA', {Message: 'Message from screen B'});
  };

  return (
    <View style={styles.body}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}> Screen B</Text>
      <Pressable
        onPress={() => onPressHandler()}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'white' : 'lime',
        })}>
        <Text style={GlobalStyle.ButtonText}>Back to screen A</Text>
      </Pressable>
      <Text style={styles.text}>{ItemName} </Text>
      <Text style={styles.text}>ID: {ItemId} </Text>
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

export default ScreenB;
