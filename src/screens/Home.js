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
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {increaseAge, setAge, setName} from '../redux/actions';
import userReducer from '../redux/reducers';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  err => console.log(err),
);

const Home = ({navigation, route}) => {
  //lay state nay tu store thay vi khai bao cuc bo
  const {name, age} = useSelector(state => state.userReducer);
  //dispatch dung de goi cac actions
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      // AsyncStorage.getItem('User').then(value => {
      //   if (value !== null) {
      //     let user = JSON.parse(value);
      //     setName(user.Name);
      //     setAge(user.Age);
      //   }
      // });
      db.transaction(tx => {
        tx.executeSql(
          'SELECT Name, Age FROM Users WHERE ID=1',
          [],
          (tx, result) => {
            let len = result.rows.length;
            if (len > 0) {
              let userName = result.rows.item(0).Name;
              let userAge = result.rows.item(0).Age;
              dispatch(setName(userName));
              dispatch(setAge(userAge));
            }
          },
        );
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
        // const user = {
        //   Name: name,
        // };
        // await AsyncStorage.mergeItem('User', JSON.stringify(user));

        db.transaction(tx => {
          tx.executeSql(
            'UPDATE Users SET Name=?',
            [name],
            () => {
              Alert.alert('Success', 'Your data has been updated');
            },
            err => console.log(err),
          );
        });
      } catch (err) {
        Alert.alert(err);
      }
    }
  };

  const deleteData = async () => {
    try {
      // await AsyncStorage.removeItem('User');
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM Users',
          [],
          () => {
            navigation.navigate('Login');
          },
          err => console.log(err),
        );
      });
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
        onChangeText={value => dispatch(setName(value))}
        style={styles.input}
        placeholder="Enter your name"
      />
      <CustomButton title="Update" onPressHandler={updateData} color="orange" />
      <CustomButton
        title="Delete"
        onPressHandler={deleteData}
        style={{marginTop: 10, backgroundColor: 'red'}}
      />
      <CustomButton
        title="Increase age"
        onPressHandler={() => dispatch(increaseAge())}
        style={{marginTop: 10, backgroundColor: 'dodgerblue'}}
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

export default Home;
