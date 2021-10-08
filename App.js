import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
} from 'react-native';

//hàm này sẽ render ra tất cả các nội dung hiển thị
const App = () => {
  const [name, setName] = useState('');

  return (
    //phan nay danh cho SectionList
    <View style={styles.body}>
      <Text style={styles.text}> Please write your name: </Text>
      <TextInput
        style={styles.input}
        // multiline
        // maxLength={4}
        // keyboardType="decimal-pad"
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
      />
      <Text style={styles.text}> Your name is {name} </Text>
    </View>
  );
};

//ta có thể hiểu "styles" này gần giống như một file css, nó format lại định dạng hiển thị cho chúng ta
//các classname gần tương tự như ở CSS, ta có thể sử dụng extension auto import để nó gợi ý
const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    alignItems: 'center',
    margin: 10,
  },

  input: {
    borderRadius: 5,
    borderColor: '#555',
    width: 200,
    fontSize: 15,
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default App;
