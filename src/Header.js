import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React Native Tutorial </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default Header;
