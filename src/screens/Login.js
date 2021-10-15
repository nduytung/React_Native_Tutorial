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
import {useSelector, useDispatch} from 'react-redux';
import {setAge, setName} from '../redux/actions';
import userReducer from '../redux/reducers';
import PushNotification from 'react-native-push-notification';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  err => console.log(err),
);

const Login = ({navigation, route}) => {
  //lay state nay tu store thay vi khai bao cuc bo
  const {name, age} = useSelector(state => state.userReducer);
  //dispatch dung de goi cac actions
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

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

  //vì hàm này chạy async, nên ta phải sử dụng async/await để lấy đươc dữ liệu
  const setData = async () => {
    if (name === '' || age === '') Alert.alert('Please fill in your name');
    else {
      //phải có try catch vì nếu đã là async thì chưa chắc sẽ thành công 100% (do đường truyền, do mất file,...)
      try {
        dispatch(setName(name));
        dispatch(setAge(age));
        db.transaction(async tx => {
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

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  useEffect(() => {
    getData();
    createTable();
    createChannels();
  }, []);

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../../assets/redux.png')} />
      <Text style={styles.text}> Async storage </Text>
      <TextInput
        onChangeText={value => dispatch(setName(value))}
        style={styles.input}
        placeholder="Enter your name"
      />
      <TextInput
        onChangeText={value => dispatch(setAge(value))}
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
    width: 150,
    height: 150,
    margin: 20,
    marginBottom: 100,
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
