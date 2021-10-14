import {PROPERTY_TYPES} from '@babel/types';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

//destructuring chứ không truyền vào props thuần
const CustomButton = ({onPressHandler, title, ...props}) => {
  return (
    <Pressable
      delayLongPress={2000}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      android_ripple={{color: 'dodgerblue'}}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'white' : 'lime',
        },
        styles.button,
        {...props.style},
      ]}
      onPress={onPressHandler}>
      <Text style={styles.text}> {title} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default CustomButton;
