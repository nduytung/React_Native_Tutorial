import React from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';

//hàm này sẽ render ra tất cả các nội dung hiển thị
const App = () => {
  return (
    //chèn file styles.body vào đây
    <View style={styles.body}>
      <Text style={styles.text}>hello, my name is Mash </Text>
      <Button
        onPress={() =>
          Linking.openURL('https://youtube.com/programmingwithmash')
        }
        title="Youtube channel"></Button>
    </View>
  );
};

//ta có thể hiểu "styles" này gần giống như một file css, nó format lại định dạng hiển thị cho chúng ta
//các classname gần tương tự như ở CSS, ta có thể sử dụng extension auto import để nó gợi ý
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
