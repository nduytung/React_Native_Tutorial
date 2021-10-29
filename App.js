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
      <View style={styles.view1}>
        <Text style={styles.text}> 1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}> 2 </Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}> 3 </Text>
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
    justifyContent: 'center',
    borderWidth: 10,
    borderRadius: 10,
    alignItems: 'stretch',
  },

  view1: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },

  view2: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
});

export default App;
