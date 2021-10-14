import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import 'react-native-gesture-handler';

const ScreenA = ({navigation, route}) => {
  const Users = [
    {
      id: 1,
      name: 'User A',
    },
    {
      id: 2,
      name: 'User B',
    },
    {
      id: 3,
      name: 'User C',
    },
  ];

  const [name, setName] = useState('');
  const onPressHandler = () => {
    // navigation.navigate('ScreenB');
    //neu dung replace, screen B se tro thanh screen duy nhat ton tai, khong back duoc
    // navigation.replace('ScreenB');

    for (let user of Users) {
      setName(user.name);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}> Screen A</Text>
      <Pressable
        onPress={() => onPressHandler()}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'white' : 'lime',
        })}>
        <Text style={styles.text}>Get the last user</Text>
      </Pressable>
      <Text style={styles.text}> {name} </Text>
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
