import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';

import 'react-native-gesture-handler';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/CustomButton';

const ScreenA = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const getData = async () => {
    try {
      AsyncStorage.getItem('User').then(value => {
        if (value !== null) {
          let user = JSON.parse(value);
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async () => {
    if (name === '' || age === '') Alert.alert('Please fill in your name');
    else {
      //phải có try catch vì nếu đã là async thì chưa chắc sẽ thành công 100% (do đường truyền, do mất file,...)
      try {
        const user = {
          Name: name,
        };
        await AsyncStorage.mergeItem('User', JSON.stringify(user));
        Alert.alert('Success', 'Your data has been updated');
      } catch (err) {
        Alert.alert(err);
      }
    }
  };

  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('User');
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert('error!');
    }
  };

  //chi chay một lần duy nhất khi khởi động app
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.body}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>
        Welcome back, {name}{' '}
      </Text>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>
        You are {age} years old now{' '}
      </Text>
      <TextInput
        onChangeText={value => setName(value)}
        style={styles.input}
        placeholder="Enter your name"
      />
      <CustomButton title="Update" onPressHandler={updateData} color="orange" />
      <CustomButton
        title="Delete"
        onPressHandler={deleteData}
        style={{marginTop: 10, backgroundColor: 'red'}}
      />
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
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});

export default ScreenA;
