import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';

//hàm này sẽ render ra tất cả các nội dung hiển thị
const App = () => {
  const [name, setName] = useState('Style test');

  const onClickHandler = () => {
    setName('Style test is done');
  };

  return (
    //chèn file styles.body vào đây
    <View style={styles.body}>
      <Text style={styles.text}> {name} </Text>
      <View style={styles.button}>
        <Button onPress={() => onClickHandler()} title="Update state"></Button>
      </View>
    </View>
  );
};

//ta có thể hiểu "styles" này gần giống như một file css, nó format lại định dạng hiển thị cho chúng ta
//các classname gần tương tự như ở CSS, ta có thể sử dụng extension auto import để nó gợi ý
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'pink',
    borderRadius: 10,
  },

  text: {
    color: 'black',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },

  button: {
    width: 200,
    height: 60,
  },
});

export default App;
