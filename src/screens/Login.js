import React, {useEffect} from 'react';
import {useState} from 'react/cjs/react.development';
const {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
} = require('react-native');
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  err => console.log(err),
);

const Login = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
      );
    });
  };

  const getData = async () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT Name, Age FROM Users WHERE ID=1',
          [],
          (tx, result) => {
            let len = result.rows.length;
            if (len > 0) {
              navigation.navigate('Home');
            }
          },
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    createTable();
  }, []);

  //vì hàm này chạy async, nên ta phải sử dụng async/await để lấy đươc dữ liệu
  const setData = async () => {
    if (name === '' || age === '') Alert.alert('Please fill in your name');
    else {
      //phải có try catch vì nếu đã là async thì chưa chắc sẽ thành công 100% (do đường truyền, do mất file,...)
      try {
        // const user = {
        //   Name: name,
        //   Age: age,
        // };
        // await AsyncStorage.setItem('User', JSON.stringify(user));
        db.transaction(async tx => {
          // await tx.executeSql(
          //   "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ')',
          // );
          await tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?,?)', [
            name,
            age,
          ]);
        });
        navigation.navigate('Home');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../../assets/sqlite.png')} />
      <Text style={styles.text}> Async storage </Text>
      <TextInput
        onChangeText={value => setName(value)}
        style={styles.input}
        placeholder="Enter your name"
      />
      <TextInput
        onChangeText={value => setAge(value)}
        style={styles.input}
        placeholder="Enter your age"
      />
      <CustomButton title="Login" onPressHandler={setData} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});
export default Login;
